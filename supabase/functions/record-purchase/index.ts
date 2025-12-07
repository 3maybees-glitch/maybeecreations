import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Use anon key for auth verification
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  // Use service role for database operations (bypasses RLS)
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Authorization header required");
    }
    
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    
    if (!user) {
      throw new Error("User not authenticated");
    }

    const { sessionId } = await req.json();
    
    if (!sessionId || typeof sessionId !== "string") {
      throw new Error("Valid session ID is required");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      throw new Error("Payment not completed");
    }

    // CRITICAL: Verify session belongs to authenticated user
    if (session.metadata?.user_id !== user.id) {
      console.error("Session ownership mismatch:", { 
        sessionUserId: session.metadata?.user_id, 
        authenticatedUserId: user.id 
      });
      throw new Error("Session does not belong to authenticated user");
    }

    // Use admin client to bypass RLS for insert
    const { error } = await supabaseAdmin
      .from('purchases')
      .insert({
        user_id: user.id,
        product_name: session.metadata?.product_name || "Unknown Product",
        stripe_session_id: sessionId,
        amount: session.amount_total || 0,
        currency: session.currency || "usd"
      });

    if (error) throw error;

    console.log("Purchase recorded for user:", user.id);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error recording purchase:", error);
    return new Response(JSON.stringify({ error: "Failed to record purchase" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
