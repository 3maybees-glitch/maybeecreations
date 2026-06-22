import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { FreedomMapCard } from "@/components/FreedomMapCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { categories } from "@/data/categories";
import { freedomMaps } from "@/data/freedomMaps";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

const meta = categories.find((c) => c.key === "freedom")!;

const Freedom = () => {
  usePageMeta(pageMeta.freedom);

  return (
    <CategoryPageLayout
      category={meta}
      intro="Liberty Explorer educational discovery world maps celebrating civics, history, and self-governance — Creatively Crafted from original ideas."
    >
      <CategorySection eyebrow="Liberty Explorer Collection" title="Freedom World Maps">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          Fantasy cartography of American liberty — each map paired with a Liberty Explorer
          guidebook of historical stops, reflection prompts, and discovery activities for
          families and students.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {freedomMaps.map((map) => (
            <FreedomMapCard key={map.name} map={map} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            All Liberty Explorer maps are available now on Payhip — founding figures,
            Revolutionary War, Civil War, and World War II theaters.
          </p>
          <Button asChild size="lg" variant="ghost" className="text-primary hover:text-accent">
            <a
              href="https://payhip.com/MaybeeCreations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the full storefront on Payhip
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Freedom;
