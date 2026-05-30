import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, MessageCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import jesusWeptAppIcon from "@/assets/jesus-wept-app-icon.png";

const JesusWeptSupport = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-10 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto max-w-3xl text-center">
          <img
            src={jesusWeptAppIcon}
            alt="Jesus Wept app icon"
            className="w-20 h-20 rounded-2xl shadow-lg mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jesus Wept — Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We're here to help you get the most out of the Jesus Wept: Two Word Bible App.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center gap-3">
              <Mail className="w-10 h-10 text-primary" />
              <h3 className="text-lg font-semibold">Email Support</h3>
              <p className="text-sm text-muted-foreground">
                Send us an email and we'll respond as soon as possible.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:3maybees@gmail.com">3maybees@gmail.com</a>
              </Button>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center gap-3">
              <Clock className="w-10 h-10 text-primary" />
              <h3 className="text-lg font-semibold">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Jesus Wept: Two Word Bible App?</AccordionTrigger>
              <AccordionContent>
                Jesus Wept distills every verse of Scripture into two powerful keywords, giving you a fresh and focused way to read, reflect on, and explore the entire Bible — both Old and New Testament — daily.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Does the app cover the entire Bible?</AccordionTrigger>
              <AccordionContent>
                Yes! The app covers all 66 books of the Bible, including both the Old and New Testament.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do the Greek & Hebrew word explorations work?</AccordionTrigger>
              <AccordionContent>
                Tap any highlighted keyword in a verse to see its original Greek or Hebrew root, transliteration, Strong's number, and a concise definition — all without leaving the verse.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is my data collected or shared?</AccordionTrigger>
              <AccordionContent>
                We take your privacy seriously. Please review our{" "}
                <a href="/privacy" className="text-primary underline">Privacy Policy</a>{" "}
                for full details on how we handle your information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I report a bug or suggest a feature?</AccordionTrigger>
              <AccordionContent>
                Email us at <a href="mailto:3maybees@gmail.com" className="text-primary underline">3maybees@gmail.com</a> with a description of the issue or your idea. Screenshots are always helpful!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What devices are supported?</AccordionTrigger>
              <AccordionContent>
                Jesus Wept is available for iPhone and iPad running iOS 16 or later.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Privacy & Terms */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center gap-3">
              <Shield className="w-10 h-10 text-primary" />
              <h3 className="text-lg font-semibold">Privacy Policy</h3>
              <p className="text-sm text-muted-foreground">
                Learn how we protect your information.
              </p>
              <Button variant="outline" asChild>
                <a href="/privacy">View Privacy Policy</a>
              </Button>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center gap-3">
              <MessageCircle className="w-10 h-10 text-primary" />
              <h3 className="text-lg font-semibold">Terms of Service</h3>
              <p className="text-sm text-muted-foreground">
                Review our terms and conditions.
              </p>
              <Button variant="outline" asChild>
                <a href="/terms">View Terms of Service</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JesusWeptSupport;
