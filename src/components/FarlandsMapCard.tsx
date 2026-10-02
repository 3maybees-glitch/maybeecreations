import { Button } from "@/components/ui/button";
import type { FarlandsMap } from "@/data/farlandsMaps";
import { ExternalLink } from "lucide-react";

export const FarlandsMapCard = ({ map }: { map: FarlandsMap }) => (
  <article className="parchment rounded-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 duration-300">
    <div className="relative overflow-hidden bg-muted aspect-[3/2]">
      <img
        src={map.image}
        alt={`Farlands Explorer illustrated map of ${map.name}`}
        loading="lazy"
        decoding="async"
        width={1200}
        height={807}
        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
      />
      <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold text-primary">
        Farlands Explorer
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-1">{map.name}</h3>
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
        {map.region}
      </p>
      <p className="text-base text-muted-foreground italic mb-4 flex-1">&ldquo;{map.tagline}&rdquo;</p>

      <details className="mb-4 text-sm text-foreground/85">
        <summary className="cursor-pointer text-xs uppercase tracking-widest font-semibold text-primary/80 hover:text-primary">
          {map.stops.length} stops
        </summary>
        <ol className="mt-3 space-y-1 list-decimal list-inside marker:text-muted-foreground">
          {map.stops.map((stop, index) => (
            <li key={`${stop}-${index}`}>{stop}</li>
          ))}
        </ol>
      </details>

      <div className="ink-divider mb-4" />

      <p className="text-sm font-semibold text-primary mb-3">{map.price} digital download</p>

      <Button
        asChild
        className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
      >
        <a href={map.url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" />
          View kit
        </a>
      </Button>
    </div>
  </article>
);
