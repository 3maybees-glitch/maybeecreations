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
  {
    name: "World War I",
    category: "World History",
    subtitle: "Liberty Explorer World War I Discovery Map",
    tagline:
      "March from Sarajevo to Versailles — trenches, alliances, and the war that reshaped the modern world.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v7l8cvk41h2sktd1ptp1tbr1h.png",
    url: "https://payhip.com/b/1tmwd",
    price: "$7.77",
  },
  {
    name: "War of 1812",
    category: "American History",
    subtitle: "Liberty Explorer War of 1812 Discovery Map",
    tagline:
      "Sail from impressment disputes to Fort McHenry — a young republic defends its sovereignty once more.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v5dkfml21pvl1fq6l27gk61h.png",
    url: "https://payhip.com/b/LGDxy",
    price: "$7.77",
  },
  {
    name: "Korean War",
    category: "American History",
    subtitle: "Liberty Explorer Korean War Discovery Map",
    tagline:
      "Cross the 38th parallel — from Pusan to the Yalu and the armistice that divided a peninsula.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v0pdq6i61lrg1sr9qf21koc1h.png",
    url: "https://payhip.com/b/6Csro",
    price: "$7.77",
  },
  {
    name: "Cold War",
    category: "World History",
    subtitle: "Liberty Explorer Cold War Discovery Map",
    tagline:
      "Navigate the Iron Curtain era — containment, crises, and the decades-long struggle between superpowers.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3uoi7r1qe07frtid1j56u1o1g.png",
    url: "https://payhip.com/b/bIOul",
    price: "$7.77",
  },
  {
    name: "Gulf War",
    category: "American History",
    subtitle: "Liberty Explorer Gulf War Discovery Map",
    tagline:
      "Follow Operation Desert Storm — from invasion to coalition victory in the sands of Kuwait.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3uu4ov12u0b055n61a6213fb1h.png",
    url: "https://payhip.com/b/FatCv",
    price: "$7.77",
  },
  {
    name: "War on Terror",
    category: "American History",
    subtitle: "Liberty Explorer War on Terror Discovery Map",
    tagline:
      "Trace the long campaign after 9/11 — from Afghanistan and Iraq to the global fight against extremism.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3v37jc13itp7mj6r1jjg1kp91h.png",
    url: "https://payhip.com/b/xSJYo",
    price: "$7.77",
  },
  {
    name: "U.S. History 250th Anniversary",
    category: "American History",
    subtitle: "Liberty Explorer 250th Anniversary Discovery Map",
    tagline:
      "Celebrate America's semiquincentennial — two and a half centuries of founding principles and national story.",
    image: "https://pe56d.s3.amazonaws.com/o_1js3uj1lt1ujn1mfo32n1s9s1miv17.png",
    url: "https://payhip.com/b/gF6jh",
    price: "$7.77",
  },
];
