import { Button } from "@/components/ui/button";
import { Compass, Scroll } from "lucide-react";

export interface Realm {
  name: string;
  brand: string;
  tagline: string;
  image: string;
  /** Study map listing. May match bundleUrl when map and guidebook are one product. */
  mapUrl: string;
  /** Guidebook or future site-only bundle. May match mapUrl when sold together. */
  bundleUrl: string;
  /** Price label when map and guidebook share one Shopify product. */
  price?: string;
  /** Price label for a separate study-map listing. */
  mapPrice?: string;
  /** Price label for a separate guidebook or bundle listing. */
  bundlePrice?: string;
}

export const MapCard = ({ realm }: { realm: Realm }) => {
  const sameListing = realm.mapUrl === realm.bundleUrl;

  return (
  <article className="parchment rounded-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 duration-300">
    <div className="relative overflow-hidden bg-muted aspect-[4/3]">
      <img
        src={realm.image}
        alt={`${realm.name} fantasy map illustration`}
        loading="lazy"
        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
      />
      <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold text-primary">
        {realm.brand}
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-2">
        {realm.name}
      </h3>
      <p className="text-base text-muted-foreground italic mb-6 flex-1">
        "{realm.tagline}"
      </p>

      <div className="ink-divider mb-4" />

      <div className="flex flex-col gap-2">
        {sameListing ? (
          <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            <a href={realm.bundleUrl} target="_blank" rel="noopener noreferrer">
              <Scroll className="h-4 w-4 mr-2" />
              Get Map &amp; Adventure Pack{realm.price ? ` — ${realm.price}` : ""}
            </a>
          </Button>
        ) : (
          <>
            {realm.mapPrice ? (
              <Button asChild variant="outline" className="justify-start border-primary/40 hover:bg-primary/5">
                <a href={realm.mapUrl} target="_blank" rel="noopener noreferrer">
                  <Compass className="h-4 w-4 mr-2" />
                  Get Study Map — {realm.mapPrice}
                </a>
              </Button>
            ) : null}
            {realm.bundlePrice ? (
              <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <a href={realm.bundleUrl} target="_blank" rel="noopener noreferrer">
                  <Scroll className="h-4 w-4 mr-2" />
                  Get Adventure Pack — {realm.bundlePrice}
                </a>
              </Button>
            ) : null}
          </>
        )}
      </div>
    </div>
  </article>
  );
};
