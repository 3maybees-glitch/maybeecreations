import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User, Session } from '@supabase/supabase-js';
import { useNavigate, Link } from "react-router-dom";

interface AppCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  iconImage?: string;
  category: string;
  comingSoon?: boolean;
  link?: string;
  hasPayment?: boolean;
  price?: string;
}

export const AppCard = ({ title, description, icon: Icon, iconImage, category, comingSoon = true, link, hasPayment = false, price }: AppCardProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [hasPurchased, setHasPurchased] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user && hasPayment) {
      checkPurchaseStatus();
    }
  }, [user, hasPayment]);

  const checkPurchaseStatus = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('purchases')
      .select('id')
      .eq('user_id', user.id)
      .eq('product_name', title)
      .single();

    if (data) {
      setHasPurchased(true);
    }
  };

  const handlePayment = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to purchase this app.",
      });
      navigate('/auth');
      return;
    }

    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { productName: title }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Failed to start payment process. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden relative">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardHeader className="relative">
        <div className="w-12 h-12 rounded-lg overflow-hidden mb-4 group-hover:scale-110 transition-transform">
          {iconImage ? (
            <img src={iconImage} alt={title} className="w-full h-full object-cover" />
          ) : Icon ? (
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
          ) : null}
        </div>
        <div className="inline-block mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="relative flex-col items-start gap-3">
        {comingSoon ? (
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-muted rounded-full">
              <span className="text-xs font-medium text-muted-foreground">Coming Soon</span>
            </div>
          </div>
        ) : (
          <>
            {hasPayment && price && (
              <div className="flex items-center justify-between w-full">
                <span className="text-2xl font-bold text-primary">{price}</span>
                {hasPurchased ? (
                  <Button variant="default" asChild>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Open App
                    </a>
                  </Button>
                ) : (
                  <Button 
                    variant="default" 
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Purchase Access"}
                  </Button>
                )}
              </div>
            )}
            {link && !hasPayment && (
              <Button variant="ghost" className="group/btn w-full" asChild>
                {link.startsWith('/') ? (
                  <Link to={link}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Open App
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </Button>
            )}
            {!link && !hasPayment && (
              <Button variant="ghost" className="group/btn">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
};
