/**
 * Verifies the map_requests migration is applied and RLS works.
 * Run: npx tsx scripts/verify-map-requests-migration.ts
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

function loadEnv() {
  try {
    const envPath = resolve(process.cwd(), ".env");
    for (const line of readFileSync(envPath, "utf8").split("\n")) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (!match) continue;
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env optional if vars are already exported
  }
}

loadEnv();

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(url, key);

async function main() {
  const { error: readError } = await supabase.from("map_requests").select("id").limit(1);

  if (readError?.message.includes("Could not find the table")) {
    console.error("❌ map_requests table not found — migration not applied yet.");
    console.error("\nRun the SQL in supabase/migrations/20260707100000_map_requests.sql");
    console.error("Dashboard: https://supabase.com/dashboard/project/cisplrfuyarzhtdttiuy/sql/new");
    process.exit(1);
  }

  if (readError) {
    console.error("❌ Unexpected read error:", readError.message);
    process.exit(1);
  }

  console.log("✓ map_requests table exists");

  const testTitle = `Migration verify ${Date.now()}`;
  const { data: inserted, error: insertError } = await supabase
    .from("map_requests")
    .insert({
      realm: "fans",
      title: testTitle,
      description: "Auto-generated verification row — safe to delete.",
      status: "pending",
    })
    .select("id")
    .single();

  if (insertError) {
    console.error("❌ Insert failed:", insertError.message);
    process.exit(1);
  }

  console.log("✓ Anonymous insert works (pending request saved)");
  console.log(`  Test row id: ${inserted.id}`);
  console.log("\nNext: approve requests in Supabase → Table Editor → map_requests → set status = approved");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
