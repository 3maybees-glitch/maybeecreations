import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface LegendLandCardProps {
  name: string;
  series: string;
  url: string;
  image: string;
  tagline: string;
  price?: string;
}

export const LegendLandCard = ({
  name,
  series,
  url,
  image,
  tagline,
  price = "$7.77",
}: LegendLandCardProps) => (
  <article className="parchment rounded-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 duration-300">
    <div className="relative overflow-hidden bg-muted aspect-[4/3]">
      <img
        src={image}
        alt={`Legend Explorer ${name} ${series} map`}
        loading="lazy"
        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
      />
      <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold text-primary">
        Legend Explorer
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-1">
        {name}
      </h3>
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
        {series}
      </p>
      <p className="text-base text-muted-foreground italic mb-6 flex-1">
        {tagline}
      </p>

      <div className="ink-divider mb-4" />

      <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <MapPin className="h-4 w-4 mr-2" />
          Get Legend Land — {price}
        </a>
      </Button>
    </div>
  </article>
);
