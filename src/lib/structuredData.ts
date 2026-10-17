import { site } from "@/config/site";
import { courseMinutes } from "@/content/courses";
import type { Course } from "@/content/schema";
import { absoluteUrl } from "./seo";

/** schema.org Course for a course page (Google course info). */
export function courseJsonLd(course: Course) {
  const url = absoluteUrl(`/cursos/${course.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": url,
    url,
    name: course.title,
    description: course.summary,
    inLanguage: "es-ES",
    educationalLevel: "Principiante",
    audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Jóvenes de 14 a 18 años" },
    teaches: course.objectives,
    isAccessibleForFree: true,
    provider: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
    offers: [{ "@type": "Offer", category: "Free", price: 0, priceCurrency: "EUR" }],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: `PT${courseMinutes(course)}M`,
      },
    ],
    syllabusSections: course.lessons.map((l) => ({
      "@type": "Syllabus",
      name: `${l.number} · ${l.title}`,
      description: l.objective,
      timeRequired: `PT${l.minutes}M`,
    })),
  };
}

/** Serialises JSON-LD safely for a <script> tag. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
