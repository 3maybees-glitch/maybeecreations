import { CategoryPageLayout, CategorySection } from "@/components/CategoryPageLayout";
import { AppCard } from "@/components/AppCard";
import { categories } from "@/data/categories";
import { Mic, Trophy, BarChart3, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta = categories.find((c) => c.key === "fans")!;

interface LegendLand {
  team: string;
  url: string;
  image: string;
}

const baseballLegendLands: LegendLand[] = [
  { team: "New York Yankees", url: "https://payhip.com/b/XxsL4", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_d9fb85192db24e56883c69f5.jpg" },
  { team: "Boston Red Sox", url: "https://payhip.com/b/SHUD3", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_a534c29ba3db4a1aacb5f332.jpg" },
  { team: "Los Angeles Dodgers", url: "https://payhip.com/b/xKc13", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_1d857d88b34746e3bbe135c9.jpg" },
  { team: "Chicago Cubs", url: "https://payhip.com/b/k4ap0", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_3c82e1cff9704eb18407f808.jpg" },
  { team: "St. Louis Cardinals", url: "https://payhip.com/b/Z9YV7", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_13f33b2882074653bed24fbb.jpg" },
  { team: "Chicago White Sox", url: "https://payhip.com/b/x6oHy", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_0e5eb82978e545ef821ab07a.jpg" },
  { team: "Detroit Tigers", url: "https://payhip.com/b/T3bKG", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_bbaa40d0827843049d73fce1.jpg" },
  { team: "Kansas City Royals", url: "https://payhip.com/b/qb7Jx", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_f9fb8df8af0a4ef0963635dd.jpg" },
  { team: "Philadelphia Phillies", url: "https://payhip.com/b/l7nKt", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_629f05fc28a6446a9a28dd93.jpg" },
  { team: "Washington Nationals", url: "https://payhip.com/b/0ECx2", image: "https://payhip.com/cdn-cgi/image/format=auto,width=750/https://pe56d.s3.amazonaws.com/o_3b362633c15c4399a298f405.jpg" },
];

const Fans = () => {
  return (
    <CategoryPageLayout
      category={meta}
      intro="Stadium-energy experiences built for the people who live the game — every play, every season, every dynasty."
    >
      <CategorySection eyebrow="New · Maps & Adventure Guides" title="Baseball Legend Lands">
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Hand-illustrated world maps and fan adventure guides for the legends of America's pastime. Each Legend Land is a $7.77 digital download on Payhip.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {baseballLegendLands.map((m) => (
            <Card
              key={m.url}
              className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-[1.02]"
            >
              <a href={m.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={m.image}
                    alt={`${m.team} Baseball Legend Land map`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm leading-tight mb-1 line-clamp-2">
                    {m.team}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary">$7.77</span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                      Payhip <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" asChild>
            <a href="https://payhip.com/MaybeeCreations" target="_blank" rel="noopener noreferrer">
              See all on Payhip
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CategorySection>

      <CategorySection eyebrow="Apps" title="Fan-Sports Apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AppCard
            title="StatSpeak"
            description="Basketball audio-stat tracker — speak your stats and let the app track the game in real time."
            icon={Mic}
            category="Basketball"
            comingSoon={true}
          />
          <AppCard
            title="BoomerBall"
            description="Oklahoma college football app — track the Sooners, follow recruiting, and live the season with fellow fans."
            icon={Trophy}
            category="College Football"
            comingSoon={true}
          />
          <AppCard
            title="MLB Player Similarity"
            description="Discover which MLB players mirror each other across eras — compare stats, styles, and career arcs."
            icon={BarChart3}
            category="Baseball"
            comingSoon={true}
          />
        </div>
      </CategorySection>
    </CategoryPageLayout>
  );
};

export default Fans;
