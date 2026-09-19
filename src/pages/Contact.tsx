import { Mail } from "lucide-react";
import { PolicyPage } from "@/components/PolicyPage";
import { pageMeta } from "@/lib/pageMeta";
import { contactInformationHtml } from "@/lib/shopifyPolicyHtml";
import { contactPageSchemas } from "@/lib/structuredData";

const Contact = () => (
  <PolicyPage
    meta={pageMeta.contact}
    breadcrumbLabel="Contact"
    title="Contact Information"
    icon={Mail}
    iconClassName="bg-gradient-to-br from-accent to-primary"
    html={contactInformationHtml}
    extraSchema={contactPageSchemas(
      pageMeta.contact.path,
      pageMeta.contact.title,
      pageMeta.contact.description,
    )}
  />
);

export default Contact;
