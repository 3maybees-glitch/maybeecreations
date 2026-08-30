import { bibleMaps } from "@/data/bibleMaps";
import { freedomMaps } from "@/data/freedomMaps";
import { frontierMaps } from "@/data/frontierMaps";
import { baseballLegendLands } from "@/data/baseballLands";
import { nflLegendLands } from "@/data/nflLands";
import { tennisLegendLands } from "@/data/tennisLegendLands";
import { realms } from "@/data/realms";

export interface MapPreview {
  name: string;
  image: string;
}

function toPreviews(items: { name: string; image: string }[], count = 4): MapPreview[] {
  return items.slice(0, count).map(({ name, image }) => ({ name, image }));
}

export const faithPreviews = toPreviews(bibleMaps);
export const freedomPreviewMaps = toPreviews(freedomMaps);
export const frontierPreviews = toPreviews(
  ["einstein", "odyssey", "mozart", "shakespeare"].map((slug) => {
    const map = frontierMaps.find((item) => item.slug === slug)!;
    return { name: map.name, image: map.image };
  }),
);
export const fansPreviews = toPreviews([
  ...nflLegendLands.slice(8, 12).map(({ team, image }) => ({ name: team, image })),
  ...baseballLegendLands.slice(0, 2).map(({ team, image }) => ({ name: team, image })),
  ...tennisLegendLands.map(({ name, image }) => ({ name, image })),
]);
export const futurePreviews = toPreviews(realms);

/** Curated strip for the hero — one standout map per realm */
const einstein = frontierMaps.find((map) => map.slug === "einstein")!;
const odyssey = frontierMaps.find((map) => map.slug === "odyssey")!;

export const heroMapStrip: MapPreview[] = [
  { name: bibleMaps[0].name, image: bibleMaps[0].image },
  { name: freedomMaps[2].name, image: freedomMaps[2].image },
  { name: einstein.name, image: einstein.image },
  { name: baseballLegendLands[0].team, image: baseballLegendLands[0].image },
  { name: realms[0].name, image: realms[0].image },
  { name: bibleMaps[6].name, image: bibleMaps[6].image },
  { name: odyssey.name, image: odyssey.image },
  { name: baseballLegendLands[2].team, image: baseballLegendLands[2].image },
];
