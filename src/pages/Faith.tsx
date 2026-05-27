import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { AppCard } from "@/components/AppCard";
import { ComingSoonCard } from "@/components/ComingSoonCard";
import { categories } from "@/data/categories";
import jesusWeptIcon from "@/assets/jesus-wept-app-icon.png";

const meta = categories.find((c) => c.key === "faith")!;

const Faith = () => {
  return (
    <CategoryPageLayout
      category={meta}
      intro="Scripture-rooted apps, fantasy Bible maps, and lesson plans for families and students who want to engage God's Word with clarity and wonder."
    >
      <CategorySection eyebrow="Apps" title="Faith Apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AppCard
            title="Jesus Wept"
            description="Discover the power of Scripture through its most impactful two-word phrases."
            iconImage={jesusWeptIcon}
            category="Faith & Inspiration"
            link="/jesus-wept"
            comingSoon={false}
          />
        </div>
      </CategorySection>

      <CategorySection eyebrow="Maps" title="Bible Fantasy World Maps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComingSoonCard
            title="The Holy Land Atlas"
            description="Hand-illustrated maps of biblical lands rendered as fantasy cartography."
          />
          <ComingSoonCard
            title="Journeys of the Apostles"
            description="Trace Paul's voyages and the spread of the early church."
          />
        </div>
      </CategorySection>

      <CategorySection eyebrow="Lessons" title="Lesson Plans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComingSoonCard
            title="Family Devotional Packs"
            description="Printable lessons paired with each Bible map."
          />
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Faith;
