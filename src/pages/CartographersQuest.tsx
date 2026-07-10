import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  Feather,
  Map,
  ScrollText,
  ThumbsUp,
  Compass,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { categories } from "@/data/categories";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { staticPageSchemas } from "@/lib/structuredData";

interface MapIdea {
  id: string;
  title: string;
  description: string;
  realm: string;
  status: string;
  votes: number;
}

const STATUS_LABELS: Record<string, string> = {
  concept: "Rumored Realm",
  sketching: "Being Sketched",
  inking: "At the Inking Desk",
};

const VOTED_IDEAS_KEY = "mc-quest-votes";

const getVotedIdeas = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(VOTED_IDEAS_KEY) ?? "[]");
  } catch {
    return [];
  }
};

const realmAccent = (realm: string) =>
  categories.some((c) => c.key === realm) ? realm : "primary";

const CornerFlourishes = () => (
  <>
    <span aria-hidden className="absolute top-2 left-3 text-secondary/70 select-none">✦</span>
    <span aria-hidden className="absolute top-2 right-3 text-secondary/70 select-none">✦</span>
    <span aria-hidden className="absolute bottom-2 left-3 text-secondary/70 select-none">✦</span>
    <span aria-hidden className="absolute bottom-2 right-3 text-secondary/70 select-none">✦</span>
  </>
);

const MapRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    realm: "",
    mapTitle: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.realm || !form.mapTitle || !form.description) {
      toast.error("Every field of the commission scroll must be filled.");
      return;
    }

    setSending(true);
    const { data, error } = await supabase.functions.invoke("send-map-request", {
      body: form,
    });
    setSending(false);

    if (error || data?.error) {
      toast.error("The raven could not deliver your quest. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  const set = (field: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  if (submitted) {
    return (
      <div className="parchment relative rounded-sm p-10 md:p-14 text-center max-w-2xl mx-auto">
        <CornerFlourishes />
        <CheckCircle2 className="h-12 w-12 mx-auto text-secondary mb-4" />
        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
          Your Quest Has Been Dispatched
        </h3>
        <p className="text-lg italic text-muted-foreground leading-relaxed">
          A raven now carries your commission to the Cartographer's Guild.
          Watch your own raven address — we will reply to{" "}
          <span className="text-primary font-semibold">{form.email}</span> once
          the quill is sharpened.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="parchment relative rounded-sm p-8 md:p-12 max-w-2xl mx-auto space-y-6"
    >
      <CornerFlourishes />

      <div className="text-center mb-2">
        <Feather className="h-8 w-8 mx-auto text-secondary mb-2" />
        <h3 className="font-display text-xl md:text-2xl font-bold text-primary">
          The Commission Scroll
        </h3>
        <p className="text-sm italic text-muted-foreground mt-1">
          Inscribe your quest below, and it shall be delivered to the Guild.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="quest-name" className="uppercase tracking-widest text-xs text-primary">
            Explorer's Name
          </Label>
          <Input
            id="quest-name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Sir Reginald of the Round Table"
            className="bg-background/60"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="quest-email" className="uppercase tracking-widest text-xs text-primary">
            Raven Address (Email)
          </Label>
          <Input
            id="quest-email"
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@example.com"
            className="bg-background/60"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label className="uppercase tracking-widest text-xs text-primary">
            Realm of the Map
          </Label>
          <Select value={form.realm} onValueChange={set("realm")}>
            <SelectTrigger className="bg-background/60">
              <SelectValue placeholder="Choose a realm…" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.key} value={c.key}>
                  {c.name} — {c.explorerName}
                </SelectItem>
              ))}
              <SelectItem value="other">A Realm Not Yet Charted</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="quest-title" className="uppercase tracking-widest text-xs text-primary">
            Name of the World
          </Label>
          <Input
            id="quest-title"
            value={form.mapTitle}
            onChange={(e) => set("mapTitle")(e.target.value)}
            placeholder="e.g. The Kingdom of Kindness"
            className="bg-background/60"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="quest-description" className="uppercase tracking-widest text-xs text-primary">
          Describe Your Quest
        </Label>
        <Textarea
          id="quest-description"
          value={form.description}
          onChange={(e) => set("description")(e.target.value)}
          placeholder="Tell us of the lands, legends, and lessons your map should hold — who is it for, and what adventure should it spark?"
          rows={6}
          className="bg-background/60"
        />
      </div>

      <div className="ink-divider" />

      <div className="text-center">
        <Button type="submit" size="lg" disabled={sending} className="min-w-52">
          {sending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending the Raven…
            </>
          ) : (
            <>
              <ScrollText className="mr-2 h-4 w-4" />
              Dispatch the Quest
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground italic mt-3">
          Your scroll is delivered straight to the Guild's inbox. No fees to inquire.
        </p>
      </div>
    </form>
  );
};

