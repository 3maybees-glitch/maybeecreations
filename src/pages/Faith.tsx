import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { BibleMapCard } from "@/components/BibleMapCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gift } from "lucide-react";
import { categories } from "@/data/categories";
import { bibleMaps } from "@/data/bibleMaps";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

const meta = categories.find((c) => c.key === "faith")!;

const Faith = () => {
  usePageMeta(pageMeta.faith);

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

        <div className="max-w-3xl mx-auto mb-12 rounded-sm border-2 border-[hsl(var(--faith))]/40 bg-[hsl(var(--faith))]/10 p-6 md:p-8 text-center shadow-[var(--shadow-gold)]">
          <div className="inline-flex items-center gap-2 mb-3 text-[hsl(var(--faith))]">
            <Gift className="h-5 w-5" aria-hidden />
            <p className="text-xs uppercase tracking-[0.3em] font-bold">A Gift for You</p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
            The Matthew–John Map &amp; Guide Is Now Free
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            We have made the full Soul Explorer Gospels world map and adventure guide
            completely free on Payhip — our blessing to you. Download it, walk through
            Matthew to John with your family, and see the quality of our maps firsthand.
            May it encourage you in the Word.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--faith))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--faith))]/90 font-semibold shadow-lg shadow-[hsl(var(--faith))]/30"
          >
            <a href="https://payhip.com/b/PUY0k" target="_blank" rel="noopener noreferrer">
              <Gift className="mr-2 h-4 w-4" />
              Claim Your Free Matthew–John Map
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

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
