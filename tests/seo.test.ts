import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { courses } from "@/content/courses";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { courseJsonLd, jsonLdScript } from "@/lib/structuredData";

describe("SEO", () => {
  it("lists every lesson, course and tool in the sitemap, but not personal pages", () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls).toContain("https://aaroncalvet6-oss.github.io/finaula/");
    for (const c of courses) for (const l of c.lessons) expect(urls).toContain(absoluteUrl(`/cursos/${c.slug}/${l.slug}/`));
    expect(urls.some((u) => u.includes("/perfil/") || u.includes("/certificado/"))).toBe(false);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("points robots to the sitemap", () => {
    expect(robots().sitemap).toBe("https://aaroncalvet6-oss.github.io/finaula/sitemap.xml");
  });

  it("builds page metadata with canonical, Open Graph and Twitter image", () => {
    const m = pageMetadata({ title: "Cursos", description: "d", path: "/cursos/" });
    expect(m.alternates?.canonical).toBe("cursos/");
    expect(JSON.stringify(m.openGraph)).toContain("og/finaula.png");
    expect(m.twitter).toMatchObject({ card: "summary_large_image" });
  });

  it("describes each course with schema.org Course data", () => {
    const ld = courseJsonLd(courses[0]);
    expect(ld).toMatchObject({ "@type": "Course", name: "Fundamentos del dinero", inLanguage: "es-ES", isAccessibleForFree: true });
    expect(ld.provider.name).toBe("Finaula");
    expect(ld.hasCourseInstance[0].courseWorkload).toBe("PT43M");
    expect(jsonLdScript({ a: "</script>" })).not.toContain("</script>");
  });
});
