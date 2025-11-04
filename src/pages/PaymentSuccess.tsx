import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isRecording, setIsRecording] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const recordPurchase = async () => {
      const sessionId = searchParams.get('session_id');
      if (!sessionId) {
        setIsRecording(false);
        return;
      }

      try {
        const { error } = await supabase.functions.invoke('record-purchase', {
          body: { sessionId }
        });

        if (error) throw error;
      } catch (error) {
        console.error('Error recording purchase:', error);
        toast({
          title: "Warning",
          description: "Payment successful, but there was an issue recording your purchase. Please contact support.",
          variant: "destructive",
        });
      } finally {
        setIsRecording(false);
      }
    };

    recordPurchase();
  }, [searchParams, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-8 text-center">
        {isRecording ? (
          <>
            <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Processing...</h1>
            <p className="text-muted-foreground mb-6">
              Recording your purchase...
            </p>
          </>
        ) : (
          <>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground mb-6">
              You now have permanent access to Snackers - Virtual Bites! Sign in anytime to access your app.
            </p>
          </>
        )}
        <div className="space-y-3">
          <Button 
            className="w-full" 
            onClick={() => window.open('https://snackers.lovable.app', '_blank')}
          >
            Open Snackers App
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate('/')}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
