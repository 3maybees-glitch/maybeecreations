import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { MapCard } from "@/components/MapCard";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { categories } from "@/data/categories";
import { realms } from "@/data/realms";

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
      intro="AI fantasy world maps and Adventure Pack tutorials that turn learning AI into a journey worth taking."
    >
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl text-foreground/90 mb-6 italic leading-relaxed font-medium">
            Unfurl fantasy world maps charting the kingdoms of ChatGPT, Claude, Gemini,
            Perplexity and more — each paired with a tutorial Adventure Pack that turns
            learning AI into a journey worth taking.
          </p>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-medium">
            Built for <span className="font-semibold text-primary">families</span> juggling schedules, chores, and household life — and{" "}
            <span className="font-semibold text-primary">students</span> mastering study plans, deadlines, and daily productivity.
            Turn every AI tool into a trusted companion for assistant management and time mastery.
          </p>
        </div>
      </section>

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
