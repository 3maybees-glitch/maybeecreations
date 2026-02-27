import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Heart, Star, Sparkles, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jesusWeptAppIcon from "@/assets/jesus-wept-app-icon.png";
import jwShot1 from "@/assets/jw-shot1.png";
import jwShot2 from "@/assets/jw-shot2.png";
import jwShot3 from "@/assets/jw-shot3.png";
import jwShot4 from "@/assets/jw-shot4.png";
import jwShot5 from "@/assets/jw-shot5.png";
import jwShot6 from "@/assets/jw-shot6.png";
import jwShot7 from "@/assets/jw-shot7.png";
import jwShot9 from "@/assets/jw-shot9.png";
import jwShot10 from "@/assets/jw-shot10.png";

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
      icon: Sparkles,
      title: "Beautiful Experience",
      description: "A thoughtfully designed app that makes Scripture feel fresh and alive"
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
                A simple, beautiful way to connect with the Bible every day.
              </p>
              <p className="text-sm text-muted-foreground mb-8 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/50 rounded-full">
                ✨ Currently featuring the complete New Testament — Old Testament coming in a future release!
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
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Coming soon to the App Store</span>
                </div>
                <span>·</span>
                <a href="/jesus-wept/support" className="text-primary underline hover:text-primary/80 transition-colors">
                  Support
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[9/16] max-w-xs mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-muted/30">
                <img src={jwShot1} alt="Jesus Wept app - New Testament books view" className="w-full h-full object-cover" />
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

      {/* Feature: Browse Books & Chapters */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwShot1} alt="Browse New Testament books" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20 mt-8">
                <img src={jwShot2} alt="Browse chapters in Matthew" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Browse the New Testament</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Navigate through all 27 New Testament books organized by category — Gospels, History, Pauline Epistles, and more. Each book displays its chapter count and a unique two-word theme.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Old Testament support is coming in a future release.
              </p>
              <p className="text-lg text-muted-foreground">
                Select any chapter to dive into verse-by-verse Scripture, each paired with its own two-word phrase to guide your reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Two-Word Phrases */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Two Words Per Verse</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Every verse is distilled into two powerful keywords — highlighted right in the Scripture text. These words capture the essence of each verse, giving you a fresh lens to read and meditate on God's Word.
              </p>
              <p className="text-lg text-muted-foreground">
                From "begat · Jesus" to "grace · peace," each pair invites you to pause, reflect, and explore deeper meaning.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex gap-6 justify-center">
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwShot3} alt="Two-word phrases in Matthew 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20 mt-8">
                <img src={jwShot5} alt="Two-word phrases in Luke 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Word Exploration */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 justify-center">
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwShot4} alt="Greek word exploration - begat" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20 mt-8">
                <img src={jwShot7} alt="Greek word exploration - joy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Explore Original Languages</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Tap any highlighted word to uncover its original Greek or Hebrew root. See the Strong's number, transliteration, and a concise definition — all without leaving the verse.
              </p>
              <p className="text-lg text-muted-foreground">
                Discover that "joy" comes from <em>chara</em> — "gladness rooted in God" — or that "begat" is <em>gennaō</em> — "to bring forth, emphasizing lineage and divine continuity."
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
              <h2 className="text-4xl font-bold mb-6">Book Themes & Deep Dives</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Each book of the Bible has its own two-word theme — like "Kingdom Heaven" for Matthew or "Rejoice Lord" for Philippians. Tap the theme badge to explore both words with their original language roots and meanings.
              </p>
              <p className="text-lg text-muted-foreground">
                Beautiful background imagery sets the tone for each book, creating an immersive reading experience.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex gap-6 justify-center">
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20">
                <img src={jwShot9} alt="Philippians chapters with theme" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/16] w-52 rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-muted/20 mt-8">
                <img src={jwShot10} alt="Book theme exploration - Rejoice Lord" className="w-full h-full object-cover" />
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
