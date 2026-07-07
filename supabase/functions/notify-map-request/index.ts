import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") ?? "3maybees@gmail.com";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("NOTIFY_FROM_EMAIL") ?? "notifications@maybeecreations.com";

interface MapRequestPayload {
  id: string;
  realm: string;
  title: string;
  description?: string | null;
  email?: string | null;
  notify_when_made?: boolean;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload = (await req.json()) as MapRequestPayload;

    if (!payload?.id || !payload?.title || !payload?.realm) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: true, emailed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const lines = [
      "New map request on maybeecreations.com",
      "",
      `Realm: ${payload.realm}`,
      `Idea: ${payload.title}`,
      payload.description ? `Details: ${payload.description}` : null,
      payload.email ? `Email: ${payload.email}` : "Email: (not provided)",
      payload.notify_when_made ? "Notify when made: yes" : "Notify when made: no",
      "",
      `Review in Supabase → map_requests (id: ${payload.id})`,
    ].filter(Boolean);

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `Map request: ${payload.title}`,
        text: lines.join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend error:", detail);
      return new Response(JSON.stringify({ ok: true, emailed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, emailed: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("notify-map-request error:", error);
    return new Response(JSON.stringify({ ok: true, emailed: false }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
