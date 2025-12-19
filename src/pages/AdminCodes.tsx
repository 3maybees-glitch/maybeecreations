import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Copy, Plus, Loader2, Key, CheckCircle } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Admin email - you can change this to your email
const ADMIN_EMAIL = "3maybees@gmail.com";

interface AccessCode {
  id: string;
  code: string;
  product_name: string;
  redeemed_by: string | null;
  redeemed_at: string | null;
  created_at: string;
  is_active: boolean;
}

const AdminCodes = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [codes, setCodes] = useState<AccessCode[]>([]);
  const [quantity, setQuantity] = useState(5);
  const [productName, setProductName] = useState("Snackers");
  const [generatedCodes, setGeneratedCodes] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user?.email !== ADMIN_EMAIL) {
          navigate("/");
        }
        setIsLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user || session.user.email !== ADMIN_EMAIL) {
        navigate("/");
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user?.email === ADMIN_EMAIL) {
      fetchCodes();
    }
  }, [user]);

  const fetchCodes = async () => {
    const { data, error } = await supabase
      .from("access_codes")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setCodes(data);
    }
  };

  const generateCode = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const segments = [];
    for (let i = 0; i < 3; i++) {
      let segment = "";
      for (let j = 0; j < 4; j++) {
        segment += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      segments.push(segment);
    }
    return `SNACK-${segments.join("-")}`;
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedCodes([]);

    try {
      const newCodes: string[] = [];
      const inserts = [];

      for (let i = 0; i < quantity; i++) {
        const code = generateCode();
        newCodes.push(code);
        inserts.push({
          code,
          product_name: productName,
          is_active: true,
        });
      }

      const { error } = await supabase
        .from("access_codes")
        .insert(inserts);

      if (error) throw error;

      setGeneratedCodes(newCodes);
      fetchCodes();
      
      toast({
        title: "Codes generated!",
        description: `Created ${quantity} new access codes.`,
      });
    } catch (error) {
      console.error("Generation error:", error);
      toast({
        title: "Generation failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyAllCodes = () => {
    navigator.clipboard.writeText(generatedCodes.join("\n"));
    toast({
      title: "Copied!",
      description: "All codes copied to clipboard.",
    });
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user?.email !== ADMIN_EMAIL) {
    return null;
  }

  const unusedCodes = codes.filter(c => !c.redeemed_by && c.is_active);
  const usedCodes = codes.filter(c => c.redeemed_by);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Access Code Generator</h1>
            <p className="text-muted-foreground">Generate codes for Gumroad or other platforms</p>
          </div>

          {/* Generator Card */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Generate New Codes
              </CardTitle>
              <CardDescription>
                Create access codes to upload to Gumroad's content delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Product Name</label>
                  <Input
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g., Snackers"
                  />
                </div>
                <div className="w-32">
                  <label className="text-sm font-medium mb-2 block">Quantity</label>
                  <Input
                    type="number"
                    min={1}
                    max={100}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                </div>
              </div>
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Generate {quantity} Codes
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Codes Display */}
          {generatedCodes.length > 0 && (
            <Card className="border-green-500/20 bg-green-500/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Generated Codes
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={copyAllCodes}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy All
                  </Button>
                </div>
                <CardDescription>
                  Copy these codes and add them to Gumroad's "Content" section.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-1 max-h-60 overflow-y-auto">
                  {generatedCodes.map((code, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between hover:bg-muted/50 px-2 py-1 rounded cursor-pointer"
                      onClick={() => copyCode(code)}
                    >
                      <span>{code}</span>
                      <Copy className="h-3 w-3 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Available Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{unusedCodes.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Redeemed Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">{usedCodes.length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Codes List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {codes.slice(0, 20).map((accessCode) => (
                  <div 
                    key={accessCode.id}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <div>
                      <code className="font-mono text-sm">{accessCode.code}</code>
                      <p className="text-xs text-muted-foreground">{accessCode.product_name}</p>
                    </div>
                    <div className="text-right">
                      {accessCode.redeemed_by ? (
                        <span className="text-xs text-green-600 font-medium">Redeemed</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">Available</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminCodes;
