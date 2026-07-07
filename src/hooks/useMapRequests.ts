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

      return (data ?? []) as MapRequest[];
    },
    staleTime: 60_000,
  });
}
