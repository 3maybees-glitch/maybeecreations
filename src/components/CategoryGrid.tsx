import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const CategoryGrid = () => {
  return (
    <section id="realms" className="py-20 px-4 relative scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-2 md:mb-4">
            ✦ Four Worlds, One Cartographer ✦
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Choose Your Realm
          </h2>
          <div className="ink-divider w-32 mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Every block below is a living gallery of real maps — not stock art. Pick a world,
            browse the collection, and start your next expedition.
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
