import { usePageMeta } from "@/hooks/usePageMeta";
import { useStructuredData } from "@/hooks/useStructuredData";
import type { PageMeta } from "@/lib/pageMeta";

export function usePageSeo(
  meta: PageMeta,
  schema: Record<string, unknown> | null,
) {
  usePageMeta(meta);
  useStructuredData(schema);
}
