import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CategoryGrid />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;

