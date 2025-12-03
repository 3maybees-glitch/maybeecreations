import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock, Heart, Shield, Star } from "lucide-react";
import snackersMenu from "@/assets/snackers-menu.png";
import snackersDesserts from "@/assets/snackers-desserts.png";
import snackersItem from "@/assets/snackers-item.png";
import snackersResults from "@/assets/snackers-results.png";
import snackersEncouragement from "@/assets/snackers-encouragement.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SnackersProduct = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [hasPurchased, setHasPurchased] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkPurchaseStatus(session.user.id);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkPurchaseStatus(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkPurchaseStatus = async (userId: string) => {
    const { data, error } = await supabase
      .from("purchases")
      .select("*")
      .eq("user_id", userId)
      .eq("product_name", "Snackers - Virtual Bites")
      .maybeSingle();

    if (!error && data) {
      setHasPurchased(true);
    }
  };

  const handlePurchase = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    if (hasPurchased) {
      window.open("https://snackers.lovable.app", "_blank");
      return;
    }

    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { productName: "Snackers - Virtual Bites" },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error: any) {
      toast.error(error.message || "Payment failed");
      setIsProcessing(false);
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Satisfy Cravings Guilt-Free",
      description: "Virtually indulge in your favorite treats without the calories or consequences"
    },
    {
      icon: Zap,
      title: "See Your Savings Instantly",
      description: "Track calories, fat, carbs, and money saved with every virtual bite"
    },
    {
      icon: Clock,
      title: "Skip the Workout",
      description: "See how much exercise you just avoided by not eating that snack"
    },
    {
      icon: Star,
      title: "Daily Encouragement",
      description: "Uplifting quotes and Bible verses to keep you motivated"
    },
    {
      icon: Shield,
      title: "Extensive Menu",
      description: "Appetizers, entrees, sides, snacks, and desserts to virtually enjoy"
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
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">Health & Wellness</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Snackers - Virtual Bites
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Satisfy your cravings without the guilt! Virtually "eat" your favorite unhealthy 
                snacks, watch them disappear bite by bite, and see exactly how much you saved 
                by not eating them in real life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg"
                  onClick={handlePurchase}
                  disabled={isProcessing}
                >
                  {hasPurchased ? "Open App" : isProcessing ? "Processing..." : "Get Access for $2.99"}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg"
                  onClick={() => navigate("/")}
                >
                  Back to Apps
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" />
                <span>One-time payment • Lifetime access</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={snackersItem} 
                  alt="Snackers app food item detail view" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse menus, virtually eat your cravings, and celebrate your health wins
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: snackersMenu, alt: "Snackers menu categories" },
              { src: snackersDesserts, alt: "Snackers dessert selection" },
              { src: snackersItem, alt: "Snackers food item detail" },
              { src: snackersResults, alt: "Snackers nutrition results" },
              { src: snackersEncouragement, alt: "Snackers encouragement screen" },
            ].map((screenshot, index) => (
              <div 
                key={index} 
                className="aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Snackers?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A fun, positive way to build healthier habits
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Features Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          </div>
          
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🍩</div>
                  <p className="text-xl font-semibold">Bite by Bite Fun</p>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Virtual Eating Experience</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Watch your food photo shrink with every virtual bite! Hear satisfying 
                  crunch sounds and delicious "mmms" as you enjoy your guilt-free snack.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Food shrinks with each tap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Satisfying sound effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Fun, interactive experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-4">See Your Health Wins</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  After each virtual snack, see exactly what you saved: money, calories, 
                  fat, carbs, and the exercise you didn't have to do to burn it off.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Money saved tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Calories, fat & carbs avoided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Encouraging quotes & Bible verses</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center order-1 lg:order-2">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💪</div>
                  <p className="text-xl font-semibold">Track Your Wins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Snack Smarter?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Satisfy cravings, build healthier habits, and feel great. One-time payment, lifetime access.
          </p>
          <Button 
            size="lg" 
            className="text-lg"
            onClick={handlePurchase}
            disabled={isProcessing}
          >
            {hasPurchased ? "Open Snackers App" : isProcessing ? "Processing..." : "Get Started for $2.99"}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SnackersProduct;
