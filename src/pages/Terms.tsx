import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { PolicyPageLayout } from "@/components/PolicyPageLayout";
import { pageMeta } from "@/lib/pageMeta";
import {
  POLICY_LAST_UPDATED,
  SHOP_SUPPORT_EMAIL,
} from "@/lib/shopContact";
import { PAYHIP_SHOP_URL, SHOPIFY_SHOP_URL } from "@/lib/shopLinks";

const Terms = () => {
  return (
    <PolicyPageLayout
      meta={pageMeta.terms}
      schemaName="Terms of Service"
      icon={FileText}
      iconWrapClassName="bg-gradient-to-br from-secondary to-primary"
      title="Terms of Service"
      lastUpdated={POLICY_LAST_UPDATED}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Agreement to terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          These Terms of Service govern your use of maybeecreations.com, the
          Maybee Creations Shopify shop at{" "}
          <a
            href={SHOPIFY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            shop.maybeecreations.com
          </a>
          , and related digital products. By browsing, purchasing, or
          downloading, you agree to these terms. If you do not agree, please
          do not use the shops or files.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">The products</h2>
        <p className="text-muted-foreground leading-relaxed">
          Maybee Creations sells printable educational discovery maps and
          adventure guidebooks for Faith, Freedom, Frontier, Fans, and
          Future. Shopify is the checkout for Faith, Freedom, Frontier, and
          Future. Fans / Legend Land titles may check out on{" "}
          <a
            href={PAYHIP_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Payhip
          </a>
          . Files are delivered instantly after payment. We do not ship
          physical goods unless a future listing says so.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">License to use a purchase</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          When you buy a map or guidebook, you receive a limited,
          non-exclusive, non-transferable license to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Download the files for your own household or classroom</li>
          <li>Print copies for students or family members you teach</li>
          <li>Display a print in a home, church, or classroom</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-3">
          You may not resell the files, share the download link, upload the
          artwork to a stock site, or use the maps to create a competing
          product. Schools that need a building-wide or district license
          should email {SHOP_SUPPORT_EMAIL} before buying in volume.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Accounts and checkout</h2>
        <p className="text-muted-foreground leading-relaxed">
          Shopify and Payhip process payments. You are responsible for
          providing an accurate email so the download can be delivered and
          for keeping your account credentials private. Prices are shown at
          checkout in US dollars unless the storefront displays another
          currency.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Refunds and delivery</h2>
        <p className="text-muted-foreground leading-relaxed">
          Digital files are delivered immediately. Refunds follow our{" "}
          <Link to="/refund" className="text-accent hover:underline">
            Refund Policy
          </Link>
          . Delivery details are in the{" "}
          <Link to="/shipping" className="text-accent hover:underline">
            Shipping Policy
          </Link>
          . In short: we replace or refund a file that never arrives, will
          not open, or does not match the listing. We generally cannot
          refund a successful download for a change of mind.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Intellectual property</h2>
        <p className="text-muted-foreground leading-relaxed">
          Maps, guidebooks, stories, site copy, and branding are owned by
          Maybee Creations and protected by copyright and other
          intellectual-property laws. Purchasing a file does not transfer
          ownership of the artwork.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Prohibited uses</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Violate applicable law</li>
          <li>Copy or redistribute paid files beyond this license</li>
          <li>Attempt to break, scrape, or disrupt the shops</li>
          <li>Misrepresent a purchase or request a refund in bad faith</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
        <p className="text-muted-foreground leading-relaxed">
          Maps and guides are educational and inspirational. They are not
          professional legal, historical, scientific, or pastoral advice.
          Products are provided “as is.” We do not warrant that a download
          or page will always be uninterrupted or error-free.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Limitation of liability</h2>
        <p className="text-muted-foreground leading-relaxed">
          To the maximum extent permitted by law, Maybee Creations is not
          liable for indirect, incidental, special, or consequential damages
          arising from your use of the site or files. Our total liability
          for a purchase is limited to the amount you paid for that
          purchase.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Governing law</h2>
        <p className="text-muted-foreground leading-relaxed">
          These terms are governed by the laws of the Commonwealth of
          Virginia, without regard to conflict-of-law rules.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Changes</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may update these terms from time to time. The “Last updated”
          date at the top of this page will change when we do. Continued use
          of the shops after an update means you accept the revised terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-muted-foreground leading-relaxed">
          Questions about these terms:{" "}
          <a
            href={`mailto:${SHOP_SUPPORT_EMAIL}`}
            className="text-accent hover:underline"
          >
            {SHOP_SUPPORT_EMAIL}
          </a>
          . Full studio details are on the{" "}
          <Link to="/contact" className="text-accent hover:underline">
            Contact
          </Link>{" "}
          page.
        </p>
      </section>
    </PolicyPageLayout>
  );
};

export default Terms;
