import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { CategoryMeta } from "@/data/categories";

interface Props {
  category: CategoryMeta;
}

export const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      to={category.path}
      style={{ ["--category" as string]: `var(--${category.accentVar})` }}
      className="parchment group relative rounded-sm overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300 hover:shadow-[var(--shadow-deep)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={category.image}
          alt={`${category.name} category`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div
          className="absolute inset-0 opacity-60 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, hsl(var(--category) / 0.85) 100%)",
          }}
        />
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-wide text-primary-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {category.name}
          </h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-base font-semibold text-foreground mb-2">
          {category.tagline}
        </p>
        <p className="text-sm text-muted-foreground italic mb-4 flex-1">
          {category.blurb}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
            {category.count}
          </span>
          <span
            className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
            style={{ color: "hsl(var(--category))" }}
          >
            Enter <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
