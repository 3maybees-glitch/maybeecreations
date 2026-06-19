import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  HOME_TITLE_FULL,
  SITE_URL,
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

    document.title = meta.title;
    setMetaTag("meta", "name", "description", meta.description);
    setMetaTag("meta", "property", "og:title", meta.title);
    setMetaTag("meta", "property", "og:description", meta.description);
    setMetaTag("meta", "property", "og:url", canonical);
    setMetaTag("meta", "property", "og:image", DEFAULT_OG_IMAGE);
    setMetaTag("meta", "name", "twitter:title", meta.title);
    setMetaTag("meta", "name", "twitter:description", meta.description);
    setMetaTag("meta", "name", "twitter:image", DEFAULT_OG_IMAGE);
    setCanonical(canonical);
  }, [meta.title, meta.description, meta.path]);
}

export function useDefaultPageMeta() {
  usePageMeta({
    title: HOME_TITLE_FULL,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  });
}
