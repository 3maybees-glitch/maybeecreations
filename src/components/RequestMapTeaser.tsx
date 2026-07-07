import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, MapPinned } from "lucide-react";

export const RequestMapTeaser = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="parchment rounded-sm p-10 md:p-14 text-center border border-primary/15 shadow-[var(--shadow-soft)]">
          <div className="inline-flex items-center gap-2 mb-4 text-accent">
            <MapPinned className="h-5 w-5" aria-hidden />
            <p className="text-xs uppercase tracking-[0.3em] font-bold">Chart the Next Expedition</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-primary uppercase tracking-wide mb-4">
            What Map Should We Make Next?
          </h2>
          <div className="ink-divider w-24 mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Have a team, era, book, or AI frontier you want mapped? Submit your idea to the
            Mapmaker&apos;s Ledger. Approved requests appear publicly — no voting, just community
            inspiration.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 uppercase tracking-widest"
          >
            <Link to="/request-a-map">
              <Compass className="mr-2 h-5 w-5" />
              Request a Map
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
