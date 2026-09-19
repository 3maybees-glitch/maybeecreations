import { RotateCcw } from "lucide-react";
import { PolicyPage } from "@/components/PolicyPage";
import { pageMeta } from "@/lib/pageMeta";
import { refundPolicyHtml } from "@/lib/shopifyPolicyHtml";

const Refund = () => (
  <PolicyPage
    meta={pageMeta.refund}
    breadcrumbLabel="Refund Policy"
    title="Refund Policy"
    icon={RotateCcw}
    iconClassName="bg-gradient-to-br from-secondary to-primary"
    html={refundPolicyHtml}
  />
);

export default Refund;
