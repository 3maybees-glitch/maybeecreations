import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorldMapsShowcase } from "@/components/WorldMapsShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorldMapsShowcase />
      <Footer />
    </div>
  );
};

export default Index;
