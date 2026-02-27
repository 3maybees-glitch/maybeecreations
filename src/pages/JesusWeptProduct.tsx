import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, BookOpen, Heart, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JesusWeptProduct = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: BookOpen,
      title: "Two-Word Scripture",
      description: "Explore the Bible through powerful two-word phrases that carry deep meaning"
    },
    {
      icon: Heart,
      title: "Daily Devotion",
      description: "Start each day with a meaningful two-word message from Scripture"
    },
    {
      icon: Star,
      title: "Simple & Powerful",
      description: "Sometimes the most profound truths come in the fewest words"
    },
    {
      icon: Sparkles,
      title: "Beautiful Experience",
      description: "A thoughtfully designed app that makes Scripture feel fresh and alive"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl shadow-lg bg-gradient-to-br from-primary to-primary-foreground/20 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">Faith & Inspiration</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Jesus Wept: Two Word Bible App
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the power of Scripture through its most impactful two-word phrases. 
                A simple, beautiful way to connect with the Bible every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg"
                  asChild
                >
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    Download on App Store
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-lg"
                  onClick={() => navigate("/")}
                >
                  Back to Apps
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" />
                <span>Coming soon to the App Store</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-6">✝️</div>
                  <p className="text-3xl font-bold text-foreground mb-2">Jesus Wept.</p>
                  <p className="text-sm text-muted-foreground">John 11:35</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Jesus Wept?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Big truths don't always need big words
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Two Words. Infinite Meaning.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Download Jesus Wept and experience the Bible like never before.
          </p>
          <Button 
            size="lg" 
            className="text-lg"
            asChild
          >
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              Download on App Store
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JesusWeptProduct;
