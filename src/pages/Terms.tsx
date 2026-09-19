import { FileText } from "lucide-react";
import { PolicyPage } from "@/components/PolicyPage";
import { pageMeta } from "@/lib/pageMeta";
import { termsOfServiceHtml } from "@/lib/shopifyPolicyHtml";

const Terms = () => (
  <PolicyPage
    meta={pageMeta.terms}
    breadcrumbLabel="Terms of Service"
    title="Terms of Service"
    icon={FileText}
    iconClassName="bg-gradient-to-br from-secondary to-primary"
    html={termsOfServiceHtml}
  />
);

export default Terms;
