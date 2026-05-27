import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { AppCard } from "@/components/AppCard";
import { MapCard } from "@/components/MapCard";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { categories } from "@/data/categories";
import { realms } from "@/data/realms";
import intellicityIcon from "@/assets/intellicity-app-icon.png";
import snackersIcon from "@/assets/snackers-app-icon.png";

const meta = categories.find((c) => c.key === "future")!;

const included = [
  "Printable fantasy AI world map",
  "Beginner tutorial PDF",
  "Copy-and-paste prompts",
  "Practice missions",
  "Real-life use cases for families, students, and creators",
  "Instant digital download",
];

const Future = () => {
  return (
    <CategoryPageLayout
      category={meta}
      intro="AI fantasy world maps and Adventure Pack tutorials — plus apps that turn frontier intelligence into everyday tools."
    >
      <CategorySection eyebrow="Apps" title="AI-Era Apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AppCard
            title="Intellicity"
            description="Strategic city intelligence — explore geopolitical, economic, security, and spiritual dimensions of 60+ world cities."
            iconImage={intellicityIcon}
            category="Education & Intelligence"
            link="/intellicity"
            comingSoon={false}
          />
          <AppCard
            title="Snackers - Virtual Bites"
            description="Experience virtual dining with our innovative food ordering and delivery platform."
            iconImage={snackersIcon}
            category="Food & Dining"
            link="/snackers"
            comingSoon={false}
            pending={true}
          />
        </div>
      </CategorySection>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="parchment p-8 rounded-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
              What's Included?
            </h3>
            <p className="text-center text-muted-foreground italic mb-6">
              Each Adventure Pack includes:
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
        eyebrow="The Cartographer's Collection"
        title="Eight Realms of Artificial Wonder"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {realms.map((realm) => (
            <MapCard key={realm.brand} realm={realm} />
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

export default Future;
