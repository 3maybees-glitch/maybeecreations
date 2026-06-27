import type { CategoryKey } from "@/data/categories";

export interface StoryProductLink {
  label: string;
  url: string;
}

export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  category: CategoryKey;
  image: string;
  readingMinutes: number;
  paragraphs: string[];
  productLink?: StoryProductLink;
  categoryPath: string;
}

export const STORIES_INDEX_TITLE = "Stories";
export const STORIES_EYEBROW = "Storytime";
export const STORIES_TAGLINE = "The Story Behind the Map";

export const stories: Story[] = [
  {
    slug: "why-we-map-stories",
    title: "Why We Map Stories",
    subtitle: "A letter from the heart of Maybee Creations",
    excerpt:
      "Every map we make begins with a question: what if learning felt like an adventure worth remembering?",
    publishedAt: "2026-06-27",
    category: "faith",
    image: "https://pe56d.s3.amazonaws.com/o_1jp1pv8rpggmjvr1ohj1s3r14rk1c.png",
    readingMinutes: 4,
    categoryPath: "/",
    paragraphs: [
      "Somewhere between a textbook and a treasure hunt, there is a kind of learning that sticks. You remember it because you traveled through it — because a place had a name, a moment had weight, and a story became yours.",
      "That is why Maybee Creations exists. We build maps and guides for families, students, homeschoolers, and curious adults who want more than facts on a page. We want wonder on the table. We want a child to point at a coastline and say, \"That is where it happened.\" We want a parent to sit down on a Saturday morning with coffee, parchment, and a sense that history is not dry — it is alive.",
      "Our work spans four realms: Faith, Freedom, Fans, and the Future. Soul Explorer Bible maps walk the lands of Scripture. Liberty Explorer maps chart the birth of a republic and the conflicts that shaped the modern world. Legend Explorer Baseball Legend Lands turn ballpark loyalty into fantasy cartography. Tomorrow Explorer maps help beginners navigate the AI era with courage and clarity.",
      "This Stories section — our Storytime blog — is where we share the meaning behind the maps. Not just what each product includes, but why it matters. The history. The joy. The small, ordinary moments of using these tools around a kitchen table, in a classroom, or curled up on the couch before opening day.",
      "If you have ever finished a map and felt like you went somewhere real, you already understand what we are building. Welcome to the story behind the map.",
    ],
  },
  {
    slug: "james-madison-father-of-the-constitution",
    title: "James Madison and the Map of Self-Government",
    subtitle: "How a quiet founder became the architect of American liberty",
    excerpt:
      "Before America had a Constitution, it had a problem — and James Madison spent years thinking his way toward an answer.",
    publishedAt: "2026-06-20",
    category: "freedom",
    image: "https://pe56d.s3.amazonaws.com/o_1jr7fu7ldg6v1kec2rqd61o9s15.png",
    readingMinutes: 5,
    categoryPath: "/freedom",
    productLink: {
      label: "Get the James Madison Map & Guide",
      url: "https://payhip.com/b/5IvEx",
    },
    paragraphs: [
      "James Madison was not the loudest voice in the room. He did not tower over crowds or command a battlefield. What he possessed was something rarer: the patience to think carefully about how a free people should govern themselves — and the persistence to see that thinking become law.",
      "Our Liberty Explorer map of James Madison invites families to walk his world — from Montpelier in Virginia to the Philadelphia convention, from the Federalist debates to the Bill of Rights. It is designed not as a biography quiz, but as a journey. Each stop on the map is a place to pause, read, reflect, and discuss.",
      "Why Madison still matters: every argument Americans have about government — the size of it, the limits of it, the rights it must protect — runs through ideas Madison helped shape. When students trace his life visually, those ideas stop feeling abstract. Separation of powers is not just a phrase in a textbook. It is a choice made by men who had seen what happens when power goes unchecked.",
      "Families tell us they use the guidebook prompts at dinner. \"What would Madison think of this?\" becomes a conversation starter. Teachers use the map as a wall display and build a week of civics around it. Homeschool parents pair it with primary-source readings from the founding era.",
      "That is the joy we hope for — not memorization for its own sake, but a growing sense that liberty is a inheritance worth understanding. Madison's map is one chapter in that larger story.",
    ],
  },
  {
    slug: "san-francisco-giants-legend-land",
    title: "Orange and Black, Land and Legend",
    subtitle: "Inside the San Francisco Giants Baseball Legend Land",
    excerpt:
      "From Seals Stadium to the bay-side cathedral of Oracle Park, Giants baseball is a geography of memory.",
    publishedAt: "2026-06-15",
    category: "fans",
    image:
      "https://pe56d.s3.amazonaws.com/cover-images/c6d86f8a16a04bf5bf75358634d7d326_mockup_01_giants_bundle_hero.jpg",
    readingMinutes: 4,
    categoryPath: "/fans",
    productLink: {
      label: "Get the Giants Legend Land",
      url: "https://payhip.com/b/WO8D1",
    },
    paragraphs: [
      "Some teams are just franchises. The Giants are a lineage. New York roots. California reinvention. Candlestick wind. Barry Bonds at the plate. Madison Bumgarner on the mound in October. A fanbase that wears orange and black like a second skin.",
      "The San Francisco Giants Baseball Legend Land turns that lineage into a fantasy map — a printable world where ballpark lore, legendary players, and franchise milestones become places you can explore. It is part fan art, part family activity, part love letter to a club that has been playing professional baseball since the 1880s.",
      "We built Legend Lands for the fans who pass down team stories the way others pass down recipes. Dad pointing at a section of the map: \"That is where Mays patrolled center.\" A kid circling the bay: \"That is our stadium.\" A grandparent remembering Polo Grounds even though they never saw it — because the story was told well enough to feel real.",
      "Each Legend Land ships with a companion guidebook full of discovery prompts, trivia trails, and creative activities. Use it on road trip day. Use it during the All-Star break. Use it when you want the game on the TV and something hands-on on the coffee table.",
      "Baseball is memory made communal. This map is our way of helping your family keep those memories vivid — and pass them on.",
    ],
  },
  {
    slug: "america-250-discovery-map",
    title: "Two Hundred Fifty Years of American Story",
    subtitle: "Celebrating America 250 with a map worth unfolding",
    excerpt:
      "A nation's anniversary is more than a date on the calendar — it is an invitation to remember what we share.",
    publishedAt: "2026-06-10",
    category: "freedom",
    image: "https://pe56d.s3.amazonaws.com/o_1js3uj1lt1ujn1mfo32n1s9s1miv17.png",
    readingMinutes: 5,
    categoryPath: "/freedom",
    productLink: {
      label: "Get the America 250 Map & Guide",
      url: "https://payhip.com/b/gF6jh",
    },
    paragraphs: [
      "In 2026, the United States marks two hundred fifty years since the Declaration of Independence. Parades will march. Speeches will be given. Flags will fly from porches and storefronts. But the deepest celebration happens when families and classrooms take time to look back — really look — at the people, inventions, struggles, and triumphs that shaped a nation.",
      "Our Liberty Explorer United States History 250th Anniversary Discovery Map was made for that moment. It is a panoramic journey across American history: founding principles and frontier courage, industrial ingenuity and wartime sacrifice, civil rights and cultural achievement. The map is visual and bold; the guidebook turns each region into a conversation.",
      "We designed it for July Fourth gatherings and autumn civics units alike. Spread it across a table. Let kids find the places they have visited in real life. Connect a road trip to the historical stops on the parchment. Ask the question that matters most: \"What do we want the next chapter to look like?\"",
      "Anniversaries can feel ceremonial. We wanted this one to feel personal. Whether you are a homeschool parent planning a semester, a teacher refreshing a classroom display, or a grandparent who wants to leave grandchildren with more than a barbecue — this map meets you where you are.",
      "Two hundred fifty years is a long time. It is also a short one. The story is still being written. We are honored to help your family read the earlier chapters — and wonder about the ones ahead.",
    ],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getStoriesByCategory(category: CategoryKey): Story[] {
  return stories.filter((story) => story.category === category);
}

export const storiesSorted = [...stories].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);
