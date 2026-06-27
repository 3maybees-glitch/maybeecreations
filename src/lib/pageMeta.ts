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

export interface PageMeta {
  title: string;
  description: string;
  path: string;
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
  fans: {
    title: `Fans — Legend Explorer ${SEO_PHRASE} | ${SITE_NAME}`,
    description:
      "Creatively Crafted Legend Explorer Baseball Legend Land educational discovery world maps and fan adventure guides for America's pastime.",
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
      "Storytime essays on the history, meaning, and joy of Maybee Creations maps and guides — Faith, Freedom, Fans, and the Future.",
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
  notFound: {
    title: `Page Not Found | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  },
};
