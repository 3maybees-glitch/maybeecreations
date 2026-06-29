import { useEffect } from "react";

const SCRIPT_ID = "structured-data-jsonld";

export function useStructuredData(schema: Record<string, unknown> | null) {
  const serialized = schema ? JSON.stringify(schema) : null;

  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    existing?.remove();

    if (!serialized) {
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    script.textContent = serialized;
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [serialized]);
}
