import { format } from "date-fns";
import { Loader2, ScrollText } from "lucide-react";
import { mapRequestRealmLabel } from "@/data/mapRequestRealms";
import { useApprovedMapRequests } from "@/hooks/useMapRequests";

export const MapRequestLedger = () => {
  const { data, isLoading, isError } = useApprovedMapRequests();

  return (
    <div className="parchment rounded-sm border border-primary/15 p-6 md:p-8 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-sm bg-accent/15 flex items-center justify-center">
          <ScrollText className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary">The Mapmaker&apos;s Ledger</h2>
          <p className="text-sm text-muted-foreground">
            Approved requests from fellow explorers. No voting yet — just ideas worth charting.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center gap-2 py-12 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Unrolling the ledger...</span>
        </div>
      ) : isError ? (
        <p className="text-muted-foreground italic py-8 text-center">
          The ledger is resting for a moment. Check back soon.
        </p>
      ) : !data?.length ? (
        <div className="rounded-sm border border-dashed border-primary/25 bg-background/50 px-6 py-10 text-center">
          <p className="text-lg text-foreground/90 mb-2">The first pages are still blank.</p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Be among the first to chart the next expedition. Submit your map idea and we will
            publish approved requests here for the community to see.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {data.map((request) => (
            <li
              key={request.id}
              className="rounded-sm border border-border/80 bg-background/60 p-5 transition-colors hover:border-primary/25"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">
                  {mapRequestRealmLabel(request.realm)}
                </span>
                <span className="text-xs text-muted-foreground">
                  Requested {format(new Date(request.created_at), "MMM d, yyyy")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{request.title}</h3>
              {request.description ? (
                <p className="text-muted-foreground leading-relaxed">{request.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
