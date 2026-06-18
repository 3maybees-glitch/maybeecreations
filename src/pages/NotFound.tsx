import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Compass, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            ✦ Lost in the Map ✦
          </p>
          <h1 className="font-display text-7xl md:text-8xl font-black text-primary mb-4">404</h1>
          <div className="ink-divider w-24 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground italic mb-8 leading-relaxed">
            This path isn&apos;t charted on our atlas yet. The page you&apos;re looking for may
            have moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="uppercase tracking-widest">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="uppercase tracking-widest border-primary/30"
            >
              <a href="https://payhip.com/MaybeeCreations" target="_blank" rel="noopener noreferrer">
                <Compass className="mr-2 h-4 w-4" />
                Visit Shop
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
