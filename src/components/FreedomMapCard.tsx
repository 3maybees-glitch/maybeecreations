import { Button } from "@/components/ui/button";
import type { FreedomMap } from "@/data/freedomMaps";
import { Compass, Landmark, Scroll } from "lucide-react";

export const FreedomMapCard = ({ map }: { map: FreedomMap }) => {
  const mapLink = map.mapUrl ?? map.url;
  const bundleLink = map.bundleUrl ?? map.url;
  const separateFields = Boolean(map.mapUrl && map.bundleUrl);
  const sameListing = Boolean(mapLink && bundleLink && mapLink === bundleLink);
  const isAvailable = Boolean(bundleLink || mapLink);

  return (
    <article className="parchment rounded-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 duration-300">
      <div className="relative overflow-hidden bg-muted aspect-[4/3]">
        <img
          src={map.image}
          alt={map.imageAlt ?? `Liberty Explorer ${map.name} fantasy map illustration`}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold text-primary">
          {map.category}
        </div>
        {!isAvailable && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-background/90 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold text-muted-foreground">
            Coming to shop
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-1">
          {map.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
          {map.subtitle}
        </p>
        <p className="text-base text-muted-foreground italic mb-6 flex-1">
          "{map.tagline}"
        </p>

        <div className="ink-divider mb-4" />

        {separateFields && sameListing ? (
          <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            <a href={bundleLink} target="_blank" rel="noopener noreferrer">
              <Scroll className="h-4 w-4 mr-2" />
              Get Map &amp; Adventure Pack{map.price ? ` — ${map.price}` : ""}
            </a>
          </Button>
        ) : separateFields ? (
          <div className="flex flex-col gap-2">
            {map.mapPrice && mapLink ? (
              <Button asChild variant="outline" className="justify-start border-primary/40 hover:bg-primary/5">
                <a href={mapLink} target="_blank" rel="noopener noreferrer">
                  <Compass className="h-4 w-4 mr-2" />
                  Get Study Map — {map.mapPrice}
                </a>
              </Button>
            ) : null}
            {map.bundlePrice && bundleLink ? (
              <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <a href={bundleLink} target="_blank" rel="noopener noreferrer">
                  <Scroll className="h-4 w-4 mr-2" />
                  Get Adventure Pack — {map.bundlePrice}
                </a>
              </Button>
            ) : null}
          </div>
        ) : isAvailable ? (
          <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            <a href={map.url} target="_blank" rel="noopener noreferrer">
              <Landmark className="h-4 w-4 mr-2" />
              Get Map &amp; Guide — {map.price}
            </a>
          </Button>
        ) : (
          <Button disabled variant="outline" className="justify-start border-primary/30 text-muted-foreground">
            <Landmark className="h-4 w-4 mr-2" />
            Coming to shop soon
          </Button>
        )}
      </div>
    </article>
  );
};
