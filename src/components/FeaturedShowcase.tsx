import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { realms } from "@/data/realms";
import { bibleMaps } from "@/data/bibleMaps";
import freedomImg from "@/assets/category-freedom.jpg";

const featured = [
  {
    title: "ChatGPT Starrealm Atlas",
    subtitle: "Future · AI world map",
    image: realms[0].image,
    path: "/future",
  },
  {
    title: "Matthew – John",
    subtitle: "Faith · Free Soul Explorer map",
    image: bibleMaps[5].image,
    path: "/faith",
  },
  {
    title: "Yankees Legend Land",
    subtitle: "Fans · Baseball map",
    image:
      "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_d9fb85192db24e56883c69f5.jpg",
    path: "/fans",
  },
  {
    title: "George Washington",
    subtitle: "Freedom · Liberty Explorer map",
    image: freedomImg,
    path: "/freedom",
  },
];

export const FeaturedShowcase = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            ✦ Featured Maps ✦
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Explore the Discovery Maps
          </h2>
          <div className="ink-divider w-32 mx-auto mb-4" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Creatively Crafted educational discovery world maps — Bible cartography, liberty
            maps, fan legend lands, and AI kingdoms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="parchment group rounded-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300 hover:shadow-[var(--shadow-deep)]"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-semibold text-primary mb-2 leading-snug">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                  View realm <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
