import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CategoryGrid />
      <Footer />
    </div>
  );
};

export default Index;
