import { RotateCcw } from "lucide-react";
import { PolicyPageLayout } from "@/components/PolicyPageLayout";
import { pageMeta } from "@/lib/pageMeta";
import {
  POLICY_LAST_UPDATED,
  SHOP_SECONDARY_EMAIL,
  SHOP_SUPPORT_EMAIL,
} from "@/lib/shopContact";
import { PAYHIP_SHOP_URL, SHOPIFY_SHOP_URL } from "@/lib/shopLinks";

const Refund = () => {
  return (
    <PolicyPageLayout
      meta={pageMeta.refund}
      schemaName="Refund Policy"
      icon={RotateCcw}
      title="Refund Policy"
      lastUpdated={POLICY_LAST_UPDATED}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Digital downloads</h2>
        <p className="text-muted-foreground leading-relaxed">
          Maybee Creations maps and adventure guides sold on{" "}
          <a
            href={SHOPIFY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            shop.maybeecreations.com
          </a>{" "}
          are instant digital downloads. After checkout you receive printable
          files by email and in your Shopify order history. Because the files
          are delivered immediately, we cannot take a downloaded product
          “back,” so this policy explains exactly when a refund is available.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">When we refund</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Email {SHOP_SUPPORT_EMAIL} within 14 days of purchase and we will
          refund or replace the order if:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>You paid and the download never arrived (and we cannot resend it)</li>
          <li>The file is damaged, incomplete, or will not open</li>
          <li>You received the wrong map or guidebook</li>
          <li>You were charged twice for the same item</li>
          <li>The product page description does not match what you received</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">When a refund is not available</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          We generally cannot refund a completed digital download for a change
          of mind, a different printer setting than you expected, or because
          you already have a similar title. Please read the product title,
          preview images, and description before you buy.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If something is unclear on a listing, write us before checkout. We
          would rather answer a question than leave you with the wrong map.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How to request a refund</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Send a message to{" "}
          <a
            href={`mailto:${SHOP_SUPPORT_EMAIL}`}
            className="text-accent hover:underline"
          >
            {SHOP_SUPPORT_EMAIL}
          </a>{" "}
          or {SHOP_SECONDARY_EMAIL}. Include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>The email used at checkout</li>
          <li>Order number</li>
          <li>Product name</li>
          <li>What went wrong (missing file, corrupt download, wrong item, etc.)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-3">
          We reply within one to two business days. Approved refunds return to
          the original payment method. Shopify processing times vary by bank
          or card issuer.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Payhip and other stores</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fans / Legend Land titles that check out on{" "}
          <a
            href={PAYHIP_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Payhip
          </a>{" "}
          follow this same spirit: we replace or refund a file that never
          arrived or will not open. Payhip may also apply its own checkout
          rules. Use the same email addresses above and include your Payhip
          receipt.
        </p>
      </section>
    </PolicyPageLayout>
  );
};

export default Refund;
