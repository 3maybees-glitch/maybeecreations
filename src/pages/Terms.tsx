import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

const Terms = () => {
  usePageMeta(pageMeta.terms);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <FileText className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Maybee Creations applications and services, you agree to be bound by these 
                Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and use our applications for personal or internal business purposes</li>
                <li>Download and use application features as intended</li>
                <li>Receive updates and support as provided</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When you create an account with us, you must provide accurate and complete information. You are 
                responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Maintaining the security of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit malicious code or harmful materials</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the services</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Payments and Subscriptions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some of our applications may require payment or offer subscription services. Payment terms will be 
                clearly stated at the time of purchase. We reserve the right to modify pricing at any time. 
                Subscriptions will automatically renew unless cancelled before the renewal date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refund eligibility depends on the specific application and purchase type. Generally, refunds may be 
                available within 14 days of purchase if the application has not been substantially used. Contact 
                3maybees@gmail.com for refund requests.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our applications are owned by Maybee Creations and are 
                protected by international copyright, trademark, and other intellectual property laws. You may not 
                reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express 
                or implied. We do not warrant that our services will be uninterrupted, secure, or error-free.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Maybee Creations shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Modifications to Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or discontinue our services at any time without notice. We shall not 
                be liable to you or any third party for any modification, suspension, or discontinuance of services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to 
                conflict of law provisions.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@maybeecreations.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
