import { Link } from "react-router-dom";
import { Compass, ChevronDown } from "lucide-react";
import maybeeCreationsLogo from "@/assets/maybee-creations-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/data/categories";

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
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-foreground/80 hover:text-accent transition-colors focus:outline-none">
              Explore
              <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[12rem]">
              {categories.map((c) => (
                <DropdownMenuItem key={c.key} asChild>
                  <Link
                    to={c.path}
                    className="cursor-pointer flex flex-col items-start gap-0.5 py-2"
                  >
                    <span
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: `hsl(var(--${c.accentVar}))` }}
                    >
                      {c.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {c.tagline}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
