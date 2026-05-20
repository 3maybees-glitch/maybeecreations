import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

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
              Where AI becomes adventure. Discover fantasy world maps and tutorial packs inspired by the leading AI platforms.
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
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
              The Realms
            </h3>
            <ul className="space-y-2 text-lg text-muted-foreground italic">
              <li>Starrealm Atlas of ChatGPT</li>
              <li>Saffron Desert of Claude</li>
              <li>Frostbound Realm of Gemini</li>
              <li>Robotropolis Grid of Perplexity</li>
              <li>…and four more kingdoms</li>
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
