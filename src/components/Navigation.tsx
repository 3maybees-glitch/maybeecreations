import { Link } from "react-router-dom";
import { Compass, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { categories } from "@/data/categories";
import mcLogoIcon from "@/assets/mc-logo-icon.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-primary/20">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <Link to="/" className="group inline-flex items-center gap-2 sm:gap-3 shrink-0">
          <img
            src={mcLogoIcon}
            alt="Maybee Creations logo"
            className="h-10 sm:h-12 w-auto group-hover:scale-[1.03] transition-transform"
          />
          <span className="font-display text-lg sm:text-2xl font-bold tracking-wide text-primary leading-none">
            Maybee Creations
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 md:gap-7">
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
                    <span className="text-xs text-muted-foreground">{c.tagline}</span>
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

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-primary">Explore</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              {categories.map((c) => (
                <SheetClose key={c.key} asChild>
                  <Link
                    to={c.path}
                    className="flex flex-col gap-0.5 rounded-sm px-3 py-3 hover:bg-muted/60 transition-colors"
                  >
                    <span
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: `hsl(var(--${c.accentVar}))` }}
                    >
                      {c.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{c.tagline}</span>
                  </Link>
                </SheetClose>
              ))}
              <div className="ink-divider my-3" />
              <SheetClose asChild>
                <a
                  href="https://payhip.com/MaybeeCreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold uppercase tracking-widest text-primary hover:text-accent transition-colors"
                >
                  <Compass className="h-4 w-4" />
                  Shop on Payhip
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
