import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  HOME_TITLE_FULL,
  SITE_NAME,
  SITE_URL,
  STATIC_OG_IMAGE_ALT,
  type PageMeta,
} from "@/lib/pageMeta";

export type { PageMeta };

function setMetaTag(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.querySelector(`${selector}[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMetaTag(attribute: "name" | "property", key: string) {
  document.querySelector(`meta[${attribute}="${key}"]`)?.remove();
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    const canonical = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;
    const ogType = meta.type ?? "website";
    const image = meta.image ?? DEFAULT_OG_IMAGE;
    const imageAlt = meta.imageAlt ?? STATIC_OG_IMAGE_ALT;
    const robots = meta.noindex ? "noindex, nofollow" : "index, follow";

    document.title = meta.title;
    setMetaTag("meta", "name", "description", meta.description);
    setMetaTag("meta", "name", "robots", robots);
    setMetaTag("meta", "property", "og:title", meta.title);
    setMetaTag("meta", "property", "og:description", meta.description);
    setMetaTag("meta", "property", "og:url", canonical);
    setMetaTag("meta", "property", "og:type", ogType);
    setMetaTag("meta", "property", "og:site_name", SITE_NAME);
    setMetaTag("meta", "property", "og:locale", "en_US");
    setMetaTag("meta", "property", "og:image", image);
    setMetaTag("meta", "property", "og:image:alt", imageAlt);
    setMetaTag("meta", "name", "twitter:card", "summary_large_image");
    setMetaTag("meta", "name", "twitter:title", meta.title);
    setMetaTag("meta", "name", "twitter:description", meta.description);
    setMetaTag("meta", "name", "twitter:image", image);
    setMetaTag("meta", "name", "twitter:image:alt", imageAlt);
    setCanonical(canonical);

    if (meta.publishedTime) {
      setMetaTag("meta", "property", "article:published_time", meta.publishedTime);
    } else {
      removeMetaTag("property", "article:published_time");
    }

    if (meta.modifiedTime) {
      setMetaTag("meta", "property", "article:modified_time", meta.modifiedTime);
    } else {
      removeMetaTag("property", "article:modified_time");
    }
  }, [
    meta.title,
    meta.description,
    meta.path,
    meta.type,
    meta.publishedTime,
    meta.modifiedTime,
    meta.image,
    meta.imageAlt,
    meta.noindex,
  ]);
}

export function useDefaultPageMeta() {
  usePageMeta({
    title: HOME_TITLE_FULL,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  });
}
