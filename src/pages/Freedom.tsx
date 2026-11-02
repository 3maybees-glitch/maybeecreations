import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { FreedomMapCard } from "@/components/FreedomMapCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { categories } from "@/data/categories";
import { freedomMaps, freedomShopUrl } from "@/data/freedomMaps";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { SHOPIFY_SHOP_URL } from "@/lib/shopLinks";
import { SITE_URL } from "@/lib/siteCopy";
import { categoryPageSchemas } from "@/lib/structuredData";

const meta = categories.find((c) => c.key === "freedom")!;

function assetUrl(src: string) {
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

const Freedom = () => {
  usePageSeo(
    pageMeta.freedom,
    categoryPageSchemas(
      pageMeta.freedom.path,
      pageMeta.freedom.title,
      pageMeta.freedom.description,
      [
        { name: "Home", path: "/" },
        { name: "Freedom", path: "/freedom" },
      ],
      {
        name: "Freedom maps and printable study kits",
        items: freedomMaps.flatMap((map) => {
          const url = freedomShopUrl(map);
          if (!url) return [];
          const images = [map.image, map.mapImage].filter((src): src is string => Boolean(src)).map(assetUrl);
          return [
            {
              name: map.name,
              url,
              description: map.tagline,
              image: images.length > 1 ? images : images[0],
            },
          ];
        }),
      },
    ),
  );

  return (
    <CategoryPageLayout
      category={meta}
      intro="Liberty Explorer educational discovery world maps celebrating civics, history, and self-governance — Creatively Crafted from original ideas."
    >
      <CategorySection eyebrow="Liberty Explorer Collection" title="Freedom World Maps">
        <p className="text-center text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto -mt-6 mb-4">
          Fantasy cartography of American liberty — each map paired with a Liberty Explorer
          guidebook of historical stops, reflection prompts, and discovery activities for
          families and students.
        </p>
        <p className="text-center text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mb-10">
          Freedom Explorer military kits are printable study maps — print them and laminate them for reuse.
          Independent educational resource; not affiliated with or endorsed by the U.S. military or the Department of Defense.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {freedomMaps.map((map) => (
            <FreedomMapCard key={map.name} map={map} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Liberty Explorer maps and Freedom Explorer military study maps are available now on
            Shopify — founding figures, American and world conflicts, service history, and the
            America 250 anniversary edition.
          </p>
          <Button asChild size="lg" variant="ghost" className="text-primary hover:text-accent">
            <a
              href={SHOPIFY_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the full storefront on Shopify
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Freedom;
