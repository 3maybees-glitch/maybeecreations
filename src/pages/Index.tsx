import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AppsShowcase />
      <Footer />
    </div>
  );
};

export default Index;
