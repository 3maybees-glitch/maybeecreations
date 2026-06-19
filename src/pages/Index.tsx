import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { LandingCta } from "@/components/LandingCta";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

const Index = () => {
  usePageMeta(pageMeta.home);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CategoryGrid />
      <LandingCta />
      <Footer />
    </div>
  );
};

export default Index;
