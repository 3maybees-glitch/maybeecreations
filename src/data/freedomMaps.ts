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
  },
  {
    name: "Thomas Jefferson",
    category: "Founding Era",
    subtitle: "The World of Thomas Jefferson",
    tagline:
      "Explore liberty, learning, and the early republic — from Monticello to the Declaration and beyond.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7kt71119pk9vtkug1s2ict515.png",
  },
  {
    name: "James Madison",
    category: "Founding Era",
    subtitle: "The World of James Madison",
    tagline:
      "Walk the story of the Constitution’s architect — public service, republican government, and civic principle.",
    image: madisonMap,
  },
  {
    name: "Alexander Hamilton",
    category: "Founding Era",
    subtitle: "The World of Alexander Hamilton",
    tagline:
      "Chart the rise of a founding visionary — finance, federalism, and the fight to shape a new nation.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7h9csl1o401l2b1a901dl41oi315.png",
  },
  {
    name: "Benjamin Franklin",
    category: "Founding Era",
    subtitle: "The World of Benjamin Franklin",
    tagline:
      "Follow the polymath patriot — invention, diplomacy, virtue, and the spirit of American ingenuity.",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7jcuru1gq21ki91p0c17gojff15.png",
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
];
