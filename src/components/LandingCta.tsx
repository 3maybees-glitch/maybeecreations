import { Button } from "@/components/ui/button";
import { Compass, ShoppingBag } from "lucide-react";

export const LandingCta = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="parchment rounded-sm p-10 md:p-14 text-center border border-primary/15 shadow-[var(--shadow-soft)]">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            ✦ The trail doesn&apos;t end here ✦
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-primary uppercase tracking-wide mb-4">
            Ready to Chart Your Course?
          </h2>
          <div className="ink-divider w-24 mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Download printable maps and adventure guides from the shop — or wander deeper into
            any realm and discover what&apos;s waiting on the next page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 uppercase tracking-widest"
            >
              <a href="https://payhip.com/MaybeeCreations" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Visit the Shop
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/40 bg-background/60 uppercase tracking-widest"
            >
              <a href="#realms">
                <Compass className="mr-2 h-5 w-5" />
                Back to Realms
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
