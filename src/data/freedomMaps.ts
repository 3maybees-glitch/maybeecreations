import madisonMap from "@/assets/madison-map.png";

export interface FreedomMap {
  name: string;
  category: string;
  subtitle: string;
  tagline: string;
  /** Card image. Desk cover when the kit also has a flat study map. */
  image: string;
  /** Flat printable study map, alongside the desk cover. */
  mapImage?: string;
  imageAlt?: string;
  /** Checkout URL on Shopify. Matches mapUrl and bundleUrl when sold as one product. */
  url?: string;
  /** Study map listing. May match bundleUrl when the map and guide are one product. */
  mapUrl?: string;
  /** Companion guide or bundle. May match mapUrl when sold together. */
  bundleUrl?: string;
  price?: string;
  /** Separate study-map price, used when mapUrl and bundleUrl differ. */
  mapPrice?: string;
  /** Separate guide or bundle price, used when mapUrl and bundleUrl differ. */
  bundlePrice?: string;
  collection?: "Liberty Explorer" | "Freedom Explorer";
}

/** Shop link for a kit: the bundle when the map and guide are sold together. */
export function freedomShopUrl(map: FreedomMap) {
  return map.bundleUrl ?? map.mapUrl ?? map.url;
}

export const freedomMaps: FreedomMap[] = [
  {
    name: "George Washington",
    category: "Founding Era",
    subtitle: "The World of George Washington",
    tagline:
      "Trace the life of the indispensable man — from Mount Vernon and Valley Forge to Yorktown and the presidency.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7fu7ldg6v1kec2rqd61o9s15.png",
    url: "https://shop.maybeecreations.com/products/george-washington-history-study-map-guidebook",
    price: "$7.77",
  },
  {
    name: "Thomas Jefferson",
    category: "Founding Era",
    subtitle: "The World of Thomas Jefferson",
    tagline:
      "Explore liberty, learning, and the early republic — from Monticello to the Declaration and beyond.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7kt71119pk9vtkug1s2ict515.png",
    url: "https://shop.maybeecreations.com/products/thomas-jefferson-history-study-map-guidebook",
    price: "$7.77",
  },
  {
    name: "James Madison",
    category: "Founding Era",
    subtitle: "The World of James Madison",
    tagline:
      "Walk the story of the Constitution’s architect — public service, republican government, and civic principle.",
    image: madisonMap,
    url: "https://shop.maybeecreations.com/products/james-madison-history-study-map-guidebook",
    price: "$7.77",
  },
  {
    name: "Alexander Hamilton",
    category: "Founding Era",
    subtitle: "The World of Alexander Hamilton",
    tagline:
      "Chart the rise of a founding visionary — finance, federalism, and the fight to shape a new nation.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7h9csl1o401l2b1a901dl41oi315.png",
    url: "https://shop.maybeecreations.com/products/alexander-hamilton-history-study-map-guidebook",
    price: "$7.77",
  },
  {
    name: "Benjamin Franklin",
    category: "Founding Era",
    subtitle: "The World of Benjamin Franklin",
    tagline:
      "Follow the polymath patriot — invention, diplomacy, virtue, and the spirit of American ingenuity.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7jcuru1gq21ki91p0c17gojff15.png",
    url: "https://shop.maybeecreations.com/products/benjamin-franklin-history-study-map-guidebook",
    price: "$7.77",
  },
  {
    name: "Revolutionary War",
    category: "American History",
    subtitle: "Liberty Explorer Revolutionary War Map",
    tagline:
      "Follow the fight for independence from Lexington and Concord through Valley Forge, Yorktown, and the Treaty of Paris.",
    image: "/maps/freedom/revolutionary-war-desk.jpg",
    url: "https://shop.maybeecreations.com/products/revolutionary-war-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478225",
    price: "$7.77",
  },
  {
    name: "Civil War",
    category: "American History",
    subtitle: "Liberty Explorer Civil War Discovery Map",
    tagline:
      "Follow the River of Time from Fort Sumter to Appomattox — secession, emancipation, turning points, and the fight to preserve the Union.",
    image: "/maps/freedom/civil-war-desk.jpg",
    url: "https://shop.maybeecreations.com/products/american-civil-war-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478269",
    price: "$7.77",
  },
  {
    name: "World War II — European Theater",
    category: "World History",
    subtitle: "Liberty Explorer WWII European Theater Map",
    tagline:
      "Trace the sweep of the war in Europe — from the Battle of Britain and North Africa through D-Day, the Rhine, Berlin, and V-E Day.",
    image: "/maps/freedom/wwii-europe-desk.jpg",
    url: "https://shop.maybeecreations.com/products/world-war-ii-europe-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478050",
    price: "$7.77",
  },
  {
    name: "World War II — Pacific Theater",
    category: "World History",
    subtitle: "Liberty Explorer WWII Pacific Theater Map",
    tagline:
      "Cross the Pacific from Pearl Harbor through Midway, Guadalcanal, Leyte Gulf, Iwo Jima, Okinawa, and Japan’s surrender.",
    image: "/maps/freedom/wwii-pacific-desk.jpg",
    url: "https://shop.maybeecreations.com/products/world-war-ii-pacific-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478262",
    price: "$7.77",
  },
  {
    name: "World War I",
    category: "World History",
    subtitle: "Liberty Explorer World War I Discovery Map",
    tagline:
      "Journey through the Great War — trenches, alliances, breakthroughs, and the events that reshaped the twentieth century.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v7l8cvk41h2sktd1ptp1tbr1h.png",
    url: "https://shop.maybeecreations.com/products/world-war-i-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478270",
    price: "$7.77",
  },
  {
    name: "War of 1812",
    category: "American History",
    subtitle: "Liberty Explorer War of 1812 Discovery Map",
    tagline:
      "Explore America’s second war for independence — from impressment and the burning of Washington to Fort McHenry and the Treaty of Ghent.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v5dkfml21pvl1fq6l27gk61h.png",
    url: "https://shop.maybeecreations.com/products/war-of-1812-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478264",
    price: "$7.77",
  },
  {
    name: "Cold War",
    category: "World History",
    subtitle: "Liberty Explorer Cold War Discovery Map",
    tagline:
      "Trace the decades-long struggle between freedom and communism — from the Iron Curtain and Berlin to the Space Race and the fall of the Soviet Union.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3uoi7r1qe07frtid1j56u1o1g.png",
    url: "https://shop.maybeecreations.com/products/cold-war-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478268",
    price: "$7.77",
  },
  {
    name: "Korean War",
    category: "World History",
    subtitle: "Liberty Explorer Korean War Discovery Map",
    tagline:
      "Follow the Forgotten War from the 38th parallel through Inchon, Chosin, and the armistice that still divides a peninsula today.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v0pdq6i61lrg1sr9qf21koc1h.png",
    url: "https://shop.maybeecreations.com/products/korean-war-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478266",
    price: "$7.77",
  },
  {
    name: "Gulf War",
    category: "World History",
    subtitle: "Liberty Explorer Gulf War Discovery Map",
    tagline:
      "Relive Operation Desert Storm — coalition buildup, air campaign, the hundred-hour ground war, and Kuwait’s liberation.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3uu4ov12u0b055n61a6213fb1h.png",
    url: "https://shop.maybeecreations.com/products/gulf-war-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478272",
    price: "$7.77",
  },
  {
    name: "War on Terror",
    category: "World History",
    subtitle: "Liberty Explorer War on Terror Discovery Map",
    tagline:
      "Walk the defining conflict of our era — from September 11 through Afghanistan, Iraq, and the long fight against global terrorism.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v37jc13itp7mj6r1jjg1kp91h.png",
    url: "https://shop.maybeecreations.com/products/war-on-terror-history-map-guidebook-military-classroom-art-liberty-explorer-printable-435478267",
    price: "$7.77",
  },
  {
    name: "America 250",
    category: "American History",
    subtitle: "Liberty Explorer U.S. History 250th Anniversary Map",
    tagline:
      "Celebrate 250 years of American history — the people, inventions, victories, and milestones that shaped a nation.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3uj1lt1ujn1mfo32n1s9s1miv17.png",
    url: "https://shop.maybeecreations.com/products/america-250-history-map-guidebook-patriotic-classroom-art-liberty-explorer-printable-435478271",
    price: "$7.77",
  },
  {
    name: "United States Coast Guard",
    category: "Military History",
    collection: "Freedom Explorer",
    subtitle: "Coast Guard Printable Study Map",
    tagline:
      "Trace the Coast Guard from New York Harbor and the Bering Sea to rescue stations, Pearl Harbor, and Arctic patrols.",
    image: "/maps/freedom/coast-guard-desk.jpg",
    mapImage: "/maps/freedom/coast-guard-map.jpg",
    imageAlt:
      "United States Coast Guard Freedom Explorer printable study map and companion guide on a desk",
    url: "https://shop.maybeecreations.com/products/united-states-coast-guard-printable-study-map-companion-guide-freedom-explorer",
    mapUrl:
      "https://shop.maybeecreations.com/products/united-states-coast-guard-printable-study-map-companion-guide-freedom-explorer",
    bundleUrl:
      "https://shop.maybeecreations.com/products/united-states-coast-guard-printable-study-map-companion-guide-freedom-explorer",
    price: "$7.77",
  },
  {
    name: "United States Army",
    category: "Military History",
    collection: "Freedom Explorer",
    subtitle: "Army Printable Study Map",
    tagline:
      "Follow the Army from Valley Forge and West Point through Meuse-Argonne, Normandy, and the posts that trained a continental force.",
    image: "/maps/freedom/army-desk.jpg",
    mapImage: "/maps/freedom/army-map.jpg",
    imageAlt: "United States Army Freedom Explorer printable study map and companion guide on a desk",
    url: "https://shop.maybeecreations.com/products/united-states-army-printable-study-map-companion-guide-freedom-explorer",
    mapUrl:
      "https://shop.maybeecreations.com/products/united-states-army-printable-study-map-companion-guide-freedom-explorer",
    bundleUrl:
      "https://shop.maybeecreations.com/products/united-states-army-printable-study-map-companion-guide-freedom-explorer",
    price: "$7.77",
  },
  {
    name: "United States Air Force",
    category: "Military History",
    collection: "Freedom Explorer",
    subtitle: "Air Force Printable Study Map",
    tagline:
      "Chart American air power from Kitty Hawk and Wright Field through the Doolittle Raid, the Air Force Academy, and the jet age.",
    image: "/maps/freedom/air-force-desk.jpg",
    mapImage: "/maps/freedom/air-force-map.jpg",
    imageAlt:
      "United States Air Force Freedom Explorer printable study map and companion guide on a desk",
    url: "https://shop.maybeecreations.com/products/united-states-air-force-printable-study-map-companion-guide-freedom-explorer",
    mapUrl:
      "https://shop.maybeecreations.com/products/united-states-air-force-printable-study-map-companion-guide-freedom-explorer",
    bundleUrl:
      "https://shop.maybeecreations.com/products/united-states-air-force-printable-study-map-companion-guide-freedom-explorer",
    price: "$7.77",
  },
  {
    name: "United States Marines",
    category: "Military History",
    collection: "Freedom Explorer",
    subtitle: "Marines Printable Study Map",
    tagline:
      "Walk the Marines from Tun Tavern and the shores of Tripoli through Belleau Wood, Tarawa, and Iwo Jima.",
    image: "/maps/freedom/marines-desk.jpg",
    mapImage: "/maps/freedom/marines-map.jpg",
    imageAlt:
      "United States Marines Freedom Explorer printable study map and companion guide on a desk",
    url: "https://shop.maybeecreations.com/products/united-states-marines-printable-study-map-companion-guide-freedom-explorer",
    mapUrl:
      "https://shop.maybeecreations.com/products/united-states-marines-printable-study-map-companion-guide-freedom-explorer",
    bundleUrl:
      "https://shop.maybeecreations.com/products/united-states-marines-printable-study-map-companion-guide-freedom-explorer",
    price: "$7.77",
  },
  {
    name: "U.S. Special Forces",
    category: "Military History",
    collection: "Freedom Explorer",
    subtitle: "Special Forces Printable Study Map",
    tagline:
      "Follow special operations from the OSS and the First Special Service Force through Pointe du Hoc, Coronado, and USSOCOM.",
    image: "/maps/freedom/special-forces-desk.jpg",
    mapImage: "/maps/freedom/special-forces-map.jpg",
    imageAlt: "U.S. Special Forces Freedom Explorer printable study map and companion guide on a desk",
    url: "https://shop.maybeecreations.com/products/u-s-special-forces-printable-study-map-companion-guide-freedom-explorer",
    mapUrl:
      "https://shop.maybeecreations.com/products/u-s-special-forces-printable-study-map-companion-guide-freedom-explorer",
    bundleUrl:
      "https://shop.maybeecreations.com/products/u-s-special-forces-printable-study-map-companion-guide-freedom-explorer",
    price: "$7.77",
  },
  {
    name: "United States Navy",
    category: "Military History",
    collection: "Freedom Explorer",
    subtitle: "Navy Printable Study Map",
    tagline:
      "Sail the Navy from the Philadelphia waterfront and Lake Erie to Hampton Roads, Pearl Harbor, Midway, and Leyte Gulf.",
    image: "/maps/freedom/navy-desk.jpg",
    mapImage: "/maps/freedom/navy-map.jpg",
    imageAlt: "United States Navy Freedom Explorer printable study map and companion guide on a desk",
    url: "https://shop.maybeecreations.com/products/united-states-navy-printable-study-map-companion-guide-freedom-explorer",
    mapUrl:
      "https://shop.maybeecreations.com/products/united-states-navy-printable-study-map-companion-guide-freedom-explorer",
    bundleUrl:
      "https://shop.maybeecreations.com/products/united-states-navy-printable-study-map-companion-guide-freedom-explorer",
    price: "$7.77",
  },
  {
    name: "United States Space Force",
    category: "Military History",
    collection: "Freedom Explorer",
    subtitle: "Space Force Printable Study Map",
    tagline:
      "Explore guardians of the high frontier — from Cape Canaveral and Vandenberg to Colorado Springs, launch ranges, and the story of American military space operations.",
    image: "/maps/freedom/space-force-desk.jpg",
    mapImage: "/maps/freedom/space-force-map.jpg",
    imageAlt:
      "United States Space Force Freedom Explorer printable study map and companion guide on a desk",
    url: "https://shop.maybeecreations.com/products/united-states-space-force-printable-study-map-companion-guide-freedom-explorer",
    mapUrl:
      "https://shop.maybeecreations.com/products/united-states-space-force-printable-study-map-companion-guide-freedom-explorer",
    bundleUrl:
      "https://shop.maybeecreations.com/products/united-states-space-force-printable-study-map-companion-guide-freedom-explorer",
    price: "$7.77",
  },
];

export function freedomCatalogCount() {
  const explorerKits = freedomMaps.filter((map) => map.collection === "Freedom Explorer").length;
  const libertyMaps = freedomMaps.length - explorerKits;
  return `${libertyMaps} Liberty Explorer maps & ${explorerKits} Freedom Explorer study maps`;
}
