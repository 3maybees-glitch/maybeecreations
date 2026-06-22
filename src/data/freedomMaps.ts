import madisonMap from "@/assets/madison-map.png";

export interface FreedomMap {
  name: string;
  category: string;
  subtitle: string;
  tagline: string;
  image: string;
  /** Set when the map is live on Payhip */
  url?: string;
  price?: string;
}

export const freedomMaps: FreedomMap[] = [
  {
    name: "George Washington",
    category: "Founding Era",
    subtitle: "The World of George Washington",
    tagline:
      "Trace the life of the indispensable man — from Mount Vernon and Valley Forge to Yorktown and the presidency.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7fu7ldg6v1kec2rqd61o9s15.png",
    url: "https://payhip.com/b/1Qs9u",
    price: "$7.77",
  },
  {
    name: "Thomas Jefferson",
    category: "Founding Era",
    subtitle: "The World of Thomas Jefferson",
    tagline:
      "Explore liberty, learning, and the early republic — from Monticello to the Declaration and beyond.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7kt71119pk9vtkug1s2ict515.png",
    url: "https://payhip.com/b/s4zBU",
    price: "$7.77",
  },
  {
    name: "James Madison",
    category: "Founding Era",
    subtitle: "The World of James Madison",
    tagline:
      "Walk the story of the Constitution’s architect — public service, republican government, and civic principle.",
    image: madisonMap,
    url: "https://payhip.com/b/5IvEx",
    price: "$7.77",
  },
  {
    name: "Alexander Hamilton",
    category: "Founding Era",
    subtitle: "The World of Alexander Hamilton",
    tagline:
      "Chart the rise of a founding visionary — finance, federalism, and the fight to shape a new nation.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7h9csl1o401l2b1a901dl41oi315.png",
    url: "https://payhip.com/b/JGXBn",
    price: "$7.77",
  },
  {
    name: "Benjamin Franklin",
    category: "Founding Era",
    subtitle: "The World of Benjamin Franklin",
    tagline:
      "Follow the polymath patriot — invention, diplomacy, virtue, and the spirit of American ingenuity.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7jcuru1gq21ki91p0c17gojff15.png",
    url: "https://payhip.com/b/cgm8z",
    price: "$7.77",
  },
  {
    name: "Revolutionary War",
    category: "American History",
    subtitle: "Liberty Explorer Revolutionary War Map",
    tagline:
      "Follow the fight for independence from Lexington and Concord through Valley Forge, Yorktown, and the Treaty of Paris.",
    image:
      "https://pe56d.s3.amazonaws.com/cover-images/66563ad8d8424fe985f0076698b8c56b_01_revolutionary_war_desk_mockup_watermarked.jpg",
    url: "https://payhip.com/b/7LFgy",
    price: "$7.77",
  },
  {
    name: "Civil War",
    category: "American History",
    subtitle: "Liberty Explorer Civil War Discovery Map",
    tagline:
      "Follow the River of Time from Fort Sumter to Appomattox — secession, emancipation, turning points, and the fight to preserve the Union.",
    image:
      "https://pe56d.s3.amazonaws.com/cover-images/b042b65a77cb44e5848f97c328a91f0b_01_civil_war_desk_mockup_watermarked.jpg",
    url: "https://payhip.com/b/nseRl",
    price: "$7.77",
  },
  {
    name: "World War II — European Theater",
    category: "World History",
    subtitle: "Liberty Explorer WWII European Theater Map",
    tagline:
      "Trace the sweep of the war in Europe — from the Battle of Britain and North Africa through D-Day, the Rhine, Berlin, and V-E Day.",
    image:
      "https://pe56d.s3.amazonaws.com/cover-images/23887df344ab42e683a06db5cbdcacfd_01_wwii_europe_desk_mockup_watermarked.jpg",
    url: "https://payhip.com/b/4xbse",
    price: "$7.77",
  },
  {
    name: "World War II — Pacific Theater",
    category: "World History",
    subtitle: "Liberty Explorer WWII Pacific Theater Map",
    tagline:
      "Cross the Pacific from Pearl Harbor through Midway, Guadalcanal, Leyte Gulf, Iwo Jima, Okinawa, and Japan’s surrender.",
    image:
      "https://pe56d.s3.amazonaws.com/cover-images/5ed6b8b660a549f6800c3163b677a86f_01_wwii_pacific_desk_mockup_watermarked.jpg",
    url: "https://payhip.com/b/Z3yho",
    price: "$7.77",
  },
];
