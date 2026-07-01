import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { ReactNode } from "react";
import { STORIES_EYEBROW, STORIES_INDEX_TITLE, STORIES_TAGLINE } from "@/data/stories";

interface StoriesPageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  compact?: boolean;
}

export const StoriesPageLayout = ({
  children,
  title = STORIES_INDEX_TITLE,
  subtitle = STORIES_TAGLINE,
  eyebrow = STORIES_EYEBROW,
  compact = false,
}: StoriesPageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className={`relative overflow-hidden ${compact ? "pt-10 pb-2" : "pt-10 md:pt-14 pb-2 md:pb-4"}`}>
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "var(--gradient-parchment)" }} />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-2 md:mb-4 text-accent">
              ✦ {eyebrow} ✦
            </p>
            <h1 className="font-display text-4xl md:text-7xl font-black uppercase tracking-wide mb-3 md:mb-6 text-primary">
              {title}
            </h1>
            <div className="h-px w-24 md:w-32 mb-3 md:mb-6 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            {subtitle && (
              <p className="text-base md:text-2xl text-foreground/90 italic leading-relaxed">{subtitle}</p>
            )}
          </div>
        </div>
      </section>

      <main>{children}</main>

      <Footer />
    </div>
  );
};
