import { bibleMaps } from "@/data/bibleMaps";
import { baseballLegendLands } from "@/data/baseballLands";
import { freedomMaps } from "@/data/freedomMaps";
import { realms } from "@/data/realms";
import {
  faithPreviews,
  freedomPreviewMaps,
  fansPreviews,
  futurePreviews,
  type MapPreview,
} from "@/data/realmPreviews";

export type CategoryKey = "faith" | "freedom" | "fans" | "future";

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
      "Soul Explorer adventure guides paired with Bible discovery maps from Genesis to Revelation — including a free Matthew–John map as our blessing to you.",
    count: `${bibleMaps.length} Bible maps & guides`,
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
    key: "fans",
    name: "Fans",
    explorerName: "Legend Explorer",
    path: "/fans",
    tagline: "Step into legendary ballparks and the dynasties you grew up cheering.",
    blurb:
      "Baseball Legend Lands — printable fan adventure maps for the teams that own your heart.",
    count: `${baseballLegendLands.length} Baseball Legend Lands`,
    mapPreviews: fansPreviews,
    accentVar: "fans",
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
