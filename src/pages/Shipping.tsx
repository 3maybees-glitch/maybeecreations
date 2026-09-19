import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import { PolicyPageLayout } from "@/components/PolicyPageLayout";
import { pageMeta } from "@/lib/pageMeta";
import {
  POLICY_LAST_UPDATED,
  SHOP_SUPPORT_EMAIL,
} from "@/lib/shopContact";
import { SHOPIFY_SHOP_URL } from "@/lib/shopLinks";

const Shipping = () => {
  return (
    <PolicyPageLayout
      meta={pageMeta.shipping}
      schemaName="Shipping Policy"
      icon={Package}
      iconWrapClassName="bg-gradient-to-br from-secondary to-primary"
      title="Shipping Policy"
      lastUpdated={POLICY_LAST_UPDATED}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">No physical shipping</h2>
        <p className="text-muted-foreground leading-relaxed">
          Everything sold on{" "}
          <a
            href={SHOPIFY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            shop.maybeecreations.com
          </a>{" "}
          is a digital download: printable discovery maps and companion
          guidebooks. We do not mail paper prints, posters, or USB drives.
          There is no shipping charge, no tracking number, and no customs
          form.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Instant delivery</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          After your payment is confirmed, Shopify delivers the files right
          away:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>A download link is emailed to the address used at checkout</li>
          <li>
            The same files stay attached to your order in your Shopify
            account
          </li>
          <li>
            You print at home, at school, or at a local print shop on the
            paper size listed on the product page
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">If the download does not arrive</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Check spam, promotions, and junk folders for an email from Shopify
          or Maybee Creations. Confirm you typed the correct email at
          checkout. If the files are still missing after about 30 minutes,
          write {SHOP_SUPPORT_EMAIL} with your order number and we will
          resend the download.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A missing or broken file is covered by our{" "}
          <Link to="/refund" className="text-accent hover:underline">
            refund policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">International customers</h2>
        <p className="text-muted-foreground leading-relaxed">
          Digital files can be purchased from anywhere Shopify accepts
          payment. You are responsible for printing locally. Because nothing
          is shipped, there are no import duties or delivery delays.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Future physical products</h2>
        <p className="text-muted-foreground leading-relaxed">
          If we later offer a printed map or other physical item, that
          listing will state shipping cost, origin, and estimated delivery
          before you pay. Until then, treat every Maybee Creations shop
          product as an instant download.
        </p>
      </section>
    </PolicyPageLayout>
  );
};

export default Shipping;
