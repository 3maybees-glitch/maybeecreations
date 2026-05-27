import { Button } from "@/components/ui/button";
import { Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import mcWatermark from "@/assets/mc-watermark.png";
import maybeeCreationsBanner from "@/assets/maybee-creations-banner.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Parchment gradient backdrop */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-parchment)" }} />

      {/* Maybee Creations watermark */}
      <div
        className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover opacity-90"
        style={{ backgroundImage: `url(${mcWatermark})` }}
      />

      {/* Decorative ink blots */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
           style={{ background: "hsl(var(--accent))" }} />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-15"
           style={{ background: "hsl(var(--primary))" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-background/70 backdrop-blur-sm border border-primary/30 rounded-sm px-4 py-1.5 mb-8">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
            Maybee Creations
          </span>
        </div>

        <Link to="/" className="inline-block mb-4 group">
          <img
            src={maybeeCreationsBanner}
            alt="Maybee Creations"
            className="h-16 sm:h-20 md:h-24 w-auto group-hover:scale-[1.02] transition-transform"
          />
        </Link>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary mb-4 leading-[1.05] uppercase tracking-wide">
          CREATIVE APPS<br className="hidden sm:block" /> & VISUAL MAPS
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground font-semibold max-w-2xl mx-auto mb-6 leading-snug">
          Building digital experiences for faith, freedom, sports fans, and the AI future.
        </p>

        <div className="ink-divider w-48 mx-auto mb-8" />

        <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-10 italic leading-relaxed font-medium">
          Explore four realms of creativity — from Bible-rooted apps and maps, to freedom tools,
          fan experiences, and AI fantasy worlds with beginner-friendly tutorials.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base uppercase tracking-widest"
          >
            <a href="#pillars">
              <Compass className="mr-2 h-5 w-5" />
              Explore the Realms
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/40 px-8 py-6 text-base uppercase tracking-widest bg-background/60 backdrop-blur-sm"
          >
            <a href="https://payhip.com/MaybeeCreations" target="_blank" rel="noopener noreferrer">
              Shop on Payhip
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
