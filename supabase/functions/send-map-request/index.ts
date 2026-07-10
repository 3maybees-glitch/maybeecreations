import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const OWNER_EMAIL = "3maybees@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface MapRequestPayload {
  name: string;
  email: string;
  realm: string;
  mapTitle: string;
  description: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = (await req.json()) as MapRequestPayload;
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const realm = payload.realm?.trim();
    const mapTitle = payload.mapTitle?.trim();
    const description = payload.description?.trim();

    if (!name || !email || !realm || !mapTitle || !description) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: insertError } = await supabase.from("map_requests").insert({
      requester_name: name,
      email,
      realm,
      map_title: mapTitle,
      description,
    });

    if (insertError) {
      console.error("map_requests insert failed:", insertError);
      return new Response(
        JSON.stringify({ error: "Could not save your quest. Try again." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const emailHtml = `
        <div style="font-family: Georgia, serif; color: #2b2016; background: #f3e9d4; padding: 32px; border: 2px solid #8a6a3a;">
          <h1 style="font-size: 22px; letter-spacing: 2px;">A New Quest Arrives at the Guild</h1>
          <p style="font-style: italic;">A traveler has commissioned a map from The Cartographer's Quest.</p>
          <hr style="border: none; border-top: 1px solid #8a6a3a;" />
          <p><strong>Explorer:</strong> ${escapeHtml(name)}</p>
          <p><strong>Raven address (email):</strong> ${escapeHtml(email)}</p>
          <p><strong>Realm:</strong> ${escapeHtml(realm)}</p>
          <p><strong>Requested map:</strong> ${escapeHtml(mapTitle)}</p>
          <p><strong>The quest, in their words:</strong></p>
          <blockquote style="border-left: 3px solid #8a6a3a; margin: 0; padding: 8px 16px; white-space: pre-wrap;">${escapeHtml(description)}</blockquote>
        </div>
      `;

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "The Cartographer's Quest <onboarding@resend.dev>",
          to: [OWNER_EMAIL],
          reply_to: email,
          subject: `New Map Quest: ${mapTitle}`,
          html: emailHtml,
        }),
      });

      if (!resendResponse.ok) {
        // The request is already stored; log the email failure but don't fail the submission.
        console.error("Resend email failed:", await resendResponse.text());
      }
    } else {
      console.warn("RESEND_API_KEY not set; request saved but no email sent.");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-map-request error:", error);
    return new Response(JSON.stringify({ error: "Unexpected error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
