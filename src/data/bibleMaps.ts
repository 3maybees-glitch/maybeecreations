export interface BibleMap {
  name: string;
  category: string;
  books: string;
  tagline: string;
  image: string;
  url: string;
  price: string;
  /** Optional Soul Explorer flyover on the Maybee-Creations YouTube channel */
  youtubeUrl?: string;
}

export const bibleMaps: BibleMap[] = [
  {
    name: "Books of the Law",
    category: "Old Testament",
    books: "Genesis – Deuteronomy",
    tagline: "Trace the foundation of Scripture — creation, covenant, and the giving of the Law.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps1imb02cl1ne77pl8141cga1h.png",
    url: "https://www.etsy.com/listing/4512601800/soul-explorer-genesis-deuteronomy-world",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=PUkdYwxROfA",
  },
  {
    name: "Books of History",
    category: "Old Testament",
    books: "Joshua – Esther",
    tagline: "Walk through Israel's rise, fall, exile, and return across the historic chronicles.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps1qmd0i2j1rhu1u1mmvauk1j.png",
    url: "https://www.etsy.com/listing/4512636349/soul-explorer-joshua-esther-world-map",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=6R4pn8WM0Ec",
  },
  {
    name: "Books of Poetry",
    category: "Old Testament",
    books: "Job – Song of Solomon",
    tagline: "Wander the wisdom highlands of suffering, praise, proverbs, and love.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps20iqosemioq187n11ppk371j.png",
    url: "https://www.etsy.com/listing/4512643759/soul-explorers-guide-job-song-of-solomon",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=Lwif4hnvul4",
  },
  {
    name: "Major Prophets",
    category: "Old Testament",
    books: "Isaiah – Daniel",
    tagline: "Stand atop the watchtowers of prophecy where kingdoms rise and fall.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps28dvf1una1l7pmi93ob1v3k1j.png",
    url: "https://www.etsy.com/listing/4512641210/soul-explorer-isaiah-daniel-world-map",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=csEP-CqAcW8",
  },
  {
    name: "Minor Prophets",
    category: "Old Testament",
    books: "Hosea – Malachi",
    tagline: "Twelve smaller voices, one mighty call to repentance and hope.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps2r1ga15vt1miq1on41hhc1gd31j.png",
    url: "https://www.etsy.com/listing/4512643074/soul-explorer-hosea-malachi-world-map",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=s8u22yIxuSs",
  },
  {
    name: "The Gospels",
    category: "New Testament",
    books: "Matthew – John",
    tagline: "Four perspectives, one Savior — journey through the life of Jesus.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps53jlost7quqvvdsiu1q1r17.png",
    url: "https://www.etsy.com/listing/4513998436/soul-explorer-matthew-john-the-world-map",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=-ddQbEsVfxg",
  },
  {
    name: "Church History",
    category: "New Testament",
    books: "Acts",
    tagline: "Follow the Spirit-led birth of the Church from Jerusalem to Rome.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps5f6sh1arshlp1v9t14k1mnl17.png",
    url: "https://www.etsy.com/listing/4514003870/soul-explorer-acts-world-map-and",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=CWSUuHk9zgs",
  },
  {
    name: "Paul's Letters",
    category: "New Testament",
    books: "Romans – Philemon",
    tagline: "Map the apostle's missionary epistles and the doctrines that shaped the Church.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps5rkcs1fpo14ec10u6dkg1t1m17.png",
    url: "https://www.etsy.com/listing/4514005383/soul-explorer-romans-philemon-world-map",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=Lo75ICRnC4Y",
  },
  {
    name: "Church Letters",
    category: "New Testament",
    books: "Hebrews – Jude",
    tagline: "General epistles offering encouragement, warning, and persevering faith.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps672vrv1r12461ap3j41h9h17.png",
    url: "https://www.etsy.com/listing/4514006572/soul-explorer-hebrews-jude-world-map-and",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=TftkM0Y_Co0",
  },
  {
    name: "Prophecy",
    category: "New Testament",
    books: "Revelation",
    tagline: "Unveil the apocalyptic vision of thrones, beasts, and the New Jerusalem.",
    image: "https://pe56d.s3.amazonaws.com/o_1jps6gltfgda1rbrij41qgg1vd817.png",
    url: "https://www.etsy.com/listing/4514006946/soul-explorer-revelations-world-map-and",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=5hbWp0mYmm8",
  },
];
