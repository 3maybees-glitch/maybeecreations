import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { CategoryKey } from "@/data/categories";

export interface MapRequest {
  id: string;
  realm: CategoryKey;
  title: string;
  description: string | null;
  created_at: string;
}

export function useApprovedMapRequests() {
  return useQuery({
    queryKey: ["map-requests", "approved"],
    queryFn: async (): Promise<MapRequest[]> => {
      const { data, error } = await supabase
        .from("map_requests")
        .select("id, realm, title, description, created_at")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      const visibleRealms = new Set(["faith", "freedom", "farlands", "future"]);

      return (data ?? [])
        .filter((row) => visibleRealms.has(row.realm))
        .map((row) => ({
          id: row.id,
          realm: row.realm as MapRequest["realm"],
          title: row.title,
          description: row.description,
          created_at: row.created_at,
        }));
    },
    staleTime: 60_000,
  });
}
