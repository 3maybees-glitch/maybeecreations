/**
 * Farlands product catalog — empty until Shopify listings exist.
 * Do not invent SKUs; CTAs point at the Farlands collection URL.
 */
export interface FarlandsMap {
  name: string;
  tagline: string;
  image: string;
  url: string;
}

export const farlandsMaps: FarlandsMap[] = [];

export const FARLANDS_COLLECTION_URL =
  "https://shop.maybeecreations.com/collections/farlands";
