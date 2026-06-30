import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { categories } from "@/data/categories";
import { baseballLegendLands } from "@/data/baseballLands";
import { tennisLegendLands } from "@/data/tennisLegendLands";
import { LegendLandCard } from "@/components/LegendLandCard";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { categoryPageSchemas } from "@/lib/structuredData";

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
      intro="Legend Explorer map experiences built for the people who live the game — from ballpark dynasties to championship tennis lore."
    >
      <CategorySection eyebrow="Legend Explorer Collection" title="Tennis Legend Lands">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          Creatively Crafted educational discovery world maps and fan adventure guides for the
          championships fans celebrate year after year. Each Legend Land is a $7.77 digital download
          on Payhip.
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

      <CategorySection eyebrow="Legend Explorer Collection" title="Baseball Legend Lands">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          Creatively Crafted educational discovery world maps and fan adventure guides for the
          legends of America&apos;s pastime. Each Legend Land is a $7.77 digital download on
          Payhip.
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

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="ghost" className="text-primary hover:text-accent">
            <a href="https://payhip.com/MaybeeCreations" target="_blank" rel="noopener noreferrer">
              Visit the full storefront on Payhip
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Fans;
