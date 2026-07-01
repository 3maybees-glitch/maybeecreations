/**
 * Fetches all products from the Payhip storefront and writes a JSON catalog.
 * Run: npx tsx scripts/pull-payhip-products.ts
 */

const STORE_URL = "https://payhip.com/MaybeeCreations/collection/all";

export interface PayhipProduct {
  key: string;
  title: string;
  url: string;
  image: string;
  price: string;
}

function decodeHtml(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function parseProducts(html: string): PayhipProduct[] {
  const products: PayhipProduct[] = [];
  const cards = html.split('class="card-wrapper product-card-wrapper');

  for (const card of cards.slice(1)) {
    const keyMatch = card.match(/data-product-key="([^"]+)"/);
    if (!keyMatch) continue;
    const key = keyMatch[1];

    const titleMatch = card.match(
      /<h3 class="card__heading[\s\S]*?>\s*<a[^>]*>\s*([^<]+?)\s*<\/a>/,
    );
    const imageMatch = card.match(
      /src="(https:\/\/payhip\.com\/cdn-cgi\/image[^"]+)"/,
    );
    const priceMatch = card.match(/\$([\d.]+)/);

    if (!titleMatch || !imageMatch || !priceMatch) continue;

    products.push({
      key,
      title: decodeHtml(titleMatch[1]),
      url: `https://payhip.com/b/${key}`,
      image: imageMatch[1],
      price: `$${priceMatch[1]}`,
    });
  }

  return products;
}

async function discoverPages(firstHtml: string): Promise<number[]> {
  const pages = new Set<number>([1]);
  let frontier = [1];
  const seen = new Set<number>([1]);

  while (frontier.length > 0) {
    const nextFrontier: number[] = [];
    for (const page of frontier) {
      const html = page === 1 ? firstHtml : await fetchPage(page);
      for (const match of html.matchAll(/collection\/all\?&amp;page=(\d+)/g)) {
        const pageNum = Number(match[1]);
        if (!seen.has(pageNum)) {
          seen.add(pageNum);
          pages.add(pageNum);
          nextFrontier.push(pageNum);
        }
      }
    }
    frontier = nextFrontier;
  }

  return [...pages].sort((a, b) => a - b);
}

async function fetchPage(page: number): Promise<string> {
  const url = page === 1 ? STORE_URL : `${STORE_URL}?&page=${page}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "MaybeeCreations-sync/1.0" },
  });
  if (!res.ok) throw new Error(`Failed to fetch page ${page}: ${res.status}`);
  return res.text();
}

async function main() {
  const firstHtml = await fetchPage(1);
  const pageNumbers = await discoverPages(firstHtml);

  const byKey = new Map<string, PayhipProduct>();
  for (const product of parseProducts(firstHtml)) {
    byKey.set(product.key, product);
  }

  for (const page of pageNumbers) {
    if (page === 1) continue;
    const html = await fetchPage(page);
    for (const product of parseProducts(html)) {
      byKey.set(product.key, product);
    }
  }

  const products = [...byKey.values()].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const outDir = path.join(process.cwd(), "src", "data");
  await fs.mkdir(outDir, { recursive: true });
  const outPath = path.join(outDir, "payhip-catalog.json");
  await fs.writeFile(outPath, JSON.stringify(products, null, 2) + "\n", "utf8");

  console.log(`Fetched ${products.length} products across ${pageNumbers.length} page(s)`);
  console.log(`Wrote ${outPath}`);

  const categories = {
    baseball: products.filter((p) => /Baseball Legend Land/i.test(p.title)),
    collegeFootball: products.filter((p) => /College Football/i.test(p.title)),
    tennis: products.filter((p) => /Tennis/i.test(p.title)),
    bible: products.filter((p) => /Bible|Scripture|Soul Explorer/i.test(p.title)),
    freedom: products.filter((p) => /Liberty Explorer|Founding|Revolutionary|Civil War|WWII/i.test(p.title)),
    ai: products.filter((p) => /Starrealm|Realm of|Tomorrow Explorer|Adventure Pack/i.test(p.title)),
  };

  for (const [name, list] of Object.entries(categories)) {
    console.log(`  ${name}: ${list.length}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
