import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { CategoryMeta } from "@/data/categories";
import type { ReactNode } from "react";

interface Props {
  category: CategoryMeta;
  intro?: string;
  children: ReactNode;
}

export const CategoryPageLayout = ({ category, intro, children }: Props) => {
  return (
    <div
      className="min-h-screen"
      style={{ ["--category" as string]: `var(--${category.accentVar})` }}
    >
      <Navigation />

      <section className="relative pt-20 pb-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.7) 0%, hsl(var(--background)) 90%)",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <p
              className="text-sm uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: "hsl(var(--category))" }}
            >
              ✦ The {category.name} Realm ✦
            </p>
            <h1
              className="font-display text-5xl md:text-7xl font-black uppercase tracking-wide mb-6"
              style={{ color: "hsl(var(--category))" }}
            >
              {category.name}
            </h1>
            <div
              className="h-px w-32 mb-6"
              style={{
                background:
                  "linear-gradient(to right, transparent, hsl(var(--category) / 0.6), transparent)",
              }}
            />
            <p className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed">
              {intro ?? category.blurb}
            </p>
          </div>
        </div>
      </section>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export const CategorySection = ({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) => (
  <section className="py-8 px-4">
    <div className="container mx-auto">
      <div className="mb-6">
        {eyebrow && (
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-2"
            style={{ color: "hsl(var(--category))" }}
          >
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
        <div className="ink-divider w-24 mt-3" />
      </div>
      {children}
    </div>
  </section>
);
