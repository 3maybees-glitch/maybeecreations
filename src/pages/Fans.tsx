import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { AppCard } from "@/components/AppCard";
import { categories } from "@/data/categories";
import { Mic, Trophy, BarChart3 } from "lucide-react";

const meta = categories.find((c) => c.key === "fans")!;

const Fans = () => {
  return (
    <CategoryPageLayout
      category={meta}
      intro="Stadium-energy experiences built for the people who live the game — every play, every season, every dynasty."
    >
      <CategorySection eyebrow="Apps" title="Fan-Sports Apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AppCard
            title="StatSpeak"
            description="Basketball audio-stat tracker — speak your stats and let the app track the game in real time."
            icon={Mic}
            category="Basketball"
            comingSoon={true}
          />
          <AppCard
            title="BoomerBall"
            description="Oklahoma college football app — track the Sooners, follow recruiting, and live the season with fellow fans."
            icon={Trophy}
            category="College Football"
            comingSoon={true}
          />
          <AppCard
            title="MLB Player Similarity"
            description="Discover which MLB players mirror each other across eras — compare stats, styles, and career arcs."
            icon={BarChart3}
            category="Baseball"
            comingSoon={true}
          />
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Fans;
