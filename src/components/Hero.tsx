import { Button } from "@/components/ui/button";
import { Compass, ScrollText } from "lucide-react";
import mcWatermark from "@/assets/mc-watermark.png";

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
          <ScrollText className="h-4 w-4 text-accent" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
            Maybee Creations · Cartographers of AI
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary mb-4 leading-[1.05] uppercase tracking-wide">
          EXPLORE THE REALMS OF AI
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground font-semibold max-w-2xl mx-auto mb-4 leading-snug">
          Printable digital AI world maps and beginner-friendly tutorial packs for learning today's top AI tools. Instant download via Payhip.
        </p>

        <div className="ink-divider w-48 mx-auto mb-8" />

        <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-6 italic leading-relaxed font-medium">
          Unfurl fantasy world maps charting the kingdoms of ChatGPT, Claude, Gemini,
          Perplexity and more — each paired with a tutorial Adventure Pack that turns
          learning AI into a journey worth taking.
        </p>
        <p className="text-lg md:text-xl text-foreground/85 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Built for <span className="font-semibold text-primary">families</span> juggling schedules, chores, and household life — and{" "}
          <span className="font-semibold text-primary">students</span> mastering study plans, deadlines, and daily productivity.
          Turn every AI tool into a trusted companion for assistant management and time mastery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base uppercase tracking-widest"
          >
            <a href="#realms">
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
