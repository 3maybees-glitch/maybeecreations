import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface AppCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  comingSoon?: boolean;
}

export const AppCard = ({ title, description, icon: Icon, category, comingSoon = true }: AppCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden relative">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardHeader className="relative">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="inline-block mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="relative">
        {comingSoon ? (
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-muted rounded-full">
              <span className="text-xs font-medium text-muted-foreground">Coming Soon</span>
            </div>
          </div>
        ) : (
          <Button variant="ghost" className="group/btn">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
