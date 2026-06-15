import faithImg from "@/assets/category-faith.jpg";
import freedomImg from "@/assets/category-freedom.jpg";
import fansImg from "@/assets/category-fans.jpg";

export type CategoryKey = "faith" | "freedom" | "fans" | "future";

export interface CategoryMeta {
  key: CategoryKey;
  name: string;
  path: string;
  tagline: string;
  blurb: string;
  count: string;
  image: string;
  accentVar: string; // CSS var name without -- prefix used for --category override
}

export const categories: CategoryMeta[] = [
  {
    key: "faith",
    name: "Faith",
    path: "/faith",
    tagline: "Bible-rooted apps, maps, and lessons.",
    blurb:
      "Tools that help families and students engage Scripture with clarity, reflection, and wonder.",
    count: "1 app · maps & lessons coming soon",
    image: faithImg,
    accentVar: "faith",
  },
  {
    key: "freedom",
    name: "Freedom",
    path: "/freedom",
    tagline: "Tools celebrating liberty, civics, and conservative values.",
    blurb:
      "Freedom-first apps and learning tools that honor the principles of a self-governing people.",
    count: "10 Baseball Legend Land maps · apps coming soon",
    image: freedomImg,
    accentVar: "freedom",
  },
  {
    key: "fans",
    name: "Fans",
    path: "/fans",
    tagline: "Apps built for sports fans and the people who live the game.",
    blurb:
      "Stadium-energy experiences for fans who track every play, every season, every dynasty.",
    count: "Coming soon",
    image: fansImg,
    accentVar: "fans",
  },
  {
    key: "future",
    name: "Future",
    path: "/future",
    tagline: "AI fantasy world maps + tutorials for the AI era.",
    blurb:
      "Eight hand-illustrated realms of artificial wonder, paired with Adventure Pack tutorials.",
    count: "2 apps · 8 maps · 8 adventure packs",
    image: "https://pe56d.s3.amazonaws.com/o_1jp1pv8rpggmjvr1ohj1s3r14rk1c.png",
    accentVar: "future",
  },
];
