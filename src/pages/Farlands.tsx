import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { Button } from "@/components/ui/button";
import { Check, Compass, ExternalLink, Map } from "lucide-react";
import { categories } from "@/data/categories";
import { FARLANDS_COLLECTION_URL, farlandsMaps } from "@/data/farlandsMaps";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { SHOPIFY_SHOP_URL } from "@/lib/shopLinks";
import { categoryPageSchemas } from "@/lib/structuredData";

const meta = categories.find((c) => c.key === "farlands")!;

const included = [
  "Printable expedition discovery map",
  "Explorer guidebook with prompts and missions",
  "Classroom and kitchen-table friendly lessons",
  "Instant digital download when maps publish",
];

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

  return (
    <CategoryPageLayout
      category={meta}
      intro="Creatively Crafted educational discovery world maps for expeditions beyond the familiar shores — chart distant horizons, trails, and atlases of wonder."
    >
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-base md:text-xl text-foreground/85 leading-relaxed font-medium">
            Farlands is the expedition realm — maps that invite families and students to{" "}
            <span className="font-semibold text-primary">explore</span>,{" "}
            <span className="font-semibold text-primary">discover</span>, and{" "}
            <span className="font-semibold text-primary">learn</span> through cartography of the
            far-off and the newly charted.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="parchment p-8 rounded-sm">
            <h3 className="text-xl md:text-3xl font-bold text-primary text-center mb-6">
              What&apos;s Included?
            </h3>
            <p className="text-center text-muted-foreground italic mb-6">
              Each Farlands expedition pack is planned to include:
            </p>
            <ul className="space-y-3">
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
        eyebrow="Expedition Explorer Collection"
        title={
          farlandsMaps.length > 0
            ? `${farlandsMaps.length} Farlands Maps`
            : "The First Expeditions Are Being Charted"
        }
      >
        {farlandsMaps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Product cards land here when Shopify SKUs exist */}
          </div>
        ) : (
          <div className="parchment rounded-sm border border-primary/15 p-8 md:p-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-accent/15 mb-5">
              <Compass className="h-7 w-7 text-accent" aria-hidden />
            </div>
            <p className="text-lg md:text-xl text-foreground/90 mb-3 font-medium">
              No Farlands maps are listed yet.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              When the first expedition maps publish on Shopify, they will appear here. Until
              then, follow the Farlands collection or browse the full shop for Faith, Freedom,
              Frontier, and Future maps already on the trail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="uppercase tracking-widest">
                <a href={FARLANDS_COLLECTION_URL} target="_blank" rel="noopener noreferrer">
                  <Map className="mr-2 h-4 w-4" />
                  Open Farlands on Shopify
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="uppercase tracking-widest">
                <a href={SHOPIFY_SHOP_URL} target="_blank" rel="noopener noreferrer">
                  Visit the full storefront
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}

        {farlandsMaps.length > 0 ? (
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="ghost" className="text-primary hover:text-accent">
              <a href={FARLANDS_COLLECTION_URL} target="_blank" rel="noopener noreferrer">
                Visit the Farlands collection on Shopify
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        ) : null}
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Farlands;
