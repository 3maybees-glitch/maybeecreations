import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    
    if (!user) {
      return new Response(JSON.stringify({ hasAccess: false, error: "Not authenticated" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 401,
      });
    }

    const { productName } = await req.json();

    // Check for purchase via Stripe
    const { data: purchase, error: purchaseError } = await supabaseClient
      .from('purchases')
      .select('id')
      .eq('user_id', user.id)
      .eq('product_name', productName)
      .maybeSingle();

    if (purchaseError && purchaseError.code !== 'PGRST116') {
      throw purchaseError;
    }

    // Check for redeemed access code
    const { data: accessCode, error: codeError } = await supabaseClient
      .from('access_codes')
      .select('id')
      .eq('redeemed_by', user.id)
      .eq('product_name', productName)
      .maybeSingle();

    if (codeError && codeError.code !== 'PGRST116') {
      throw codeError;
    }

    const hasAccess = !!purchase || !!accessCode;

    return new Response(JSON.stringify({ 
      hasAccess,
      userId: user.id,
      email: user.email,
      accessType: purchase ? 'purchase' : accessCode ? 'code' : null
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error verifying access:", error);
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ 
      hasAccess: false, 
      error: message 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
