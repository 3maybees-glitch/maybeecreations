import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { ComingSoonCard } from "@/components/ComingSoonCard";
import { categories } from "@/data/categories";

const meta = categories.find((c) => c.key === "fans")!;

const Fans = () => {
  return (
    <CategoryPageLayout
      category={meta}
      intro="Stadium-energy experiences built for the people who live the game — every play, every season, every dynasty."
    >
      <CategorySection eyebrow="Apps" title="Fan-Sports Apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComingSoonCard
            title="Dynasty Tracker"
            description="Follow your team's roster, schedule, and storylines all season long."
          />
          <ComingSoonCard
            title="Tailgate Tonight"
            description="Game-day playbook for fans: recipes, rituals, and watch-party plans."
          />
          <ComingSoonCard
            title="Stat Saga"
            description="Turn box scores into stories worth re-telling."
          />
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Fans;