const IdeaCard = ({ idea }: { idea: MapIdea }) => {
  const queryClient = useQueryClient();
  const [voted, setVoted] = useState(() => getVotedIdeas().includes(idea.id));
  const accent = realmAccent(idea.realm);
  const realmMeta = categories.find((c) => c.key === idea.realm);

  const voteMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.rpc("vote_for_map_idea", {
        idea_id: idea.id,
      });
      if (error) throw error;
      return data;
    },
    onSuccess: (newVotes) => {
      localStorage.setItem(
        VOTED_IDEAS_KEY,
        JSON.stringify([...getVotedIdeas(), idea.id]),
      );
      setVoted(true);
      queryClient.setQueryData<MapIdea[]>(["map-ideas"], (old) =>
        old?.map((i) =>
          i.id === idea.id ? { ...i, votes: newVotes ?? i.votes + 1 } : i,
        ),
      );
      toast.success("Your mark has been added to the ledger!", {
        description: `"${idea.title}" rises on the drafting table.`,
      });
    },
    onError: () => toast.error("The ledger quill slipped. Try again."),
  });

  return (
    <article
      className="parchment relative rounded-sm p-6 flex flex-col"
      style={{ ["--category" as string]: `var(--${accent})` }}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(var(--category) / 0.7), transparent)",
        }}
      />

      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold"
          style={{ color: "hsl(var(--category))" }}
        >
          {realmMeta ? `${realmMeta.name} Realm` : "Uncharted Realm"}
        </span>
        <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
          {STATUS_LABELS[idea.status] ?? idea.status}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold text-primary leading-snug mb-2">
        {idea.title}
      </h3>
      <p className="text-base italic text-muted-foreground leading-relaxed flex-1">
        {idea.description}
      </p>

      <div className="ink-divider my-4" />

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          <span className="font-bold text-primary">{idea.votes}</span>{" "}
          {idea.votes === 1 ? "explorer has" : "explorers have"} marked this map
        </span>
        <Button
          size="sm"
          variant={voted ? "secondary" : "outline"}
          disabled={voted || voteMutation.isPending}
          onClick={() => voteMutation.mutate()}
          className="gap-1.5"
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          {voted ? "Marked" : "Chart it sooner"}
        </Button>
      </div>
    </article>
  );
};

const DraftingTable = () => {
  const { data: ideas, isLoading, isError } = useQuery({
    queryKey: ["map-ideas"],
    queryFn: async (): Promise<MapIdea[]> => {
      const { data, error } = await supabase
        .from("map_ideas")
        .select("*")
        .order("votes", { ascending: false })
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center py-16 text-muted-foreground italic">
        <Loader2 className="h-6 w-6 mx-auto animate-spin mb-3" />
        Unrolling the drafting table…
      </div>
    );
  }

  if (isError || !ideas?.length) {
    return (
      <div className="parchment rounded-sm p-10 text-center max-w-xl mx-auto">
        <Map className="h-8 w-8 mx-auto text-secondary mb-3" />
        <p className="text-lg italic text-muted-foreground">
          The drafting table is being reset — check back soon to see the maps in
          progress and cast your mark.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
};

const CartographersQuest = () => {
  usePageSeo(
    pageMeta.cartographersQuest,
    staticPageSchemas(
      pageMeta.cartographersQuest.path,
      pageMeta.cartographersQuest.title,
      pageMeta.cartographersQuest.description,
      "The Cartographer's Quest",
    ),
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-24 md:pt-28 pb-6 md:pb-10 overflow-hidden">
        <div className="container mx-auto px-4 relative text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-secondary mb-3">
            ✦ Commission the Guild ✦
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-wide text-primary mb-4">
            The Cartographer's Quest
          </h1>
          <div className="ink-divider w-32 mx-auto mb-5" />
          <p className="text-lg md:text-2xl text-foreground/90 italic leading-relaxed max-w-3xl mx-auto">
            Dream a world, and we shall draw it. Commission a custom fantasy map
            — or cast your mark on the maps already taking shape at our drafting
            table.
          </p>
        </div>
      </section>

      <main>
        <section className="py-8 md:py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-2">
                Part the First
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                Request Your Own World
              </h2>
              <div className="ink-divider w-24 mx-auto mt-3" />
            </div>
            <MapRequestForm />
          </div>
        </section>

        <section className="py-10 md:py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-2">
                Part the Second
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                The Drafting Table
              </h2>
              <div className="ink-divider w-24 mx-auto mt-3" />
              <p className="text-base md:text-lg italic text-muted-foreground max-w-2xl mx-auto mt-4">
                These are the worlds our quills are circling. Give a map your
                thumbs up, and the Guild will move it up the queue — the most
                marked maps get drawn first.
              </p>
            </div>
            <DraftingTable />
          </div>
        </section>

        <section className="py-10 md:py-14 px-4">
          <div className="container mx-auto text-center">
            <Compass className="h-8 w-8 mx-auto text-secondary mb-3" />
            <p className="text-lg italic text-muted-foreground max-w-xl mx-auto">
              While you wait for new worlds, the finished ones await in the{" "}
              <a
                href="https://payhip.com/MaybeeCreations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-accent"
              >
                Maybee Creations storefront
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CartographersQuest;
