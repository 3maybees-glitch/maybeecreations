import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Ticket, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const RedeemCode = () => {
  const [code, setCode] = useState("");
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [redeemedProduct, setRedeemedProduct] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      toast({
        title: "Enter a code",
        description: "Please enter your access code to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      // Redirect to auth with return URL
      navigate(`/auth?redirect=/redeem&code=${encodeURIComponent(code.trim())}`);
      return;
    }

    setIsRedeeming(true);

    try {
      // Check if code exists and is valid
      const { data: accessCode, error: fetchError } = await supabase
        .from("access_codes")
        .select("*")
        .eq("code", code.trim().toUpperCase())
        .eq("is_active", true)
        .is("redeemed_by", null)
        .maybeSingle();

      if (fetchError) throw fetchError;

      if (!accessCode) {
        toast({
          title: "Invalid code",
          description: "This code is invalid, already used, or expired.",
          variant: "destructive",
        });
        setIsRedeeming(false);
        return;
      }

      // Redeem the code
      const { error: updateError } = await supabase
        .from("access_codes")
        .update({
          redeemed_by: user.id,
          redeemed_at: new Date().toISOString(),
        })
        .eq("id", accessCode.id);

      if (updateError) throw updateError;

      setRedeemedProduct(accessCode.product_name);
      setIsSuccess(true);
      
      toast({
        title: "Code redeemed!",
        description: `You now have access to ${accessCode.product_name}.`,
      });
    } catch (error) {
      console.error("Redemption error:", error);
      toast({
        title: "Redemption failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRedeeming(false);
    }
  };

  // Handle pre-filled code from URL (after auth redirect)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code");
    if (urlCode) {
      setCode(urlCode);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {!isSuccess ? (
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Ticket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Redeem Access Code</CardTitle>
                <CardDescription>
                  Enter the code you received after your purchase to unlock your app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRedeem} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter your code (e.g., SNACK-XXXX-XXXX)"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    className="text-center text-lg tracking-wider font-mono"
                    disabled={isRedeeming}
                  />
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isRedeeming}
                  >
                    {isRedeeming ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Redeeming...
                      </>
                    ) : (
                      "Redeem Code"
                    )}
                  </Button>
                </form>
                
                {!user && (
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    You'll need to sign in or create an account to redeem your code.
                  </p>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="border-green-500/20 bg-green-500/5">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl text-green-600">Success!</CardTitle>
                <CardDescription className="text-base">
                  You now have access to <strong>{redeemedProduct}</strong>.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {redeemedProduct === "Snackers" && (
                  <Button 
                    className="w-full" 
                    onClick={() => window.open("https://snackers.lovable.app", "_blank")}
                  >
                    Open Snackers App
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RedeemCode;
