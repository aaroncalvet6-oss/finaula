import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseAction, CourseHeaderProgress, CourseSteps, CourseSyllabus } from "@/components/course/CoursePlan";
import { Container } from "@/components/layout/Container";
import { CourseCover } from "@/components/ui/CourseCover";
import { courseMinutes, courses, getCourse } from "@/content/courses";
import { pageMetadata } from "@/lib/seo";
import { courseJsonLd, jsonLdScript } from "@/lib/structuredData";

type Params = { curso: string };

export function generateStaticParams(): Params[] {
  return courses.map((c) => ({ curso: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const course = getCourse((await params).curso);
  if (!course) return {};
  return pageMetadata({ title: course.title, description: course.summary, path: `/cursos/${course.slug}/`, image: course.slug });
}

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const course = getCourse((await params).curso);
  if (!course) notFound();
  const lessons = course.lessons.map((l) => ({
    slug: l.slug,
    number: l.number,
    title: l.title,
    objective: l.objective,
    minutes: l.minutes,
  }));
  const ref = { slug: course.slug, title: course.title };
  const toneClass = course.tone === "alt" ? "bg-alt text-on-alt" : "bg-soft text-on-soft";

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(courseJsonLd(course)) }} />
      <div className={toneClass}>
        <Container width="reading" className="pt-4 pb-7">
          <Link href="/cursos/" className="inline-flex min-h-11 items-center text-small font-medium underline-offset-4 hover:underline">
            Cursos
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-small font-semibold">
                Curso {course.number} · {course.area}
              </p>
              <h1 className="mt-2 text-h1 font-semibold tracking-[-0.025em]">{course.title}</h1>
            </div>
            <CourseCover motif={course.motif} className="mt-2 shrink-0" />
          </div>
          <p className="mt-3 text-lead">{course.tagline}</p>
          <p className="tabular mt-3 font-mono text-caption">
            {course.lessons.length} lecciones · {courseMinutes(course)} min · evaluación y certificado
          </p>
          <CourseHeaderProgress course={ref} lessons={lessons} />
        </Container>
      </div>

      <Container width="reading" className="pt-8">
        <section aria-labelledby="como">
          <h2 id="como" className="text-h3 font-semibold tracking-[-0.015em]">
            Cómo funciona este curso
          </h2>
          <div className="mt-4">
            <CourseSteps course={ref} lessons={lessons} />
          </div>
        </section>

        <section aria-labelledby="temario" className="mt-10">
          <h2 id="temario" className="text-h2 font-semibold tracking-[-0.02em]">
            Temario
          </h2>
          <p className="mt-1 text-small text-muted">{course.audience}</p>
          <div className="mt-4">
            <CourseSyllabus course={ref} lessons={lessons} assessment={course.assessment} />
          </div>
        </section>

        <CourseAction course={ref} lessons={lessons} />
      </Container>
    </main>
  );
}
