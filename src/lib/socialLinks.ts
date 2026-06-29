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
];

export const SOCIAL_SAME_AS = [
  "https://payhip.com/MaybeeCreations",
  ...SOCIAL_LINKS.map((link) => link.href),
];
