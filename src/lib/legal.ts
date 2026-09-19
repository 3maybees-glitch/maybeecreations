import { PAYHIP_SHOP_URL, SHOPIFY_SHOP_URL } from "@/lib/shopLinks";
import { SITE_NAME, SITE_URL } from "@/lib/siteCopy";

/** Shop legal contact — matches the live Shopify privacy policy. */
export const SHOP_CONTACT = {
  brand: SITE_NAME,
  email: "hellomaybeecreations@gmail.com",
  supportEmail: "3maybees@gmail.com",
  phone: "+1 609-221-5619",
  phoneHref: "tel:+16092215619",
  address: "1616 Spottswood Pl, Lynchburg VA 24503, United States",
  lastUpdated: "September 19, 2026",
  website: SITE_URL,
  shop: SHOPIFY_SHOP_URL,
  fansShop: PAYHIP_SHOP_URL,
} as const;

export const LEGAL_PATHS = {
  privacy: "/privacy",
  terms: "/terms",
  refund: "/refund-policy",
  shipping: "/shipping-policy",
  contact: "/contact",
} as const;
