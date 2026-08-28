import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { categories } from "@/data/categories";
import { baseballLegendLands } from "@/data/baseballLands";
import { collegeFootballLegendLands } from "@/data/collegeFootballLands";
import { nflLegendLands } from "@/data/nflLands";
import { tennisLegendLands } from "@/data/tennisLegendLands";
import { LegendLandCard } from "@/components/LegendLandCard";
import { ExternalLink, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { ETSY_SHOP_URL } from "@/lib/shopLinks";
import { categoryPageSchemas } from "@/lib/structuredData";
import { Link } from "react-router-dom";

const meta = categories.find((c) => c.key === "fans")!;

const Fans = () => {
  usePageSeo(
    pageMeta.fans,
    categoryPageSchemas(
      pageMeta.fans.path,
      pageMeta.fans.title,
      pageMeta.fans.description,
      [
        { name: "Home", path: "/" },
        { name: "Fans", path: "/fans" },
      ],
    ),
  );

  return (
    <CategoryPageLayout
      category={meta}
      intro="Legend Explorer map experiences built for the people who live the game — from NFL Sundays and ballpark dynasties to college Saturdays and championship tennis lore."
    >
      <CategorySection eyebrow="Legend Explorer Collection" title="NFL Legend Lands">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          All 32 NFL franchises as printable Legend Land world maps and adventure guides. Each
          Legend Land is a $7.77 digital download on Etsy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {nflLegendLands.map((land) => (
            <LegendLandCard
              key={land.url}
              name={land.team}
              series="NFL Legend Land"
              url={land.url}
              image={land.image}
              tagline={`A Creatively Crafted fan adventure map celebrating the legends of the ${land.team}.`}
            />
          ))}
        </div>
      </CategorySection>

      <CategorySection eyebrow="Legend Explorer Collection" title="Tennis Legend Lands">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          Creatively Crafted educational discovery world maps and fan adventure guides for the
          championships fans celebrate year after year. Each Legend Land is a $7.77 digital download
          on Etsy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tennisLegendLands.map((land) => (
            <LegendLandCard
              key={land.url}
              name={land.name}
              series="Tennis Legend Land"
              url={land.url}
              image={land.image}
              tagline={land.tagline}
            />
          ))}
        </div>
      </CategorySection>

      <CategorySection eyebrow="Legend Explorer Collection" title="College Football Legend Lands">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          Printable college football fan maps for the programs that define Saturdays — dynasties,
          rivalries, and campus legends in every download.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collegeFootballLegendLands.map((land) => (
            <LegendLandCard
              key={land.url}
              name={land.team}
              series="College Football Legend Land"
              url={land.url}
              image={land.image}
              tagline={`A Creatively Crafted fan adventure map celebrating the legends of ${land.team}.`}
            />
          ))}
        </div>
      </CategorySection>

      <CategorySection eyebrow="Legend Explorer Collection" title="Baseball Legend Lands">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          Creatively Crafted educational discovery world maps and fan adventure guides for the
          legends of America&apos;s pastime. Each Legend Land is a $7.77 digital download on
          Etsy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {baseballLegendLands.map((land) => (
            <LegendLandCard
              key={land.url}
              name={land.team}
              series="Baseball Legend Land"
              url={land.url}
              image={land.image}
              tagline={`A Creatively Crafted fan adventure map celebrating the legends of ${land.team}.`}
            />
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="max-w-2xl mx-auto rounded-sm border border-[hsl(var(--fans))]/30 bg-[hsl(var(--fans))]/10 p-6">
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              Don&apos;t see your team, program, or championship on the map yet? Tell us what
              Legend Land to chart next.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--fans))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--fans))]/90 font-semibold"
            >
              <Link to="/request-a-map">
                <MapPinned className="mr-2 h-4 w-4" />
                Request a Map
              </Link>
            </Button>
          </div>
          <Button asChild size="lg" variant="ghost" className="text-primary hover:text-accent">
            <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer">
              Visit the full storefront on Etsy
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Fans;
