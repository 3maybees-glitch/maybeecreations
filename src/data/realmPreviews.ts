import { bibleMaps } from "@/data/bibleMaps";
import { freedomMaps } from "@/data/freedomMaps";
import { baseballLegendLands } from "@/data/baseballLands";
import { realms } from "@/data/realms";

export interface MapPreview {
  name: string;
  image: string;
}

function toPreviews(items: { name: string; image: string }[], count = 4): MapPreview[] {
  return items.slice(0, count).map(({ name, image }) => ({ name, image }));
}

/** Lead with the free Gospels map so visitors see the blessing first */
export const faithPreviews = toPreviews(
  [bibleMaps[5], ...bibleMaps.filter((_, index) => index !== 5)],
);
export const freedomPreviewMaps = toPreviews(freedomMaps);
export const fansPreviews = toPreviews(
  baseballLegendLands.map(({ team, image }) => ({ name: team, image })),
);
export const futurePreviews = toPreviews(realms);

/** Curated strip for the hero — one standout map per realm */
export const heroMapStrip: MapPreview[] = [
  { name: `${bibleMaps[5].books} (Free)`, image: bibleMaps[5].image },
  { name: freedomMaps[2].name, image: freedomMaps[2].image },
  { name: baseballLegendLands[0].team, image: baseballLegendLands[0].image },
  { name: realms[0].name, image: realms[0].image },
  { name: bibleMaps[6].name, image: bibleMaps[6].image },
  { name: baseballLegendLands[2].team, image: baseballLegendLands[2].image },
  { name: realms[3].name, image: realms[3].image },
  { name: bibleMaps[3].name, image: bibleMaps[3].image },
];
