import { SHOP_CONTACT, LEGAL_PATHS } from "@/lib/legal";
import { SITE_NAME, SITE_URL } from "@/lib/siteCopy";

const emailHref = `mailto:${SHOP_CONTACT.email}`;
const supportHref = `mailto:${SHOP_CONTACT.supportEmail}`;

const contactBlock = `
<p>
  <strong>${SHOP_CONTACT.brand}</strong><br />
  Email: <a href="${emailHref}">${SHOP_CONTACT.email}</a><br />
  Alternate support: <a href="${supportHref}">${SHOP_CONTACT.supportEmail}</a><br />
  Phone: <a href="${SHOP_CONTACT.phoneHref}">${SHOP_CONTACT.phone}</a><br />
  Mail: ${SHOP_CONTACT.address}<br />
  Website: <a href="${SITE_URL}">${SITE_URL.replace("https://", "")}</a><br />
  Shop: <a href="${SHOP_CONTACT.shop}">shop.maybeecreations.com</a>
</p>
`.trim();

/**
 * Shopify Admin policy bodies (no H1 — Shopify supplies the page title).
 * These same strings render on maybeecreations.com so checkout and the
 * marketing site stay in sync.
 */
export const refundPolicyHtml = `
<p class="text-lg"><strong>Last updated:</strong> ${SHOP_CONTACT.lastUpdated}</p>
<p>
  ${SITE_NAME} sells <strong>instant digital downloads</strong> — printable educational discovery maps and companion guidebooks. There is no physical product to return. This policy explains when we refund or replace a purchase from
  <a href="${SHOP_CONTACT.shop}">shop.maybeecreations.com</a>.
</p>

<h2>How downloads are delivered</h2>
<p>
  After checkout, your files are delivered immediately to the email address on the order and through your Shopify order confirmation. You can print the maps and guides at home or at a local print shop. Delivery is electronic, not mailed.
</p>

<h2>When we refund or replace</h2>
<p>Contact us within <strong>14 days of purchase</strong> and we will refund or replace the order if:</p>
<ul>
  <li>The file is corrupted, incomplete, or will not open</li>
  <li>You received the wrong map or guidebook</li>
  <li>The download never arrived and we cannot deliver it</li>
  <li>You were charged twice for the same item</li>
</ul>
<p>
  Please include your order number, the product name, and a short description of the problem. Email
  <a href="${emailHref}">${SHOP_CONTACT.email}</a> or
  <a href="${supportHref}">${SHOP_CONTACT.supportEmail}</a>.
  We typically reply within one to two business days.
</p>

<h2>When a refund is not available</h2>
<p>Because digital files cannot be “returned” once they have been delivered, we do not refund:</p>
<ul>
  <li>Change of mind after a successful download</li>
  <li>Printing problems at your home printer or a third-party print shop</li>
  <li>Dislike of artistic style after you have viewed or downloaded the files</li>
  <li>Purchases made more than 14 days earlier, except where required by law</li>
</ul>

<h2>How refunds are issued</h2>
<p>
  Approved refunds go back to the original payment method. Please allow 5–10 business days after we process the refund for your bank or card issuer to post it. If we can fix the file, we will send a working download first so you keep your purchase.
</p>

<h2>Fans / Legend Land (Payhip)</h2>
<p>
  NFL, baseball, college football, and tennis Legend Land maps checkout on
  <a href="${SHOP_CONTACT.fansShop}">Payhip</a>.
  Those orders follow Payhip’s checkout and refund tools. Write us anyway if something went wrong — we will help you get the files or a refund.
</p>

<h2>Questions</h2>
${contactBlock}
`.trim();

