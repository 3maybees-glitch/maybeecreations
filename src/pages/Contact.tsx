import { Mail } from "lucide-react";
import { PolicyPageLayout } from "@/components/PolicyPageLayout";
import { pageMeta } from "@/lib/pageMeta";
import {
  POLICY_LAST_UPDATED,
  SHOP_MAILING_ADDRESS,
  SHOP_SECONDARY_EMAIL,
  SHOP_SUPPORT_EMAIL,
  SHOP_SUPPORT_PHONE,
  SHOP_SUPPORT_PHONE_TEL,
} from "@/lib/shopContact";
import { PAYHIP_SHOP_URL, SHOPIFY_SHOP_URL } from "@/lib/shopLinks";

const Contact = () => {
  return (
    <PolicyPageLayout
      meta={pageMeta.contact}
      schemaName="Contact"
      icon={Mail}
      title="Contact Information"
      lastUpdated={POLICY_LAST_UPDATED}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Maybee Creations</h2>
        <p className="text-muted-foreground leading-relaxed">
          Use this page for shop questions, missing downloads, refund
          requests, classroom licensing, and map ideas. We read every
          message and reply within one to two business days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Email</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            Shop and order help:{" "}
            <a
              href={`mailto:${SHOP_SUPPORT_EMAIL}`}
              className="text-accent hover:underline"
            >
              {SHOP_SUPPORT_EMAIL}
            </a>
          </li>
          <li>
            Map requests and general studio mail:{" "}
            <a
              href={`mailto:${SHOP_SECONDARY_EMAIL}`}
              className="text-accent hover:underline"
            >
              {SHOP_SECONDARY_EMAIL}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Phone</h2>
        <p className="text-muted-foreground leading-relaxed">
          <a
            href={`tel:${SHOP_SUPPORT_PHONE_TEL}`}
            className="text-accent hover:underline"
          >
            {SHOP_SUPPORT_PHONE}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Mailing address</h2>
        <p className="text-muted-foreground leading-relaxed">
          {SHOP_MAILING_ADDRESS}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Shops</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            Faith, Freedom, Frontier, and Future maps:{" "}
            <a
              href={SHOPIFY_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {SHOPIFY_SHOP_URL}
            </a>
          </li>
          <li>
            Fans / Legend Land maps:{" "}
            <a
              href={PAYHIP_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {PAYHIP_SHOP_URL}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">What to include</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          For a faster reply, send:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Your order number and checkout email</li>
          <li>The product name</li>
          <li>A short description of the question or problem</li>
          <li>Screenshots if a file will not open or a page looks wrong</li>
        </ul>
      </section>
    </PolicyPageLayout>
  );
};

export default Contact;
