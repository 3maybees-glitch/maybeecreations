import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/maps/frontier");
mkdirSync(outDir, { recursive: true });

const palettes = {
  Science: { from: "#1b3a4b", to: "#0f1c18", accent: "#7ec8c8" },
  Literature: { from: "#4a1f2a", to: "#1a1210", accent: "#e0b080" },
  Music: { from: "#3a2458", to: "#140e1c", accent: "#d4b4f0" },
  Faith: { from: "#6b4a12", to: "#2a1c0c", accent: "#e6c35c" },
  Freedom: { from: "#6b1c1c", to: "#1c1010", accent: "#e07a7a" },
};

const maps = [
  ["einstein", "Albert Einstein", "Science"],
  ["tesla", "Nikola Tesla", "Science"],
  ["apollo", "Apollo", "Science"],
  ["newton", "Isaac Newton", "Science"],
  ["galileo", "Galileo Galilei", "Science"],
  ["copernican", "Copernican Revolution", "Science"],
  ["curie", "Marie Curie", "Science"],
  ["maxwell", "James Clerk Maxwell", "Science"],
  ["leonardo", "Leonardo da Vinci", "Science"],
  ["edison", "Thomas Edison", "Science"],
  ["pasteur", "Louis Pasteur", "Science"],
  ["wright", "Wright Brothers", "Science"],
  ["bell", "Alexander Graham Bell", "Science"],
  ["watt", "James Watt", "Science"],
  ["lovelace", "Ada Lovelace", "Science"],
  ["gutenberg", "Johannes Gutenberg", "Science"],
  ["aristotle", "Aristotle", "Science"],
  ["calculus", "Calculus", "Science"],
  ["algebra", "Algebra", "Science"],
  ["geometry", "Geometry", "Science"],
  ["arithmetic", "Arithmetic", "Science"],
  ["number-theory", "Number Theory", "Science"],
  ["probability", "Probability", "Science"],
  ["statistics", "Statistics", "Science"],
  ["newtons-laws", "Newton's Laws", "Science"],
  ["cell", "The Cell", "Science"],
  ["genetics", "Genetics", "Science"],
  ["germ-theory", "Germ Theory", "Science"],
  ["penicillin", "Penicillin", "Science"],
  ["lisp", "Lisp", "Science"],
  ["unix", "UNIX", "Science"],
  ["apollo-agc", "Apollo Guidance Computer", "Science"],
  ["spacewar", "Spacewar!", "Science"],
  ["spice", "SPICE", "Science"],
  ["shakespeare", "William Shakespeare", "Literature"],
  ["odyssey", "The Odyssey", "Literature"],
  ["homer", "Homer", "Literature"],
  ["dante", "Dante Alighieri", "Literature"],
  ["lotr", "The Lord of the Rings", "Literature"],
  ["moby-dick", "Moby-Dick", "Literature"],
  ["tolstoy", "Leo Tolstoy", "Literature"],
  ["dickens", "Charles Dickens", "Literature"],
  ["don-quixote", "Don Quixote", "Literature"],
  ["1984", "1984", "Literature"],
  ["chaucer", "Geoffrey Chaucer", "Literature"],
  ["joyce", "James Joyce", "Literature"],
  ["faulkner", "William Faulkner", "Literature"],
  ["bach", "Johann Sebastian Bach", "Music"],
  ["mozart", "Wolfgang Amadeus Mozart", "Music"],
  ["beethoven", "Ludwig van Beethoven", "Music"],
  ["schubert", "Franz Schubert", "Music"],
  ["debussy", "Claude Debussy", "Music"],
  ["stravinsky", "Igor Stravinsky", "Music"],
  ["mahler", "Gustav Mahler", "Music"],
  ["livingstone", "David Livingstone", "Faith"],
  ["elliot", "Jim Elliot", "Faith"],
  ["carey", "William Carey", "Faith"],
  ["taylor", "Hudson Taylor", "Faith"],
  ["judson", "Adoniram Judson", "Faith"],
  ["carmichael", "Amy Carmichael", "Faith"],
  ["corrie", "Corrie ten Boom", "Faith"],
  ["adams", "John & John Quincy Adams", "Freedom"],
  ["samuel-adams", "Samuel Adams", "Freedom"],
  ["revere", "Paul Revere", "Freedom"],
  ["john-jay", "John Jay", "Freedom"],
  ["hancock", "John Hancock", "Freedom"],
  ["henry", "Patrick Henry", "Freedom"],
  ["paine", "Thomas Paine", "Freedom"],
];

function escapeXml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function nameLines(name) {
  const words = name.split(" ");
  if (name.length <= 18) return [name];
  if (words.length === 1) return [name];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

for (const [slug, name, series] of maps) {
  const { from, to, accent } = palettes[series];
  const lines = nameLines(name);
  const y1 = lines.length === 1 ? 420 : 400;
  const line2 = lines[1]
    ? `<text x="400" y="${y1 + 42}" text-anchor="middle" fill="#fff8ea" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="700">${escapeXml(lines[1])}</text>`
    : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${escapeXml(name)} Frontier Explorer">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 40 L40 0" stroke="${accent}" stroke-opacity="0.12" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <rect width="800" height="600" fill="url(#p)"/>
  <rect x="28" y="28" width="744" height="544" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="2"/>
  <rect x="40" y="40" width="720" height="520" fill="none" stroke="#f4e6c8" stroke-opacity="0.25" stroke-width="1"/>
  <circle cx="400" cy="210" r="86" fill="none" stroke="${accent}" stroke-width="3" opacity="0.85"/>
  <circle cx="400" cy="210" r="54" fill="none" stroke="#f4e6c8" stroke-width="1.5" opacity="0.5"/>
  <path d="M400 124 L412 198 L400 186 L388 198 Z" fill="${accent}"/>
  <path d="M400 296 L388 222 L400 234 L412 222 Z" fill="#f4e6c8" opacity="0.8"/>
  <text x="400" y="360" text-anchor="middle" fill="${accent}" font-family="Georgia, 'Times New Roman', serif" font-size="16" letter-spacing="5" font-weight="700">FRONTIER EXPLORER</text>
  <text x="400" y="${y1}" text-anchor="middle" fill="#fff8ea" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="700">${escapeXml(lines[0])}</text>
  ${line2}
  <text x="400" y="530" text-anchor="middle" fill="${accent}" font-family="Georgia, 'Times New Roman', serif" font-size="16" letter-spacing="3">MAYBEE CREATIONS · $7.77 ON ETSY</text>
</svg>
`;
  writeFileSync(join(outDir, `${slug}.svg`), svg);
}

console.log(`Wrote ${maps.length} frontier cards to ${outDir}`);
