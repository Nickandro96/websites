import { useEffect } from "react";
import { useLocation } from "wouter";
import { notFoundSeo, seoPages, siteUrl } from "@/lib/seo";

export default function Seo() {
  const [pathname] = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const page = seoPages[path] ?? notFoundSeo;
    document.title = page.title;
    const setMeta = (attribute: "name" | "property", key: string, value: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = value;
    };
    setMeta("name", "description", page.description);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", `${siteUrl}${path}`);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "robots", seoPages[path] ? "index, follow" : "noindex, follow");
    const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (seoPages[path]) {
      const canonical = existing ?? document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = `${siteUrl}${path}`;
      if (!existing) document.head.appendChild(canonical);
    } else {
      existing?.remove();
    }
  }, [pathname]);
  return null;
}
