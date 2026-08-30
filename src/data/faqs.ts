import type { FaqItem } from "@/lib/structuredData";
import { PILLARS, SEO_PHRASE, SITE_NAME } from "@/lib/siteCopy";
import { ETSY_SHOP_HOST, ETSY_SHOP_URL } from "@/lib/shopLinks";

export const homeFaqs: FaqItem[] = [
  {
    question: "What is Maybee Creations?",
    answer: `${SITE_NAME} is a digital creation studio that makes Creatively Crafted ${SEO_PHRASE.toLowerCase()} and adventure guides across five worlds: ${PILLARS}. Products include printable Bible maps, Liberty Explorer civics maps, Frontier Explorer science and story maps, NFL and Baseball Legend Lands for sports fans, and Tomorrow Explorer AI learning maps.`,
  },
  {
    question: "What are educational discovery world maps?",
    answer: `Educational discovery world maps are printable, fantasy-style cartography paired with adventure guidebooks. Each map turns a subject — Scripture, American history, science and literature, NFL and baseball lore, or AI tools — into a visual world families and students can explore with prompts, missions, and reflections.`,
  },
  {
    question: "What are the five realms on maybeecreations.com?",
    answer:
      "Faith (Soul Explorer Bible maps), Freedom (Liberty Explorer civics and history maps), Frontier (Frontier Explorer science, literature, music, missionary, and liberty maps such as Einstein, the Odyssey, and Mozart), Fans (Legend Explorer NFL, baseball, college football, and tennis Legend Lands), and Future (Tomorrow Explorer AI realm maps with Adventure Pack tutorials for ChatGPT, Claude, Gemini, and more).",
  },
  {
    question: "Who are Maybee Creations maps designed for?",
    answer:
      "Families, homeschoolers, students, teachers, and curious adults who want learning to feel like an adventure. Maps work at kitchen tables, in classrooms, on road trips, and as wall displays.",
  },
  {
    question: "Where can I buy Maybee Creations maps and guides?",
    answer: `Printable maps and adventure guides are available on the Maybee Creates Etsy shop at ${ETSY_SHOP_URL} (${ETSY_SHOP_HOST}). Browse by realm on maybeecreations.com, then purchase and download from Etsy.`,
  },
  {
    question: "Does Maybee Creations publish stories or articles?",
    answer:
      "Yes. The Stories section — The Story Behind the Map — shares essays on the history, meaning, and joy behind each map collection, including founding-era civics, baseball fandom, Scripture exploration, and America 250.",
  },
];
