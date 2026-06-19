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
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-px bg-border/60">
          {category.mapPreviews.map((map) => (
            <div key={map.name} className="relative overflow-hidden">
              <img
                src={map.image}
                alt={map.name}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div
          className="absolute inset-x-0 bottom-0 px-4 py-3"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, hsl(var(--category) / 0.92) 55%)",
          }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-primary-foreground/90 mb-0.5">
            {category.explorerName}
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-wide text-primary-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {category.name}
          </h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-base font-semibold text-foreground mb-2">{category.tagline}</p>
        <p className="text-sm text-muted-foreground italic mb-4 flex-1">{category.blurb}</p>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
            {category.count}
          </span>
          <span
            className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
            style={{ color: "hsl(var(--category))" }}
          >
            Enter the realm <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
