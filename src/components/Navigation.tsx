import { Link } from "react-router-dom";
import maybeeCreationsLogo from "@/assets/maybee-creations-logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={maybeeCreationsLogo} 
            alt="Maybee Creations Logo" 
            className="h-10 w-10 group-hover:scale-105 transition-transform"
          />
          <span className="text-xl font-bold text-primary animate-twinkle">
            Maybee Creations
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm font-medium hover:text-primary transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
};
