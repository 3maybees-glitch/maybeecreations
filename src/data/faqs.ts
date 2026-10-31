import type { FaqItem } from "@/lib/structuredData";
import { PILLARS, SEO_PHRASE, SITE_NAME } from "@/lib/siteCopy";
import {
  SHOPIFY_SHOP_HOST,
  SHOPIFY_SHOP_URL,
} from "@/lib/shopLinks";

export const homeFaqs: FaqItem[] = [
  {
    question: "What is Maybee Creations?",
    answer: `${SITE_NAME} is a digital creation studio that makes Creatively Crafted ${SEO_PHRASE.toLowerCase()} and adventure guides across five worlds: ${PILLARS}. Products include printable Bible study maps, Liberty Explorer civics maps, Frontier Explorer science and story maps, Farlands Explorer country kits, and Tomorrow Explorer AI learning maps. Print them and laminate them for repeated use.`,
  },
  {
    question: "What are educational discovery world maps?",
    answer:
      "Educational discovery world maps are printable study maps — fantasy-style cartography paired with adventure guidebooks. Each map turns a subject — Scripture, American history, science and literature, expeditions, or AI tools — into a visual world families and students can explore with prompts, missions, and reflections. Laminate a map for repeated use at the table.",
  },
  {
    question: "What are the five realms on maybeecreations.com?",
    answer:
      "Faith (Soul Explorer Bible maps), Freedom (Liberty Explorer civics and history maps), Frontier (Frontier Explorer science, literature, music, missionary, and liberty maps such as Einstein, the Odyssey, and Mozart), Farlands (Farlands Explorer country kits — illustrated study maps, guidebooks, and audio tours), and Future (Tomorrow Explorer AI realm maps with Adventure Pack tutorials for ChatGPT, Claude, Gemini, and more).",
  },
  {
    question: "Who are Maybee Creations maps designed for?",
    answer:
      "Families, homeschoolers, students, teachers, and curious adults who want learning to feel like an adventure. Maps work at kitchen tables, in classrooms, and on road trips. Laminate them when you want to use the same study map again and again.",
  },
  {
    question: "Where can I buy Maybee Creations maps and guides?",
    answer: `Printable study maps and adventure guides for Faith, Freedom, Frontier, Farlands, and Future are available on the Maybee Creations Shopify shop at ${SHOPIFY_SHOP_URL} (${SHOPIFY_SHOP_HOST}). Browse by realm on maybeecreations.com, then purchase and download from the shop.`,
  },
  {
    question: "Does Maybee Creations publish stories or articles?",
    answer:
      "Yes. The Stories section — The Story Behind the Map — shares essays on the history, meaning, and joy behind each map collection, including founding-era civics, Scripture exploration, and America 250.",
  },
];
