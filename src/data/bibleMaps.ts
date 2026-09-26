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
    image: "/maps/faith/books-of-the-law.jpg",
    url: "https://shop.maybeecreations.com/products/books-of-the-law-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478295",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=PUkdYwxROfA",
  },
  {
    name: "Books of History",
    category: "Old Testament",
    books: "Joshua – Esther",
    tagline: "Walk through Israel's rise, fall, exile, and return across the historic chronicles.",
    image: "/maps/faith/books-of-history.jpg",
    url: "https://shop.maybeecreations.com/products/joshua-to-esther-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478294",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=6R4pn8WM0Ec",
  },
  {
    name: "Books of Poetry",
    category: "Old Testament",
    books: "Job – Song of Solomon",
    tagline: "Wander the wisdom highlands of suffering, praise, proverbs, and love.",
    image: "/maps/faith/books-of-poetry.jpg",
    url: "https://shop.maybeecreations.com/products/wisdom-and-poetry-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478287",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=Lwif4hnvul4",
  },
  {
    name: "Major Prophets",
    category: "Old Testament",
    books: "Isaiah – Daniel",
    tagline: "Stand atop the watchtowers of prophecy where kingdoms rise and fall.",
    image: "/maps/faith/major-prophets.jpg",
    url: "https://shop.maybeecreations.com/products/isaiah-to-daniel-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478292",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=csEP-CqAcW8",
  },
  {
    name: "Minor Prophets",
    category: "Old Testament",
    books: "Hosea – Malachi",
    tagline: "Twelve smaller voices, one mighty call to repentance and hope.",
    image: "/maps/faith/minor-prophets.jpg",
    url: "https://shop.maybeecreations.com/products/hosea-to-malachi-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478288",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=s8u22yIxuSs",
  },
  {
    name: "The Gospels",
    category: "New Testament",
    books: "Matthew – John",
    tagline: "Four perspectives, one Savior — journey through the life of Jesus.",
    image: "/maps/faith/gospels.png",
    url: "https://shop.maybeecreations.com/products/matthew-to-john-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478174",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=-ddQbEsVfxg",
  },
  {
    name: "Church History",
    category: "New Testament",
    books: "Acts",
    tagline: "Follow the Spirit-led birth of the Church from Jerusalem to Rome.",
    image: "/maps/faith/church-history.jpg",
    url: "https://shop.maybeecreations.com/products/book-of-acts-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478289",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=CWSUuHk9zgs",
  },
  {
    name: "Paul's Letters",
    category: "New Testament",
    books: "Romans – Philemon",
    tagline: "Map the apostle's missionary epistles and the doctrines that shaped the Church.",
    image: "/maps/faith/pauls-letters.jpg",
    url: "https://shop.maybeecreations.com/products/romans-to-philemon-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478290",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=Lo75ICRnC4Y",
  },
  {
    name: "Church Letters",
    category: "New Testament",
    books: "Hebrews – Jude",
    tagline: "General epistles offering encouragement, warning, and persevering faith.",
    image: "/maps/faith/church-letters.jpg",
    url: "https://shop.maybeecreations.com/products/hebrews-to-jude-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478291",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=TftkM0Y_Co0",
  },
  {
    name: "Prophecy",
    category: "New Testament",
    books: "Revelation",
    tagline: "Unveil the apocalyptic vision of thrones, beasts, and the New Jerusalem.",
    image: "/maps/faith/prophecy.jpg",
    url: "https://shop.maybeecreations.com/products/book-of-revelation-bible-map-guidebook-christian-homeschool-art-soul-explorer-printable-435478285",
    price: "$7.77",
    youtubeUrl: "https://www.youtube.com/watch?v=5hbWp0mYmm8",
  },
];
