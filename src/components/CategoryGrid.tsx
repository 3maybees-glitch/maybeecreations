import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const CategoryGrid = () => {
  return (
    <section id="pillars" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            ✦ Four Pillars, One Workshop ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Faith · Freedom · Fans · Future
          </h2>
          <div className="ink-divider w-32 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Maybee Creations builds creative apps, visual maps, and digital learning tools
            for faith, freedom, sports fans, and the AI future — making complex ideas easier
            to explore.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <CategoryCard key={cat.key} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};
