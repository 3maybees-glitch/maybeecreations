import { useMemo, useState, type ReactNode } from "react";
import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { FarlandsMapCard } from "@/components/FarlandsMapCard";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { categories } from "@/data/categories";
import {
  FARLANDS_COLLECTION_URL,
  farlandsMaps,
  farlandsRegions,
  type FarlandsRegion,
} from "@/data/farlandsMaps";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { categoryPageSchemas } from "@/lib/structuredData";
import { cn } from "@/lib/utils";

const meta = categories.find((c) => c.key === "farlands")!;

const included = [
  "Illustrated fantasy expedition map",
  "Explorer guidebook",
  "Audio tour of 18 stops",
  "Instant digital download",
];

type RegionFilter = "all" | FarlandsRegion;
type SortOrder = "num" | "alpha";

const Farlands = () => {
  usePageSeo(
    pageMeta.farlands,
    categoryPageSchemas(
      pageMeta.farlands.path,
      pageMeta.farlands.title,
      pageMeta.farlands.description,
      [
        { name: "Home", path: "/" },
        { name: "Farlands", path: "/farlands" },
      ],
    ),
  );

  const [region, setRegion] = useState<RegionFilter>("all");
  const [sort, setSort] = useState<SortOrder>("num");

  const visibleMaps = useMemo(() => {
    const filtered =
      region === "all" ? farlandsMaps : farlandsMaps.filter((map) => map.region === region);
    return [...filtered].sort((a, b) =>
      sort === "alpha" ? a.name.localeCompare(b.name) : a.num - b.num,
    );
  }, [region, sort]);

  return (
    <CategoryPageLayout
      category={meta}
      explorerLabel="Destination Explorer"
      intro="Farlands Explorer country kits — an illustrated fantasy map, guidebook, and audio tour for each destination."
    >
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="parchment p-6 md:p-8 rounded-sm">
            <h2 className="text-xl md:text-3xl font-bold text-primary text-center mb-6">
              What&apos;s in each kit
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CategorySection
        eyebrow="Destination Explorer"
        title={`${farlandsMaps.length} Farlands Explorer Maps`}
      >
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-4 mb-8">
          Fifty country expeditions, each a {farlandsMaps[0]?.price ?? "$7.77"} digital download.
          Browse in catalog order, or narrow the atlas by region.
        </p>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter maps by region">
            <FilterChip pressed={region === "all"} onClick={() => setRegion("all")}>
              All
            </FilterChip>
            {farlandsRegions.map((item) => (
              <FilterChip key={item} pressed={region === item} onClick={() => setRegion(item)}>
                {item}
              </FilterChip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Sort maps">
            <FilterChip pressed={sort === "num"} onClick={() => setSort("num")}>
              Expedition order
            </FilterChip>
            <FilterChip pressed={sort === "alpha"} onClick={() => setSort("alpha")}>
              A–Z
            </FilterChip>
            <p className="text-sm text-muted-foreground ml-1">
              {visibleMaps.length} {visibleMaps.length === 1 ? "map" : "maps"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleMaps.map((map) => (
            <FarlandsMapCard key={map.slug} map={map} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="ghost" className="text-primary hover:text-accent">
            <a href={FARLANDS_COLLECTION_URL} target="_blank" rel="noopener noreferrer">
              Visit the Farlands collection on Shopify
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

function FilterChip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 text-xs uppercase tracking-widest font-semibold border rounded-sm transition-colors",
        pressed
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-background/70 text-primary border-primary/30 hover:border-primary hover:bg-primary/5",
      )}
    >
      {children}
    </button>
  );
}

export default Farlands;
