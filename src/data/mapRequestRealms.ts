import type { CategoryKey } from "@/data/categories";

export interface MapRequestRealmOption {
  value: CategoryKey;
  label: string;
  explorer: string;
  examples: string;
}

export const mapRequestRealms: MapRequestRealmOption[] = [
  {
    value: "faith",
    label: "Faith",
    explorer: "Soul Explorer",
    examples: "A Minor Prophets companion map, a Psalms poetry trail, a Church Fathers era map",
  },
  {
    value: "freedom",
    label: "Freedom",
    explorer: "Liberty Explorer",
    examples: "A founding mother map, a state constitution series, a Cold War liberty map",
  },
  {
    value: "fans",
    label: "Fans",
    explorer: "Legend Explorer",
    examples: "Your NFL team's Legend Land, a rivalry map, a college program or championship series",
  },
  {
    value: "future",
    label: "Future",
    explorer: "Tomorrow Explorer",
    examples: "A new AI tool realm, a coding adventure pack, a frontier-tech learning map",
  },
];

export const mapRequestRealmLabel = (realm: CategoryKey) =>
  mapRequestRealms.find((option) => option.value === realm)?.label ?? realm;
