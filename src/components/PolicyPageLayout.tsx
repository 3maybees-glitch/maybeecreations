import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { usePageSeo } from "@/hooks/usePageSeo";
import type { PageMeta } from "@/lib/pageMeta";
import { staticPageSchemas } from "@/lib/structuredData";

interface PolicyPageLayoutProps {
  meta: PageMeta;
  schemaName: string;
  icon: LucideIcon;
  iconWrapClassName?: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

const relatedPolicies = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Service", path: "/terms" },
  { label: "Refund Policy", path: "/refund" },
  { label: "Shipping Policy", path: "/shipping" },
  { label: "Contact", path: "/contact" },
];

export const PolicyPageLayout = ({
  meta,
  schemaName,
  icon: Icon,
  iconWrapClassName = "bg-gradient-to-br from-primary to-primary-glow",
  title,
  lastUpdated,
  children,
}: PolicyPageLayoutProps) => {
  usePageSeo(
    meta,
    staticPageSchemas(meta.path, meta.title, meta.description, schemaName),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconWrapClassName}`}
            >
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <p className="text-lg text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
            {children}

            <section>
              <h2 className="text-2xl font-bold mb-4">Related policies</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {relatedPolicies
                  .filter((policy) => policy.path !== meta.path)
                  .map((policy) => (
                    <li key={policy.path}>
                      <Link
                        to={policy.path}
                        className="text-accent hover:underline"
                      >
                        {policy.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
