import { bibleMaps } from "@/data/bibleMaps";
import { lifeOfMaps } from "@/data/lifeOfMaps";
import { freedomMaps } from "@/data/freedomMaps";
import { frontierMaps } from "@/data/frontierMaps";
import { farlandsMaps } from "@/data/farlandsMaps";
import { realms } from "@/data/realms";
import {
  faithPreviews,
  freedomPreviewMaps,
  frontierPreviews,
  farlandsPreviews,
  futurePreviews,
  type MapPreview,
} from "@/data/realmPreviews";

export type CategoryKey =
  | "faith"
  | "freedom"
  | "frontier"
  | "farlands"
  | "future";
export type MapRequestRealm = Exclude<CategoryKey, "frontier">;

export interface CategoryMeta {
  key: CategoryKey;
  name: string;
  explorerName: string;
  path: string;
  tagline: string;
  blurb: string;
  count: string;
  mapPreviews: MapPreview[];
  accentVar: string;
}

export const categories: CategoryMeta[] = [
  {
    key: "faith",
    name: "Faith",
    explorerName: "Soul Explorer",
    path: "/faith",
    tagline: "Walk the lands of Scripture — map by map, book by book.",
    blurb:
      "Soul Explorer adventure guides paired with Bible discovery maps — book categories and Life Of character journeys from Genesis to Revelation.",
    count: `${bibleMaps.length + lifeOfMaps.length} Bible maps & guides`,
    mapPreviews: faithPreviews,
    accentVar: "faith",
  },
  {
    key: "freedom",
    name: "Freedom",
    explorerName: "Liberty Explorer",
    path: "/freedom",
    tagline: "Chart the birth of a republic and the fight to keep it free.",
    blurb:
      "Liberty Explorer maps honoring founders, turning points, and the principles of self-government.",
    count: `${freedomMaps.length} Liberty Explorer maps & guides`,
    mapPreviews: freedomPreviewMaps,
    accentVar: "freedom",
  },
  {
    key: "frontier",
    name: "Frontier",
    explorerName: "Discovery Explorer",
    path: "/frontier",
    tagline: "Chart the lives and ideas that opened new worlds — science, story, music, and more.",
    blurb:
      "Frontier Explorer maps of Einstein, the Odyssey, Mozart, Shakespeare, Tesla, and the rest of the science, literature, music, faith, and liberty expedition.",
    count: `${frontierMaps.length} Frontier Explorer maps & guides`,
    mapPreviews: frontierPreviews,
    accentVar: "frontier",
  },
  {
    key: "farlands",
    name: "Farlands",
    explorerName: "Farlands Explorer",
    path: "/farlands",
    tagline: "Set out for distant horizons — country kits for educational discovery.",
    blurb:
      "Farlands Explorer country kits — an illustrated study map, guidebook, and audio tour. Print and laminate them for repeated use.",
    count: `${farlandsMaps.length} Farlands Explorer kits`,
    mapPreviews: farlandsPreviews,
    accentVar: "farlands",
  },
  {
    key: "future",
    name: "Future",
    explorerName: "Tomorrow Explorer",
    path: "/future",
    tagline: "Venture into AI kingdoms where every tool is a world to conquer.",
    blurb:
      "Tomorrow Explorer AI realm maps with Adventure Pack tutorials for ChatGPT, Claude, Gemini, and more.",
    count: `${realms.length} maps · ${realms.length} adventure packs`,
    mapPreviews: futurePreviews,
    accentVar: "future",
  },
];
