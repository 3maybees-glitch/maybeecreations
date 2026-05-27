import { Sparkles } from "lucide-react";

interface Props {
  title: string;
  description?: string;
}

export const ComingSoonCard = ({ title, description }: Props) => {
  return (
    <div className="parchment rounded-sm p-6 flex flex-col items-start gap-3 opacity-90">
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold"
        style={{
          background: "hsl(var(--category) / 0.12)",
          color: "hsl(var(--category))",
        }}
      >
        <Sparkles className="h-3.5 w-3.5" />
        Coming Soon
      </div>
      <h3 className="text-xl font-bold text-primary leading-tight">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground italic">{description}</p>
      )}
    </div>
  );
};
