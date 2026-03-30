import { AppCard } from "@/components/AppCard";
import snackersAppIcon from "@/assets/snackers-app-icon.png";
import jesusWeptAppIcon from "@/assets/jesus-wept-app-icon.png";
import intellicityAppIcon from "@/assets/intellicity-app-icon.png";

const apps = [
  {
    title: "Jesus Wept",
    description: "Discover the power of Scripture through its most impactful two-word phrases.",
    iconImage: jesusWeptAppIcon,
    category: "Faith & Inspiration",
    link: "/jesus-wept",
    comingSoon: false,
    pending: false,
  },
  {
    title: "Intellicity",
    description: "Strategic city intelligence — explore geopolitical, economic, security, and spiritual dimensions of 60+ world cities.",
    iconImage: intellicityAppIcon,
    category: "Education & Intelligence",
    link: "/intellicity",
    comingSoon: false,
    pending: false,
  },
  {
    title: "Snackers - Virtual Bites",
    description: "Experience virtual dining with our innovative food ordering and delivery platform.",
    iconImage: snackersAppIcon,
    category: "Food & Dining",
    link: "/snackers",
    comingSoon: false,
    pending: true,
  },
];

export const AppsShowcase = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our App Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each application is thoughtfully designed to enhance different aspects of your life. 
            More apps launching soon!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <AppCard
              key={index}
              title={app.title}
              description={app.description}
              iconImage={app.iconImage}
              category={app.category}
              comingSoon={app.comingSoon}
              pending={app.pending}
              link={app.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
