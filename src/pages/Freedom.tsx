import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { ComingSoonCard } from "@/components/ComingSoonCard";
import { categories } from "@/data/categories";

const meta = categories.find((c) => c.key === "freedom")!;

const Freedom = () => {
  return (
    <CategoryPageLayout
      category={meta}
      intro="Freedom-first apps and learning tools that celebrate liberty, civics, and the principles of a self-governing people."
    >
      <CategorySection eyebrow="Apps" title="Freedom Apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComingSoonCard
            title="Civic Compass"
            description="Pocket guide to founding documents, civic rights, and how government actually works."
          />
          <ComingSoonCard
            title="Liberty Library"
            description="Curated readings, speeches, and primary sources on the American tradition."
          />
          <ComingSoonCard
            title="Constitution Quest"
            description="A guided adventure through the Constitution and Bill of Rights for students."
          />
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Freedom;
