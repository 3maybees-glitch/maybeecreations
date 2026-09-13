import { bibleMaps } from "@/data/bibleMaps";
import { freedomMaps } from "@/data/freedomMaps";
import { frontierMaps } from "@/data/frontierMaps";
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
export const frontierPreviews: MapPreview[] = [
  { name: "Albert Einstein", image: "/realm-previews/frontier-einstein.jpg" },
  { name: "The Odyssey", image: "/realm-previews/frontier-odyssey.jpg" },
  { name: "Wolfgang Amadeus Mozart", image: "/realm-previews/frontier-mozart.jpg" },
  { name: "William Shakespeare", image: "/realm-previews/frontier-shakespeare.jpg" },
];
export const fansPreviews: MapPreview[] = [
  { name: "Dallas Cowboys", image: "/realm-previews/fans-cowboys.jpg" },
  { name: "Denver Broncos", image: "/realm-previews/fans-broncos.jpg" },
  { name: "Detroit Lions", image: "/realm-previews/fans-lions.jpg" },
  { name: "Green Bay Packers", image: "/realm-previews/fans-packers.jpg" },
];
export const futurePreviews = toPreviews(realms);

/** Curated strip for the hero — one standout map per realm */
const einstein = frontierMaps.find((map) => map.slug === "einstein")!;
const odyssey = frontierMaps.find((map) => map.slug === "odyssey")!;

export const heroMapStrip: MapPreview[] = [
  { name: bibleMaps[0].name, image: bibleMaps[0].image },
  { name: freedomMaps[2].name, image: freedomMaps[2].image },
  { name: einstein.name, image: einstein.image },
  { name: "Arizona Diamondbacks", image: "/realm-previews/hero-diamondbacks.jpg" },
  { name: realms[0].name, image: realms[0].image },
  { name: bibleMaps[6].name, image: bibleMaps[6].image },
  { name: odyssey.name, image: odyssey.image },
  { name: "Baltimore Orioles", image: "/realm-previews/hero-orioles.jpg" },
];
