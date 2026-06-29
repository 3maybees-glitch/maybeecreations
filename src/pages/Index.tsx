import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { LandingCta } from "@/components/LandingCta";
import { Footer } from "@/components/Footer";
import { homeFaqs } from "@/data/faqs";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { homePageSchemasWithFaq } from "@/lib/structuredData";

const Index = () => {
  usePageSeo(pageMeta.home, homePageSchemasWithFaq(homeFaqs));

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CategoryGrid />
        <AboutSection />
        <FaqSection faqs={homeFaqs} />
        <LandingCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
