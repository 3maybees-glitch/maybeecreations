import { categories } from "@/data/categories";
import type { Story } from "@/data/stories";
import {
  DEFAULT_DESCRIPTION,
  HOME_TITLE_FULL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/siteCopy";
import { SOCIAL_SAME_AS } from "@/lib/socialLinks";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ItemListEntry {
  name: string;
  url: string;
  description?: string;
}

function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/maybee-creations-logo.png`,
    },
    description: DEFAULT_DESCRIPTION,
    sameAs: SOCIAL_SAME_AS,
  };
}

export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema(name: string, items: ItemListEntry[]) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function articleSchema(story: Story) {
  const url = absoluteUrl(`/stories/${story.slug}`);
  const category = categories.find((c) => c.key === story.category);

  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: story.title,
    description: story.excerpt,
    image: [story.image],
    datePublished: story.publishedAt,
    dateModified: story.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/maybee-creations-logo.png`,
      },
    },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    articleSection: category?.name ?? "Stories",
    inLanguage: "en-US",
    wordCount: story.paragraphs.join(" ").split(/\s+/).length,
    timeRequired: `PT${story.readingMinutes}M`,
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function homePageSchemas() {
  return buildGraph([
    organizationSchema(),
    webSiteSchema(),
    webPageSchema({
      title: HOME_TITLE_FULL,
      description: DEFAULT_DESCRIPTION,
      path: "/",
    }),
    itemListSchema(
      "Maybee Creations Realms",
      categories.map((category) => ({
        name: `${category.name} — ${category.explorerName}`,
        url: absoluteUrl(category.path),
        description: category.blurb,
      })),
    ),
  ]);
}

export function categoryPageSchemas(
  path: string,
  title: string,
  description: string,
  breadcrumb: BreadcrumbItem[],
) {
  return buildGraph([
    organizationSchema(),
    webSiteSchema(),
    webPageSchema({ title, description, path }),
    breadcrumbSchema(breadcrumb),
  ]);
}

export function storyPageSchemas(story: Story) {
  const path = `/stories/${story.slug}`;

  return buildGraph([
    organizationSchema(),
    webSiteSchema(),
    webPageSchema({
      title: `${story.title} — Stories | ${SITE_NAME}`,
      description: story.excerpt,
      path,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Stories", path: "/stories" },
      { name: story.title, path },
    ]),
    articleSchema(story),
  ]);
}

export function storiesIndexSchemas() {
  return buildGraph([
    organizationSchema(),
    webSiteSchema(),
    webPageSchema({
      title: `Stories — The Story Behind the Map | ${SITE_NAME}`,
      description:
        "Storytime essays on the history, meaning, and joy of Maybee Creations maps and guides — Faith, Freedom, Fans, and the Future.",
      path: "/stories",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Stories", path: "/stories" },
    ]),
  ]);
}

export function staticPageSchemas(
  path: string,
  title: string,
  description: string,
  breadcrumbLabel: string,
) {
  return buildGraph([
    organizationSchema(),
    webSiteSchema(),
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: breadcrumbLabel, path },
    ]),
  ]);
}

export function buildGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function homePageSchemasWithFaq(faqs: FaqItem[]) {
  return buildGraph([
    organizationSchema(),
    webSiteSchema(),
    webPageSchema({
      title: HOME_TITLE_FULL,
      description: DEFAULT_DESCRIPTION,
      path: "/",
    }),
    itemListSchema(
      "Maybee Creations Realms",
      categories.map((category) => ({
        name: `${category.name} — ${category.explorerName}`,
        url: absoluteUrl(category.path),
        description: category.blurb,
      })),
    ),
    faqPageSchema(faqs),
  ]);
}
