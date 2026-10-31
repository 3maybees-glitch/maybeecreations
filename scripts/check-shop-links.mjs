#!/usr/bin/env node
/**
 * Confirm every shop.maybeecreations.com URL in the site returns HTTP 200
 * with no redirect. Scans source, public files, and dist when present.
 *
 * Usage: node scripts/check-shop-links.mjs
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SCAN_DIRS = ["src", "public", "dist"];
const SCAN_FILES = ["index.html", "vercel.json"];
const SKIP_DIRS = new Set(["node_modules", ".git"]);
const TEXT_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".html",
  ".txt",
  ".xml",
  ".json",
  ".css",
  ".md",
  ".svg",
]);

const URL_RE = /https:\/\/shop\.maybeecreations\.com[^\s"'`<>)\\]*/g;

async function walk(dir, files) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, files);
    } else if (TEXT_EXT.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
}

async function collectFiles() {
  const files = [];
  for (const dir of SCAN_DIRS) {
    await walk(path.join(ROOT, dir), files);
  }
  for (const file of SCAN_FILES) {
    const full = path.join(ROOT, file);
    try {
      await stat(full);
      files.push(full);
    } catch {
      // optional
    }
  }
  return files;
}

function extractUrls(text) {
  const found = new Set();
  for (const match of text.matchAll(URL_RE)) {
    found.add(match[0].replace(/[.,;]+$/, ""));
  }
  return found;
}

async function request(url, method) {
  const response = await fetch(url, {
    method,
    redirect: "manual",
    headers: { "user-agent": "Mozilla/5.0 (compatible; maybee-shop-link-check)" },
  });
  return {
    status: response.status,
    location: response.headers.get("location"),
  };
}

async function check(url) {
  let result = await request(url, "HEAD");
  if (result.status === 405 || result.status === 501) {
    result = await request(url, "GET");
  }
  // Shopify/Cloudflare answers 429/503 when a burst of checks lands at once.
  for (let attempt = 0; attempt < 4 && (result.status === 429 || result.status === 503); attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)));
    result = await request(url, "HEAD");
  }
  return result;
}

const files = await collectFiles();
const urls = new Set();
for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const url of extractUrls(text)) urls.add(url);
}

const sorted = [...urls].sort();
console.log(`Checking ${sorted.length} shop.maybeecreations.com URLs`);

const failures = [];
let ok = 0;
const concurrency = 4;
for (let i = 0; i < sorted.length; i += concurrency) {
  const batch = sorted.slice(i, i + concurrency);
  const results = await Promise.all(
    batch.map(async (url) => {
      try {
        const result = await check(url);
        return { url, ...result, error: null };
      } catch (error) {
        return { url, status: 0, location: null, error: String(error) };
      }
    }),
  );
  for (const result of results) {
    const redirected = result.status >= 300 && result.status < 400;
    if (result.status === 200 && !redirected) {
      ok += 1;
    } else {
      failures.push(result);
      console.error(
        `FAIL ${result.status} ${result.url}${result.location ? ` -> ${result.location}` : ""}${result.error ? ` (${result.error})` : ""}`,
      );
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 250));
}

console.log(`${ok} ok, ${failures.length} failed`);
if (failures.length) process.exit(1);
