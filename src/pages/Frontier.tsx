import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { FrontierMapCard } from "@/components/FrontierMapCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPinned } from "lucide-react";
import { categories } from "@/data/categories";
import {
  frontierMaps,
  frontierMapsBySeries,
  frontierSeriesOrder,
  type FrontierSeries,
} from "@/data/frontierMaps";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { ETSY_SHOP_URL } from "@/lib/shopLinks";
import { categoryPageSchemas } from "@/lib/structuredData";
import { Link } from "react-router-dom";

const meta = categories.find((c) => c.key === "frontier")!;

const seriesCopy: Record<FrontierSeries, string> = {
  Science:
    "Einstein, Tesla, Apollo, Newton, and the rest of the science expedition — relativity, invention, mathematics, medicine, and the machines that changed the world.",
  Literature:
    "The Odyssey, Shakespeare, Homer, Dante, Tolkien, and the great books mapped as worlds you can walk.",
  Music:
    "Bach, Mozart, Beethoven, and the composers whose lives and works become continents of sound.",
  Faith:
    "Missionary and witness lives — Livingstone, Elliot, Carey, Taylor, Judson, Carmichael, and Corrie ten Boom.",
  Freedom:
    "Frontier-style liberty maps for Adams, Revere, Hancock, Henry, Paine, and the voices that woke a republic.",
};

const Frontier = () => {
  usePageSeo(
    pageMeta.frontier,
    categoryPageSchemas(
      pageMeta.frontier.path,
      pageMeta.frontier.title,
      pageMeta.frontier.description,
      [
        { name: "Home", path: "/" },
        { name: "Frontier", path: "/frontier" },
      ],
    ),
  );

  return (
    <CategoryPageLayout
      category={meta}
      intro="Frontier Explorer educational discovery world maps of science, literature, music, missionary lives, and liberty — Einstein, the Odyssey, Mozart, and the rest of the expedition."
    >
      {frontierSeriesOrder.map((series, index) => {
        const maps = frontierMapsBySeries(series);
        const isLast = index === frontierSeriesOrder.length - 1;

        return (
          <CategorySection
            key={series}
            eyebrow="Frontier Explorer Collection"
            title={`${series} Frontier Maps`}
          >
            <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
              {seriesCopy[series]} Each Frontier Explorer map is a $7.77 digital download on
              Etsy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {maps.map((map) => (
                <FrontierMapCard key={map.slug} map={map} />
              ))}
            </div>

            {isLast && (
              <div className="text-center mt-12 space-y-4">
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  {frontierMaps.length} Frontier Explorer titles spanning science, literature,
                  music, faith, and freedom. NFL Legend Lands live on the Fans page.
                </p>
                <div className="max-w-2xl mx-auto rounded-sm border border-[hsl(var(--frontier))]/30 bg-[hsl(var(--frontier))]/10 p-6">
                  <p className="text-base md:text-lg text-muted-foreground mb-4">
                    Don&apos;t see the explorer you want on the map yet? Tell us what Frontier
                    title to chart next.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[hsl(var(--frontier))] text-primary-foreground hover:bg-[hsl(var(--frontier))]/90 font-semibold"
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
            )}
          </CategorySection>
        );
      })}
    </CategoryPageLayout>
  );
};

export default Frontier;
