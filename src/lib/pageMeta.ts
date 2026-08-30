import {
  BRAND_PHRASE,
  DEFAULT_DESCRIPTION,
  HOME_TITLE_FULL,
  OG_DESCRIPTION,
  SEO_PHRASE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/siteCopy";

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, OG_DESCRIPTION, HOME_TITLE_FULL };

export const DEFAULT_OG_IMAGE =
  "https://pe56d.s3.amazonaws.com/o_1jp1pv8rpggmjvr1ohj1s3r14rk1c.png";

export const STATIC_OG_IMAGE_ALT =
  "Maybee Creations — Creatively Crafted educational discovery world maps for faith, freedom, frontier, fans, and the future";

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: HOME_TITLE_FULL,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  },
  faith: {
    title: `Faith — ${SEO_PHRASE} & Soul Explorer Guides | ${SITE_NAME}`,
    description:
      "Creatively Crafted Bible book category educational discovery world maps with Soul Explorer adventure guides for families and students.",
    path: "/faith",
  },
  freedom: {
    title: `Freedom — Liberty Explorer ${SEO_PHRASE} | ${SITE_NAME}`,
    description:
      "Creatively Crafted Liberty Explorer educational discovery world maps celebrating civics, founding figures, and American and world history.",
    path: "/freedom",
  },
  frontier: {
    title: `Frontier — Frontier Explorer ${SEO_PHRASE} | ${SITE_NAME}`,
    description:
      "Creatively Crafted Frontier Explorer maps of Einstein, the Odyssey, Mozart, Shakespeare, Tesla, and more — science, literature, music, faith, and liberty.",
    path: "/frontier",
  },
  fans: {
    title: `Fans — Legend Explorer ${SEO_PHRASE} | ${SITE_NAME}`,
    description:
      "Creatively Crafted Legend Explorer fan maps for the NFL, baseball, college football, and tennis — educational discovery world maps and adventure guides.",
    path: "/fans",
  },
  future: {
    title: `Future — Tomorrow Explorer ${SEO_PHRASE} | ${SITE_NAME}`,
    description:
      "Ten Creatively Crafted Tomorrow Explorer AI educational discovery world maps paired with Adventure Pack tutorials for ChatGPT, Claude, Gemini, and more.",
    path: "/future",
  },
  stories: {
    title: `Stories — The Story Behind the Map | ${SITE_NAME}`,
    description:
      "Storytime essays on the history, meaning, and joy of Maybee Creations maps and guides — Faith, Freedom, Frontier, Fans, and the Future.",
    path: "/stories",
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy policy for ${SITE_NAME} ${SEO_PHRASE.toLowerCase()} and digital products.`,
    path: "/privacy",
  },
  terms: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Terms of service for ${SITE_NAME} ${SEO_PHRASE.toLowerCase()} and digital products.`,
    path: "/terms",
  },
  sitemap: {
    title: `Sitemap | ${SITE_NAME}`,
    description: "Complete guide to every page on maybeecreations.com.",
    path: "/sitemap",
  },
  requestMap: {
    title: `Request a Map — Chart the Next Expedition | ${SITE_NAME}`,
    description:
      "Submit your idea for the next Maybee Creations educational discovery world map. Browse the public Mapmaker's Ledger of approved community requests across Faith, Freedom, Fans, and Future.",
    path: "/request-a-map",
  },
  notFound: {
    title: `Page Not Found | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    path: "/",
    noindex: true,
  },
};
