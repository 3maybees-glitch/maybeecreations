import { Button } from "@/components/ui/button";
import { ChevronDown, Compass, Sparkles } from "lucide-react";
import mcWatermark from "@/assets/mc-watermark.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden pt-14 md:pt-20">
      <div className="absolute inset-0" style={{ background: "var(--gradient-parchment)" }} />

      <div
        className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover opacity-90"
        style={{ backgroundImage: `url(${mcWatermark})` }}
      />

      <div
        className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse-slow"
        style={{ background: "hsl(var(--accent))" }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse-slow"
        style={{ background: "hsl(var(--primary))", animationDelay: "1.5s" }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-background/70 backdrop-blur-sm border border-primary/30 rounded-sm px-4 py-1.5 mb-8 animate-fade-up">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
            Faith • Freedom • Fans • Future
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary mb-4 leading-[1.05] uppercase tracking-wide animate-fade-up [animation-delay:100ms]">
          CREATIVE APPS
          <br className="hidden sm:block" /> & VISUAL MAPS
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground font-semibold max-w-2xl mx-auto mb-6 leading-snug animate-fade-up [animation-delay:200ms]">
          Apps and maps for faith, freedom, fans, and the future.
        </p>

        <div className="ink-divider w-48 mx-auto mb-8 animate-fade-up [animation-delay:250ms]" />

        <p className="text-base md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-10 italic leading-relaxed font-medium animate-fade-up [animation-delay:300ms]">
          Maybee Creations builds creative apps, visual maps, and digital learning tools for
          faith, freedom, sports fans, and the AI future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:400ms]">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base uppercase tracking-widest shadow-[var(--shadow-soft)]"
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

      <a
        href="#pillars"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50 hover:text-primary transition-colors animate-bounce-gentle"
        aria-label="Scroll to explore"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};
