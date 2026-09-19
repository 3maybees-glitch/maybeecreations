import { Download } from "lucide-react";
import { PolicyPage } from "@/components/PolicyPage";
import { pageMeta } from "@/lib/pageMeta";
import { shippingPolicyHtml } from "@/lib/shopifyPolicyHtml";

const Shipping = () => (
  <PolicyPage
    meta={pageMeta.shipping}
    breadcrumbLabel="Shipping Policy"
    title="Shipping Policy"
    icon={Download}
    iconClassName="bg-gradient-to-br from-primary to-secondary"
    html={shippingPolicyHtml}
  />
);

export default Shipping;
