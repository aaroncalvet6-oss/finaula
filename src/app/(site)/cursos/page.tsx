import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CourseCard } from "@/components/course/CourseCard";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Typography";
import { courses, upcomingCourses } from "@/content/courses";

export const metadata: Metadata = pageMetadata({
  title: "Cursos",
  description: "Cursos cortos de formación financiera para jóvenes: Fundamentos del dinero y Tu primer sueldo. Con evaluación y certificado.",
  path: "/cursos/",
});

export default function CoursesPage() {
  return (
    <main>
      <Container className="pt-10">
        <Eyebrow>Cursos</Eyebrow>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Aprende paso a paso</h1>
        <p className="mt-3 max-w-prose text-lead text-muted">
          Lecciones de 5 a 8 minutos, una evaluación final y un certificado al aprobar. Puedes empezar por cualquiera.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {courses.map((c) => (
            <li key={c.slug}>
              <CourseCard course={c} headingLevel={2} />
            </li>
          ))}
        </ul>
        <section aria-labelledby="proximos" className="mt-12 border-t border-line pt-6">
          <h2 id="proximos" className="text-h4 font-semibold">
            Próximos cursos
          </h2>
          <ul className="mt-2 space-y-1 text-small text-muted">
            {upcomingCourses.map((u) => (
              <li key={u.title}>
                {u.title} · {u.area}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
