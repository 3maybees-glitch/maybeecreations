import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { categories } from "@/data/categories";
import { DEFAULT_DESCRIPTION } from "@/lib/siteCopy";

export const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-primary/30 py-14 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-5 w-5 text-accent" />
              <span className="font-display text-xl font-bold text-primary">
                Maybee Creations
              </span>
            </div>
            <p className="text-lg text-muted-foreground italic leading-relaxed">
              {DEFAULT_DESCRIPTION}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
              Wayfaring
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <a
                  href="https://payhip.com/MaybeeCreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-muted-foreground hover:text-accent transition-colors"
                >
                  Payhip Storefront
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.key}>
                  <Link
                    to={category.path}
                    className="text-lg text-muted-foreground hover:text-accent transition-colors inline-flex flex-col"
                  >
                    <span>{category.name}</span>
                    <span className="text-xs italic">{category.explorerName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ink-divider mb-6" />
        <div className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          <p>© {new Date().getFullYear()} Maybee Creations · maybeecreations.com</p>
        </div>
      </div>
    </footer>
  );
};
