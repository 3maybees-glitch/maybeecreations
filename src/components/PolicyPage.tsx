import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageSeo } from "@/hooks/usePageSeo";
import type { PageMeta } from "@/lib/pageMeta";
import { staticPageSchemas } from "@/lib/structuredData";

interface PolicyPageProps {
  meta: PageMeta;
  breadcrumbLabel: string;
  title: string;
  icon: LucideIcon;
  iconClassName?: string;
  html?: string;
  extraSchema?: Record<string, unknown> | null;
  children?: ReactNode;
}

export function PolicyPage({
  meta,
  breadcrumbLabel,
  title,
  icon: Icon,
  iconClassName = "bg-gradient-to-br from-primary to-primary-glow",
  html,
  extraSchema,
  children,
}: PolicyPageProps) {
  usePageSeo(
    meta,
    extraSchema ??
      staticPageSchemas(meta.path, meta.title, meta.description, breadcrumbLabel),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconClassName}`}
            >
              <Icon className="h-6 w-6 text-primary-foreground" aria-hidden />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>

          {html ? (
            <div
              className="prose prose-slate max-w-none space-y-8 prose-headings:font-bold prose-h2:text-2xl prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <div className="prose prose-slate max-w-none space-y-8">{children}</div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
