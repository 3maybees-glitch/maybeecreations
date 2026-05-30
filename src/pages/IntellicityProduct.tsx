import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Globe, Shield, Users, BarChart3, Landmark, Newspaper } from "lucide-react";
import { useNavigate } from "react-router-dom";
import intellicityAppIcon from "@/assets/intellicity-app-icon.png";
import icScreenshot1 from "@/assets/ic-screenshot-1.png";
import icScreenshot2 from "@/assets/ic-screenshot-2.png";
import icScreenshot3 from "@/assets/ic-screenshot-3.png";
import icScreenshot4 from "@/assets/ic-screenshot-4.png";
import icScreenshot5 from "@/assets/ic-screenshot-5.png";
import icScreenshot6 from "@/assets/ic-screenshot-6.png";
import icScreenshot7 from "@/assets/ic-screenshot-7.png";
import icScreenshot8 from "@/assets/ic-screenshot-8.png";
import icScreenshot9 from "@/assets/ic-screenshot-9.png";

const IntellicityProduct = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Globe,
      title: "60+ Strategic Cities",
      description: "Explore comprehensive intelligence profiles for over 60 of the world's most strategically significant cities"
    },
    {
      icon: BarChart3,
      title: "8 Domain Scoring",
      description: "Every city scored across Geographic, Demographic, Economic, Military, Political, Spiritual, Historical, and more"
    },
    {
      icon: Landmark,
      title: "Leadership & Governance",
      description: "Know who holds power — local and national leaders, tenure, policy focus areas, and governance structures"
    },
    {
      icon: Newspaper,
      title: "Real-Time Intelligence",
      description: "Live news feeds organized by strategic domain with direct links to breaking developments"
    },
  ];

  const screenshots = [icScreenshot1, icScreenshot2, icScreenshot3, icScreenshot4, icScreenshot5, icScreenshot6, icScreenshot7, icScreenshot8, icScreenshot9];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={intellicityAppIcon} 
                  alt="Intellicity app icon" 
                  className="w-16 h-16 rounded-xl shadow-lg"
                />
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">Education & Intelligence</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Intellicity: Strategic City Intelligence
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Decode the power dynamics of every major city on Earth. Explore comprehensive analysis across geopolitical, economic, security, and spiritual dimensions — all in one app.
              </p>
              <p className="text-sm text-muted-foreground mb-8 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/50 rounded-full">
                🌍 60+ cities profiled with 8 strategic domains scored and ranked
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
              <div className="aspect-[9/19] max-w-xs mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-muted/30">
                <img src={icScreenshot1} alt="Intellicity - Strategic City Intelligence" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Intellicity?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The world's strategic landscape, decoded for the curious mind
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

      {/* Feature: Skyline Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={icScreenshot2} alt="Skyline Gallery - Beijing, Dubai, Beirut, Geneva" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Explore World Skylines</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Stunning city panoramas from every corner of the globe. Each city features its own unique Intellicity Code and strategic classification — from Elite to Contested.
              </p>
              <p className="text-lg text-muted-foreground">
                Browse skylines from Beijing to Geneva, Dubai to Beirut, and discover the visual identity of each strategic hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Deep City Profiles */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Deep City Profiles</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Population, languages, stability scores, and satellite imagery — every city profile gives you the essential intelligence at a glance.
              </p>
              <p className="text-lg text-muted-foreground">
                Dive into strategic averages, stability statuses, and geographic context with real satellite views from space.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={icScreenshot3} alt="Deep City Profiles - Dubai population, languages, strategic score" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Strategic Domain Analysis */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={icScreenshot4} alt="8 Strategic Domains Scored - Geographic to Spiritual" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">8 Strategic Domains Scored</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Every city is analyzed across eight critical dimensions: Geographic, Demographic, Economic, Military, Political, Spiritual, Historical, and more — each scored out of 100.
              </p>
              <p className="text-lg text-muted-foreground">
                Understand why Dubai scores 90 in Political governance or 82 in Military capability with clear, concise explanations for each domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Leadership & Governance */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Know Who Holds Power</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Leaders, governance structures, tenure, and policy focus areas — all mapped for every city. See local and national leadership with their backgrounds and recent priorities.
              </p>
              <p className="text-lg text-muted-foreground">
                From economic diversification to technology innovation, understand the forces shaping each city's future.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={icScreenshot5} alt="Leadership & Governance - Local and national leaders" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Geopolitical Relations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={icScreenshot6} alt="Geopolitical Relations - Allies, adversaries, shared interests" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Geopolitical Relations Mapped</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Allies, adversaries, shared interests, and points of contention — all visualized for every city. See which nations cooperate on defense, trade, and energy.
              </p>
              <p className="text-lg text-muted-foreground">
                Understand the web of international relationships that shape global power dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Real-Time Intelligence Feed */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Real-Time Intelligence Feed</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Live news feeds organized by strategic domain — Geographic, Demographic, Economic, Military, Political, Spiritual, and Historical. Stay informed on breaking developments.
              </p>
              <p className="text-lg text-muted-foreground">
                Each city's intelligence feed pulls the latest relevant news so you always have the most current picture.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={icScreenshot7} alt="Real-Time Intelligence Feed - Live news by strategic domain" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Global Power Centers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={icScreenshot8} alt="Global Power Centers - Super-Nodes to Maritime Chokepoints" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20 mt-8">
                <img src={icScreenshot9} alt="Regional Theaters - Middle East, Europe, Indo-Pacific" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Global Power Centers & Regional Theaters</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Discover the Super-Nodes — the seven most influential command centers that dominate global politics, military strategy, and intelligence operations. From Washington D.C. to Beijing, London to Moscow.
              </p>
              <p className="text-lg text-muted-foreground">
                Explore every regional theater — Middle East, Indo-Pacific, Europe, Africa and beyond — with cities mapped to their strategic roles and influence networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive intelligence platform designed for clarity and depth
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {screenshots.map((shot, i) => (
              <div key={i} className="aspect-[9/19] min-w-[200px] w-[200px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-muted/20 snap-center">
                <img src={shot} alt={`Intellicity screenshot ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every City. Every Dimension.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Download Intellicity and decode the strategic intelligence behind the world's most powerful cities.
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

export default IntellicityProduct;
