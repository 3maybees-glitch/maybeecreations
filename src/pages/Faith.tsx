import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { BibleMapCard } from "@/components/BibleMapCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { categories } from "@/data/categories";
import { bibleMaps } from "@/data/bibleMaps";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { categoryPageSchemas } from "@/lib/structuredData";

const meta = categories.find((c) => c.key === "faith")!;

const Faith = () => {
  usePageSeo(
    pageMeta.faith,
    categoryPageSchemas(
      pageMeta.faith.path,
      pageMeta.faith.title,
      pageMeta.faith.description,
      [
        { name: "Home", path: "/" },
        { name: "Faith", path: "/faith" },
      ],
    ),
  );

  return (
    <CategoryPageLayout
      category={meta}
      intro="Scripture-rooted educational discovery world maps and Soul Explorer guides — Creatively Crafted for families and students."
    >
      <CategorySection
        eyebrow="Soul Explorer Collection"
        title="Bible Book Category World Maps"
      >
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-10">
          Fantasy cartography of Scripture organized by book category — each map paired
          with an Adventure Guide of prompts, missions, and reflections to help readers
          explore the Word.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bibleMaps.map((map) => (
            <BibleMapCard key={map.url} map={map} />
          ))}
        </div>

        <div className="text-center mt-12">
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

export default Faith;
