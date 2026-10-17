import { Award, ClipboardCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseProgress, CourseStartButton, LessonStatus } from "@/components/course/ProgressIslands";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Button";
import { CourseCover } from "@/components/ui/CourseCover";
import { courseMinutes, courses, getCourse } from "@/content/courses";

type Params = { curso: string };

export function generateStaticParams(): Params[] {
  return courses.map((c) => ({ curso: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const course = getCourse((await params).curso);
  if (!course) return {};
  return {
    title: course.title,
    description: course.summary,
    alternates: { canonical: `/cursos/${course.slug}/` },
  };
}

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const course = getCourse((await params).curso);
  if (!course) notFound();
  const minutes = courseMinutes(course);
  const lessonRefs = course.lessons.map((l) => ({ slug: l.slug, number: l.number, title: l.title }));
  const toneClass = course.tone === "alt" ? "bg-alt text-on-alt" : "bg-soft text-on-soft";

  return (
    <main>
      <div className={toneClass}>
        <Container className="pt-6 pb-8">
          <Link href="/cursos/" className="inline-flex min-h-11 items-center text-small font-medium underline-offset-4 hover:underline">
            Cursos
          </Link>
          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <p className="text-small font-semibold">
                Curso {course.number} · {course.area}
              </p>
              <h1 className="mt-2 text-h1 font-semibold tracking-[-0.025em]">{course.title}</h1>
            </div>
            <CourseCover motif={course.motif} className="shrink-0" />
          </div>
        </Container>
      </div>

      <Container className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div>
            <p className="max-w-prose text-lead">{course.summary}</p>
            <p className="mt-2 text-small text-muted">{course.audience}</p>
            <dl className="tabular mt-6 grid grid-cols-3 gap-3 border-y border-line py-4 font-mono">
              <div>
                <dt className="text-caption text-muted">LECCIONES</dt>
                <dd className="text-h4">{course.lessons.length}</dd>
              </div>
              <div>
                <dt className="text-caption text-muted">DURACIÓN</dt>
                <dd className="text-h4">{minutes} min</dd>
              </div>
              <div>
                <dt className="text-caption text-muted">EVALUACIÓN</dt>
                <dd className="text-h4">
                  {course.assessment.passMark}/{course.assessment.count}
                </dd>
              </div>
            </dl>
            <div className="mt-6 space-y-4">
              <CourseProgress course={course.slug} lessons={lessonRefs.map((l) => l.slug)} />
              <CourseStartButton course={course.slug} lessons={lessonRefs} />
            </div>

            <section aria-labelledby="objetivos" className="mt-12">
              <h2 id="objetivos" className="text-h2 font-semibold tracking-[-0.02em]">
                Lo que aprenderás
              </h2>
              <ul className="mt-4 space-y-3">
                {course.objectives.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-[0.55em] size-2 shrink-0 rounded-[2px] bg-accent" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="temario" className="mt-12">
              <h2 id="temario" className="text-h2 font-semibold tracking-[-0.02em]">
                Temario
              </h2>
              <ol className="mt-4 border-t border-line">
                {course.lessons.map((l) => (
                  <li key={l.slug} className="border-b border-line">
                    <Link href={`/cursos/${course.slug}/${l.slug}/`} className="group flex items-center gap-4 py-4">
                      <span className="tabular w-9 shrink-0 font-mono text-small text-accent-text">{l.number}</span>
                      <span className="flex-1">
                        <span className="block font-semibold group-hover:underline">{l.title}</span>
                        <span className="block text-small text-muted">{l.objective}</span>
                        <span className="tabular mt-1 block font-mono text-caption text-muted">{l.minutes} min</span>
                      </span>
                      <LessonStatus course={course.slug} lesson={l.slug} />
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="space-y-4 lg:pt-1">
            <div className="rounded-lg border border-line bg-surface p-5">
              <ClipboardCheck className="text-accent-text" size={24} strokeWidth={1.8} aria-hidden="true" />
              <h2 className="mt-3 text-h4 font-semibold">Evaluación final</h2>
              <p className="mt-1 text-small text-muted">
                {course.assessment.count} preguntas al azar de un banco de {course.assessment.bank.length}. Se aprueba con{" "}
                {course.assessment.passMark}. Puedes repetirla.
              </p>
              <TextLink href={`/cursos/${course.slug}/evaluacion/`} className="mt-1">
                Ir a la evaluación
              </TextLink>
            </div>
            <div className="rounded-lg border border-line bg-surface p-5">
              <Award className="text-accent-text" size={24} strokeWidth={1.8} aria-hidden="true" />
              <h2 className="mt-3 text-h4 font-semibold">Certificado de finalización</h2>
              <p className="mt-1 text-small text-muted">
                Al aprobar, descárgalo como imagen o PDF. No tiene validez académica oficial.
              </p>
              <TextLink href={`/cursos/${course.slug}/certificado/`} className="mt-1">
                Ver el certificado
              </TextLink>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
