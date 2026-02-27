import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface AppCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  iconImage?: string;
  category: string;
  comingSoon?: boolean;
  link?: string;
  appStoreLink?: string;
}

export const AppCard = ({ title, description, icon: Icon, iconImage, category, comingSoon = true, link, appStoreLink }: AppCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardHeader className="relative">
        <div className="w-12 h-12 rounded-lg overflow-hidden mb-4 group-hover:scale-110 transition-transform">
          {iconImage ? (
            <img src={iconImage} alt={title} className="w-full h-full object-cover" />
          ) : Icon ? (
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
          ) : null}
        </div>
        <div className="inline-block mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="relative flex-col items-start gap-3">
        {comingSoon ? (
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-muted rounded-full">
              <span className="text-xs font-medium text-muted-foreground">Coming Soon</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            {link && (
              <Button variant="ghost" className="group/btn w-full" asChild>
                <Link to={link}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
            {appStoreLink && (
              <Button variant="default" className="w-full" asChild>
                <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                  Download on App Store
                </a>
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
