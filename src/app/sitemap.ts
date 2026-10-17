import type { MetadataRoute } from "next";
import { courses } from "@/content/courses";
import { tools } from "@/content/tools";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** Indexable pages only (profile and certificates are personal and excluded). */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/cursos/",
    ...courses.flatMap((c) => [
      `/cursos/${c.slug}/`,
      ...c.lessons.map((l) => `/cursos/${c.slug}/${l.slug}/`),
      `/cursos/${c.slug}/evaluacion/`,
    ]),
    "/herramientas/",
    ...tools.map((t) => `/herramientas/${t.slug}/`),
    "/fuentes/",
    "/legal/",
  ];
  return paths.map((p) => ({ url: absoluteUrl(p), changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
