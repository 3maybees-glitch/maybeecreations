import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock, Heart, Shield, Star } from "lucide-react";
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
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Get your favorite meals delivered in under 30 minutes"
    },
    {
      icon: Heart,
      title: "Healthy Options",
      description: "Curated selection of nutritious and delicious meals"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe and encrypted payment processing"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Order anytime, day or night"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only partner with top-rated restaurants"
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
                <span className="text-sm font-semibold text-primary">Food & Dining</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Snackers - Virtual Bites
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the future of food ordering with our innovative platform. 
                Virtual dining made real, delicious, and delivered right to your door.
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
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🍕</div>
                  <p className="text-2xl font-bold">Virtual Dining</p>
                  <p className="text-muted-foreground">Experience Preview</p>
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
            <h2 className="text-4xl font-bold mb-4">Why Choose Snackers?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've reimagined food delivery from the ground up
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
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-xl font-semibold">Intuitive Interface</p>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Easy to Use</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Our streamlined interface makes ordering food a breeze. Browse menus, 
                  customize orders, and track delivery in real-time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Smart search and filtering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Saved favorites and recent orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Real-time order tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-4">Wide Selection</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Choose from hundreds of restaurants and thousands of menu items. 
                  From comfort food to healthy options, we've got it all.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Multiple cuisine types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Dietary preferences supported</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Top-rated restaurants only</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center order-1 lg:order-2">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🍔</div>
                  <p className="text-xl font-semibold">Diverse Menu</p>
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
            Ready to Start Your Virtual Dining Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied users. One-time payment, lifetime access.
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
