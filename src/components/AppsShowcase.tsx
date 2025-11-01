import { AppCard } from "@/components/AppCard";
import { CheckSquare, Heart, Music, Sparkles, Brain, Calendar, Book, Smile } from "lucide-react";

const apps = [
  {
    title: "Snackers - Virtual Bites",
    description: "Streamline your day with intelligent task management and productivity insights.",
    icon: CheckSquare,
    category: "Productivity",
    link: "https://snackers.lovable.app",
    comingSoon: false,
  },
  {
    title: "Wellness Compass",
    description: "Track your health journey with personalized wellness recommendations and habit tracking.",
    icon: Heart,
    category: "Health",
  },
  {
    title: "MindfulMoments",
    description: "Guided meditation and spiritual reflection tools for your daily practice.",
    icon: Sparkles,
    category: "Spiritual",
  },
  {
    title: "FocusZone",
    description: "Eliminate distractions and enter deep work states with science-backed techniques.",
    icon: Brain,
    category: "Productivity",
  },
  {
    title: "JoyPlayer",
    description: "Curated entertainment experiences tailored to your mood and preferences.",
    icon: Music,
    category: "Entertainment",
  },
  {
    title: "LifePlanner",
    description: "Visualize and achieve your goals with intuitive planning and progress tracking.",
    icon: Calendar,
    category: "Productivity",
  },
  {
    title: "Gratitude Journal",
    description: "Cultivate thankfulness and positivity through daily reflective journaling.",
    icon: Book,
    category: "Spiritual",
  },
  {
    title: "MoodLift",
    description: "Boost your spirits with personalized activities and motivational content.",
    icon: Smile,
    category: "Entertainment",
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
              icon={app.icon}
              category={app.category}
              comingSoon={app.comingSoon ?? true}
              link={app.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