export const shippingPolicyHtml = `
<p class="text-lg"><strong>Last updated:</strong> ${SHOP_CONTACT.lastUpdated}</p>
<p>
  ${SITE_NAME} is a <strong>digital-download shop</strong>. We do not ship physical packages. Every map and guidebook on
  <a href="${SHOP_CONTACT.shop}">shop.maybeecreations.com</a>
  is delivered electronically, instantly, after payment.
</p>

<h2>Instant delivery — no physical shipping</h2>
<ul>
  <li>There are no shipping charges, tracking numbers, or carrier delays</li>
  <li>You do not need a mailing address for delivery (billing details are still collected at checkout)</li>
  <li>Orders are available worldwide wherever checkout completes</li>
  <li>You print the files yourself, at home or at a print shop</li>
</ul>

<h2>How you receive your files</h2>
<p>As soon as payment is confirmed you will receive:</p>
<ul>
  <li>An order confirmation email from Shopify with your download links</li>
  <li>Access to the files from the order status page in that email</li>
</ul>
<p>
  Downloads are usually ready within a few minutes. Check your spam or promotions folder if you do not see the email. Add
  <a href="${emailHref}">${SHOP_CONTACT.email}</a>
  to your contacts so future orders are not filtered.
</p>

<h2>If your download does not arrive</h2>
<p>
  If you still do not have your files <strong>30 minutes after purchase</strong>, email
  <a href="${emailHref}">${SHOP_CONTACT.email}</a>
  or
  <a href="${supportHref}">${SHOP_CONTACT.supportEmail}</a>
  with your order number and we will resend the links or deliver the files another way. That is a delivery problem, not a shipping delay — we will make it right under our
  <a href="${SITE_URL}${LEGAL_PATHS.refund}">Refund Policy</a>.
</p>

<h2>Printing your maps</h2>
<p>
  Files are designed to print at home or at a copy shop. Paper size and print notes are included with each product. We are not responsible for a print shop’s paper, ink, or trim, but we will replace a file that will not open or print because it is defective.
</p>

<h2>Questions</h2>
${contactBlock}
`.trim();

export const termsOfServiceHtml = `
<p class="text-lg"><strong>Last updated:</strong> ${SHOP_CONTACT.lastUpdated}</p>
<p>
  These Terms of Service (“Terms”) govern your use of ${SITE_NAME} websites, including
  <a href="${SITE_URL}">maybeecreations.com</a> and
  <a href="${SHOP_CONTACT.shop}">shop.maybeecreations.com</a>
  (together, the “Services”), and any digital maps, guidebooks, or other products you buy from us.
</p>
<p>By visiting the site or completing a purchase, you agree to these Terms. If you do not agree, please do not use the Services or place an order.</p>

<h2>Who we are</h2>
${contactBlock}

<h2>The products</h2>
<p>
  We sell printable educational discovery maps and companion adventure guidebooks for homeschool, Sunday school, classrooms, and home use. Products on the Shopify shop are <strong>digital downloads delivered instantly</strong> after payment. We do not mail a physical copy unless a listing clearly says otherwise.
</p>

<h2>License to use your downloads</h2>
<p>When you buy a map or guide, ${SITE_NAME} grants you a limited, non-exclusive, non-transferable license to:</p>
<ul>
  <li>Download the files for your household, homeschool, or a single classroom</li>
  <li>Print copies for those students or family members</li>
  <li>Use the maps as wall displays, lesson aids, and personal study tools</li>
</ul>
<p>You may <strong>not</strong>:</p>
<ul>
  <li>Resell, share, or upload the digital files to a public drive, marketplace, or curriculum-sharing site</li>
  <li>Claim the artwork as your own or create a competing product from it</li>
  <li>Use the files for a school-wide or commercial print run without written permission</li>
</ul>
<p>Need a multi-classroom or church-wide license? Email <a href="${emailHref}">${SHOP_CONTACT.email}</a> and we will set one up.</p>

<h2>Accounts, checkout, and payment</h2>
<p>
  Prices are shown at checkout and charged in the currency displayed. You are responsible for providing a working email address so we can deliver your files. Payment is processed by Shopify and its payment partners. We may refuse or cancel an order if we suspect fraud or an error in pricing.
</p>

<h2>Refunds and delivery</h2>
<p>
  Delivery and refund rules for digital downloads are in our
  <a href="${SITE_URL}${LEGAL_PATHS.refund}">Refund Policy</a>
  and
  <a href="${SITE_URL}${LEGAL_PATHS.shipping}">Shipping Policy</a>.
  In short: files are delivered instantly by email; we refund or replace defective, missing, or duplicate orders when you write us within 14 days.
</p>

<h2>Privacy</h2>
<p>
  How we collect and use personal information is described in our
  <a href="${SITE_URL}${LEGAL_PATHS.privacy}">Privacy Policy</a>
  and the privacy policy posted on the Shopify shop. If those documents disagree about shop checkout data, the shop privacy policy controls for that data.
</p>

<h2>Acceptable use</h2>
<p>You agree not to use the Services to break the law, attack or overload our systems, scrape the store in an abusive way, or infringe anyone’s intellectual property.</p>

<h2>Intellectual property</h2>
<p>
  Maps, guides, stories, logos, and site copy are owned by ${SITE_NAME} and protected by copyright and other laws. Buying a download buys a license to use those files as described above — it does not transfer ownership of the artwork.
</p>

<h2>Third-party services</h2>
<p>
  Checkout, file hosting, and some products (including Fans / Legend Land maps on
  <a href="${SHOP_CONTACT.fansShop}">Payhip</a>)
  are provided by third parties. Their terms apply to those checkouts. We are not responsible for sites we do not control.
</p>

<h2>Disclaimer</h2>
<p>
  The Services and downloads are provided “as is.” Maps are educational and artistic works — they are not official textbooks, legal advice, or a substitute for Scripture study, classroom standards, or professional instruction. We do not warrant that the site will be uninterrupted or error-free.
</p>

<h2>Limitation of liability</h2>
<p>
  To the fullest extent allowed by law, ${SITE_NAME} is not liable for indirect, incidental, special, or consequential damages, or for more than the amount you paid for the product that gave rise to the claim.
</p>

<h2>Changes</h2>
<p>We may update these Terms by posting a new version on this page and changing the “Last updated” date. Continued use of the Services after a change means you accept the revised Terms.</p>

<h2>Governing law</h2>
<p>These Terms are governed by the laws of the Commonwealth of Virginia, United States, without regard to conflict-of-law rules. Courts in Virginia have exclusive jurisdiction, except where applicable consumer law says otherwise.</p>

<h2>Contact</h2>
<p>Questions about these Terms? Use the details above or visit our <a href="${SITE_URL}${LEGAL_PATHS.contact}">Contact</a> page.</p>
`.trim();

