import { Button } from "@/components/ui/button";
import { BookOpen, Gift } from "lucide-react";
import type { BibleMap } from "@/data/bibleMaps";

export const BibleMapCard = ({ map }: { map: BibleMap }) => (
  <article
    className={`parchment rounded-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 duration-300 ${
      map.isFree ? "ring-2 ring-[hsl(var(--faith))]/50 shadow-[var(--shadow-gold)]" : ""
    }`}
  >
    <div className="relative overflow-hidden bg-muted aspect-[4/3]">
      <img
        src={map.image}
        alt={`Soul Explorer ${map.name} fantasy Bible map illustration`}
        loading="lazy"
        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
      />
      <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold text-primary">
        {map.category}
      </div>
      {map.isFree && (
        <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(var(--faith))] text-[hsl(var(--primary))] border border-[hsl(var(--faith))] text-xs uppercase tracking-widest font-bold">
          Free Gift
        </div>
      )}
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-1">
        {map.name}
      </h3>
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
        {map.books}
      </p>
      <p className="text-base text-muted-foreground italic mb-6 flex-1">
        "{map.tagline}"
      </p>

      <div className="ink-divider mb-4" />

      <Button
        asChild
        className={
          map.isFree
            ? "justify-start bg-[hsl(var(--faith))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--faith))]/90 shadow-lg shadow-[hsl(var(--faith))]/30 font-semibold"
            : "justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
        }
      >
        <a href={map.url} target="_blank" rel="noopener noreferrer">
          {map.isFree ? (
            <Gift className="h-4 w-4 mr-2" />
          ) : (
            <BookOpen className="h-4 w-4 mr-2" />
          )}
          {map.isFree ? "Get Free Map & Guide — Our Blessing to You" : `Get Map & Guide — ${map.price}`}
        </a>
      </Button>
    </div>
  </article>
);
