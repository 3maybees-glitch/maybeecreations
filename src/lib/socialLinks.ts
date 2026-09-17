export interface SocialLink {
  name: string;
  href: string;
  label: string;
  shortLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "x",
    href: "https://x.com/MaybeeCreation",
    label: "Follow Maybee Creations on X",
    shortLabel: "X (Twitter)",
  },
  {
    name: "youtube",
    href: "https://youtube.com/@maybeecreations",
    label: "Subscribe to Maybee Creations on YouTube",
    shortLabel: "YouTube",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/maybee-creations",
    label: "Connect with Maybee Creations on LinkedIn",
    shortLabel: "LinkedIn",
  },
  {
    name: "pinterest",
    href: "https://www.pinterest.com/maybeecreations",
    label: "Follow Maybee Creations on Pinterest",
    shortLabel: "Pinterest",
  },
];

import { PAYHIP_SHOP_URL, SHOPIFY_SHOP_URL } from "@/lib/shopLinks";

export const SOCIAL_SAME_AS = [
  SHOPIFY_SHOP_URL,
  PAYHIP_SHOP_URL,
  ...SOCIAL_LINKS.map((link) => link.href),
];