export const contactInformationHtml = `
<p class="text-lg"><strong>Last updated:</strong> ${SHOP_CONTACT.lastUpdated}</p>
<p>
  ${SITE_NAME} is a small studio in Lynchburg, Virginia. We make printable educational discovery maps and adventure guides. Use the details below for order help, refunds, licenses, or general questions about
  <a href="${SHOP_CONTACT.shop}">shop.maybeecreations.com</a>
  and
  <a href="${SITE_URL}">maybeecreations.com</a>.
</p>

<h2>How to reach us</h2>
${contactBlock}

<h2>What to include in an order email</h2>
<ul>
  <li>Your order number</li>
  <li>The map or guidebook name</li>
  <li>The email address used at checkout</li>
  <li>A short description of what you need (missing download, damaged file, refund, classroom license)</li>
</ul>
<p>We aim to reply within <strong>one to two business days</strong>.</p>

<h2>Policies</h2>
<ul>
  <li><a href="${SITE_URL}${LEGAL_PATHS.refund}">Refund Policy</a> — instant downloads, replacements, and when we refund</li>
  <li><a href="${SITE_URL}${LEGAL_PATHS.shipping}">Shipping Policy</a> — digital delivery, no physical shipping</li>
  <li><a href="${SITE_URL}${LEGAL_PATHS.terms}">Terms of Service</a></li>
  <li><a href="${SITE_URL}${LEGAL_PATHS.privacy}">Privacy Policy</a></li>
</ul>
`.trim();

export const shopifyPolicies = [
  { type: "REFUND_POLICY" as const, title: "Refund policy", body: refundPolicyHtml },
  { type: "SHIPPING_POLICY" as const, title: "Shipping policy", body: shippingPolicyHtml },
  { type: "TERMS_OF_SERVICE" as const, title: "Terms of service", body: termsOfServiceHtml },
  { type: "CONTACT_INFORMATION" as const, title: "Contact information", body: contactInformationHtml },
];
