import type { Metadata } from "next";
import { site } from "@/config/site";

export interface PageSeo {
  title?: string;
  description: string;
  /** Path relative to the site root, with trailing slash: "/cursos/". */
  path: string;
  /** Social image in public/og (without extension). */
  image?: string;
  noindex?: boolean;
}

/** Complete metadata for a page: canonical URL, Open Graph and Twitter card. */
export function pageMetadata({ title, description, path, image = "finaula", noindex }: PageSeo): Metadata {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`;
  const images = [{ url: `og/${image}.png`, width: 1200, height: 630, alt: fullTitle }];
  const url = path.replace(/^\//, "");
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: url || "./" },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "es_ES",
      title: fullTitle,
      description,
      url: url || "./",
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: images.map((i) => i.url) },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

/** Absolute URL of a path, for structured data and the sitemap. */
export function absoluteUrl(path: string): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
