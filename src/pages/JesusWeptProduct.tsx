import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Heart, Star, Sparkles, BookOpen, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jesusWeptAppIcon from "@/assets/jesus-wept-app-icon.png";
import jwScreenshot1 from "@/assets/jw-screenshot-1.png";
import jwScreenshot2 from "@/assets/jw-screenshot-2.png";
import jwScreenshot3 from "@/assets/jw-screenshot-3.png";
import jwScreenshot4 from "@/assets/jw-screenshot-4.png";
import jwScreenshot5 from "@/assets/jw-screenshot-5.png";
import jwScreenshot6 from "@/assets/jw-screenshot-6.png";

const JesusWeptProduct = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Star,
      title: "Two-Word Scripture",
      description: "Explore the Bible through powerful two-word phrases that carry deep meaning"
    },
    {
      icon: Heart,
      title: "Daily Devotion",
      description: "Start each day with a meaningful two-word message from Scripture"
    },
    {
      icon: BookOpen,
      title: "Greek & Hebrew Roots",
      description: "Tap any word to explore its original language, transliteration, and deeper meaning"
    },
    {
      icon: Palette,
      title: "50 Hidden Easter Eggs",
      description: "Discover classical Biblical paintings and art masterpieces hidden throughout Scripture"
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
                <img 
                  src={jesusWeptAppIcon} 
                  alt="Jesus Wept app icon" 
                  className="w-16 h-16 rounded-xl shadow-lg"
                />
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">Faith & Inspiration</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Jesus Wept: Two Word Bible App
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Discover the power of Scripture through its most impactful two-word phrases. 
                Now covering the entire Bible — both Old and New Testament — a simple, beautiful way to connect with God's Word every day.
              </p>
              <p className="text-sm text-muted-foreground mb-8 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/50 rounded-full">
                🎨 Includes 50 hidden Easter Eggs — tap special verses to reveal classical Biblical paintings and art masterpieces!
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
                <img src={jwScreenshot1} alt="Jesus Wept app - The Whole Bible, Two Words at a Time" className="w-full h-full object-cover" />
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

      {/* Feature: Browse the Entire Bible */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwScreenshot1} alt="Browse the entire Bible - Old and New Testament" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20 mt-8">
                <img src={jwScreenshot6} alt="Full KJV Scripture with beautiful backgrounds" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Browse the Entire Bible</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Navigate through all 66 books of the Bible — both Old and New Testament — organized by category. Each book displays its chapter count and a unique two-word theme.
              </p>
              <p className="text-lg text-muted-foreground">
                Full KJV Scripture with beautiful backgrounds unique to each book, creating an immersive reading experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Hebrew & Greek Exploration */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Explore Original Languages</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Tap any highlighted word to uncover its original Greek or Hebrew root. See the Strong's number, transliteration, and a concise definition — all without leaving the verse.
              </p>
              <p className="text-lg text-muted-foreground">
                Discover that "God" comes from <em>elohim</em> — "God; the supreme God" — or that "created" is <em>bara'</em> — "to create, shape, or form."
              </p>
            </div>
            <div className="order-1 lg:order-2 flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwScreenshot2} alt="Genesis 1:1 - God Created with Hebrew definitions" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Hidden Easter Eggs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwScreenshot4} alt="Tap the hidden cross to reveal a masterwork" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20 mt-8">
                <img src={jwScreenshot3} alt="50 hidden masterpieces - The Raising of Lazarus by Caravaggio" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">50 Hidden Easter Eggs</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Tap the hidden cross icons scattered throughout Scripture to reveal classical Biblical paintings and art masterpieces by Michelangelo, Rembrandt, Caravaggio, and more.
              </p>
              <p className="text-lg text-muted-foreground">
                Each hidden masterpiece includes the artist name, year, and the Bible verse it illustrates. Can you find all 50?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Book Themes */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Book & Testament Themes</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Every book and testament has its own insightful two-word theme — like "Divine Creation" for Genesis or "Covenant LORD" for the Old Testament. Tap any theme to explore both words with their original Hebrew or Greek roots and definitions.
              </p>
              <p className="text-lg text-muted-foreground">
                Three layers of themes — Bible, Testament, and Book — give you a bird's-eye view of Scripture's grand narrative.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex gap-6 justify-center">
              <div className="aspect-[9/19] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwScreenshot5} alt="Chapter, Book & Testament Themes with Hebrew & Greek definitions" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A beautifully crafted experience from start to finish
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[jwShot1, jwShot2, jwShot3, jwShot5, jwShot6, jwShot4, jwShot7, jwShot9, jwShot10].map((shot, i) => (
              <div key={i} className="aspect-[9/16] min-w-[200px] w-[200px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-muted/20 snap-center">
                <img src={shot} alt={`App screenshot ${i + 1}`} className="w-full h-full object-cover" />
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
