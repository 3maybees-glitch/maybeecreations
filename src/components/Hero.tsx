import { Button } from "@/components/ui/button";
import { Compass, Map, Sparkles } from "lucide-react";
import mcWatermark from "@/assets/mc-watermark.png";
import { heroMapStrip } from "@/data/realmPreviews";
import {
  BRAND_PHRASE,
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  SEO_PHRASE,
} from "@/lib/siteCopy";

export const Hero = () => {
  const [lineOne, lineTwo] = HERO_HEADLINE.split(". ").map((part, index, arr) =>
    index < arr.length - 1 ? `${part}.` : part,
  );

  return (
    <section className="relative min-h-[88vh] md:min-h-[94vh] flex flex-col overflow-hidden pt-14 md:pt-20">
      <div className="absolute inset-0" style={{ background: "var(--gradient-parchment)" }} />

      <div
        className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover opacity-90"
        style={{ backgroundImage: `url(${mcWatermark})` }}
      />

      <div
        className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "hsl(var(--accent))" }}
      />
      <div
        className="absolute bottom-32 right-10 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="relative z-10 flex-1 flex items-center justify-center container mx-auto px-4 text-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-background/70 backdrop-blur-sm border border-primary/30 rounded-sm px-4 py-1.5 mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
              {HERO_EYEBROW}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-5 leading-[1.02] uppercase tracking-wide max-w-5xl mx-auto">
            <span className="block">{lineOne}</span>
            <span className="block text-accent mt-1">{lineTwo}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground font-semibold max-w-3xl mx-auto mb-4 leading-snug">
            {HERO_SUBHEADLINE}
          </p>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10 italic leading-relaxed">
            {BRAND_PHRASE} {SEO_PHRASE.toLowerCase()} — ready to print, explore, and treasure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base uppercase tracking-widest"
            >
              <a href="#realms">
                <Compass className="mr-2 h-5 w-5" />
                Choose Your Realm
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/40 px-8 py-6 text-base uppercase tracking-widest bg-background/60 backdrop-blur-sm"
            >
              <a href="https://payhip.com/MaybeeCreations" target="_blank" rel="noopener noreferrer">
                <Map className="mr-2 h-5 w-5" />
                Browse the Shop
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto border-t border-primary/15 bg-background/50 backdrop-blur-sm">
        <div className="overflow-hidden py-4 md:py-5">
          <div className="flex animate-marquee gap-4 md:gap-6 w-max">
            {[...heroMapStrip, ...heroMapStrip].map((map, index) => (
              <div
                key={`${map.name}-${index}`}
                className="flex-shrink-0 w-36 md:w-44 rounded-sm overflow-hidden border border-primary/20 shadow-[var(--shadow-soft)] bg-muted"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={map.image}
                    alt={map.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="px-2 py-1.5 text-[10px] md:text-xs font-semibold text-primary truncate bg-card/90">
                  {map.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
