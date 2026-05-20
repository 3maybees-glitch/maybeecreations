import { Button } from "@/components/ui/button";
import { Compass, Scroll, ExternalLink } from "lucide-react";
import clawgardMap from "@/assets/clawgard-map.png";
import manusMap from "@/assets/manus-map.png";

interface Realm {
  name: string;
  brand: string;
  tagline: string;
  image: string;
  mapUrl: string;
  bundleUrl: string;
}

const realms: Realm[] = [
  {
    name: "The ChatGPT Starrealm Atlas",
    brand: "ChatGPT",
    tagline: "A celestial cartography of prompts, plugins, and constellations of GPTs.",
    image: "https://pe56d.s3.amazonaws.com/o_1jp07agoq1bopc3sih41e66etu1c.png",
    mapUrl: "https://payhip.com/b/42dOp",
    bundleUrl: "https://payhip.com/b/VtGNB",
  },
  {
    name: "The Saffron Desert Expanse of Claude",
    brand: "Claude",
    tagline: "Sun-baked dunes of long-context reasoning and thoughtful conversation.",
    image: "https://pe56d.s3.amazonaws.com/o_1jovuqiqr70lea58it6sv1sc81d.png",
    mapUrl: "https://payhip.com/b/spqv6",
    bundleUrl: "https://payhip.com/b/WSswe",
  },
  {
    name: "The Frostbound Realm of Gemini",
    brand: "Gemini",
    tagline: "Crystalline peaks of multimodal magic and twin-starred intelligence.",
    image: "https://pe56d.s3.amazonaws.com/o_1jovr4n1o1r6h190361edon1i0g1c.png",
    mapUrl: "https://payhip.com/b/dy7FU",
    bundleUrl: "https://payhip.com/b/Y2y6n",
  },
  {
    name: "The Robotropolis Grid of Perplexity",
    brand: "Perplexity",
    tagline: "Neon citadels of cited answers and tireless search-engine sentinels.",
    image: "https://pe56d.s3.amazonaws.com/o_1jp1pv8rpggmjvr1ohj1s3r14rk1c.png",
    mapUrl: "https://payhip.com/b/OhVsJ",
    bundleUrl: "https://payhip.com/b/6SgGP",
  },
  {
    name: "The Manus Mermaid Automation Kingdom",
    brand: "Manus",
    tagline: "Sunken halls where autonomous agents weave tides of automation.",
    image: manusMap,
    mapUrl: "https://payhip.com/b/pzx5Q",
    bundleUrl: "https://payhip.com/b/0VbIk",
  },
  {
    name: "The Rainforge Jungle of Local LLMs",
    brand: "Local LLMs",
    tagline: "Verdant canopies of open-weight models running on your own hardware.",
    image: "https://pe56d.s3.amazonaws.com/o_1jp0lk6v58l21nqj1t2r11kl7q21d.png",
    mapUrl: "https://payhip.com/b/fZdKo",
    bundleUrl: "https://payhip.com/b/THov0",
  },
  {
    name: "The Neon Gridverse of Vibe Coding",
    brand: "Vibe Coding",
    tagline: "Synthwave skylines where natural language conjures working software.",
    image: "https://pe56d.s3.amazonaws.com/o_1jp0hos071np318ladc14nr1bu11c.png",
    mapUrl: "https://payhip.com/b/JMrxL",
    bundleUrl: "https://payhip.com/b/KrNTQ",
  },
  {
    name: "The Realm of Clawgard — OpenClaw",
    brand: "OpenClaw",
    tagline: "Stone fortresses guarding the wild frontier of open AI tools.",
    image: clawgardMap,
    mapUrl: "https://payhip.com/b/mC1gd",
    bundleUrl: "https://payhip.com/b/KARkD",
  },
];

const RealmCard = ({ realm }: { realm: Realm }) => (
  <article className="parchment rounded-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 duration-300">
    <div className="relative overflow-hidden bg-muted aspect-[4/3]">
      <img
        src={realm.image}
        alt={`${realm.name} fantasy map illustration`}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold text-primary">
        {realm.brand}
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-2">
        {realm.name}
      </h3>
      <p className="text-base text-muted-foreground italic mb-6 flex-1">
        "{realm.tagline}"
      </p>

      <div className="ink-divider mb-4" />

      <div className="flex flex-col gap-2">
        <Button asChild variant="outline" className="justify-between border-primary/40 hover:bg-primary/5">
          <a href={realm.mapUrl} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2">
              <Compass className="h-4 w-4" />
              World Map
            </span>
            <span className="font-bold">$4.99</span>
          </a>
        </Button>
        <Button asChild className="justify-between bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={realm.bundleUrl} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2">
              <Scroll className="h-4 w-4" />
              Map + Tutorial Pack
            </span>
            <span className="font-bold">$9.99</span>
          </a>
        </Button>
      </div>
    </div>
  </article>
);

export const WorldMapsShowcase = () => {
  return (
    <section id="realms" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            ✦ The Cartographer's Collection ✦
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Eight Realms of Artificial Wonder
          </h2>
          <div className="ink-divider w-32 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Each AI brand reimagined as a sprawling fantasy kingdom — hand-illustrated
            world maps you can hang on your wall, paired with tutorial Adventure Packs
            that turn learning each tool into a quest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {realms.map((realm) => (
            <RealmCard key={realm.brand} realm={realm} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" variant="ghost" className="text-primary hover:text-accent">
            <a href="https://payhip.com/MaybeeCreations" target="_blank" rel="noopener noreferrer">
              Visit the full storefront on Payhip
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
