import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import maybeeCreationsLogo from "@/assets/maybee-creations-logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-primary/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={maybeeCreationsLogo}
            alt="Maybee Creations"
            className="h-9 w-9 group-hover:scale-105 transition-transform"
          />
          <span className="font-display text-lg md:text-xl font-bold text-primary tracking-wide">
            Maybee Creations
          </span>
        </Link>

        <div className="flex items-center gap-5 md:gap-7">
          <a
            href="#realms"
            className="hidden sm:inline text-xs uppercase tracking-widest font-semibold text-foreground/80 hover:text-accent transition-colors"
          >
            Realms
          </a>
          <a
            href="https://payhip.com/MaybeeCreations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-primary hover:text-accent transition-colors"
          >
            <Compass className="h-4 w-4" />
            Shop
          </a>
        </div>
      </div>
    </nav>
  );
};
