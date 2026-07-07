import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapRequestForm } from "@/components/MapRequestForm";
import { MapRequestLedger } from "@/components/MapRequestLedger";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { staticPageSchemas } from "@/lib/structuredData";
import { useQueryClient } from "@tanstack/react-query";
import { MapPinned } from "lucide-react";

const RequestMap = () => {
  const queryClient = useQueryClient();

  usePageSeo(
    pageMeta.requestMap,
    staticPageSchemas(
      pageMeta.requestMap.path,
      pageMeta.requestMap.title,
      pageMeta.requestMap.description,
      "Request a Map",
    ),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16 pb-16">
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--gradient-parchment)" }} />
          <div className="container mx-auto px-4 relative max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-4 text-accent">
              <MapPinned className="h-5 w-5" aria-hidden />
              <p className="text-xs uppercase tracking-[0.3em] font-bold">Chart the Next Expedition</p>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-primary uppercase tracking-wide mb-4">
              Request a Map
            </h1>
            <div className="ink-divider w-24 mx-auto mb-6" />
            <p className="text-base md:text-xl text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
              Tell us what world you want explored next. We review every submission and publish
              approved ideas to the public ledger — so fellow adventurers can see what the
              community is asking for.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <MapRequestForm
              onSubmitted={() => {
                void queryClient.invalidateQueries({ queryKey: ["map-requests", "approved"] });
              }}
            />
            <MapRequestLedger />
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
            Prefer email? Write us at{" "}
            <a href="mailto:3maybees@gmail.com" className="text-primary underline">
              3maybees@gmail.com
            </a>
            . We read every message.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestMap;
