import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { AppCard } from "@/components/AppCard";
import { categories } from "@/data/categories";
import intellicityIcon from "@/assets/intellicity-app-icon.png";
import { Shield } from "lucide-react";

const meta = categories.find((c) => c.key === "freedom")!;

const Freedom = () => {
  return (
    <CategoryPageLayout
      category={meta}
      intro="Freedom-first apps and learning tools that celebrate liberty, civics, and the principles of a self-governing people."
    >
      <CategorySection eyebrow="Apps" title="Freedom Apps">
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
            title="LibertyID"
            description="Your digital identity for the freedom movement — secure, decentralized, and built for the future of civic engagement."
            icon={Shield}
            category="Identity & Civic Tech"
            comingSoon={true}
          />
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Freedom;
