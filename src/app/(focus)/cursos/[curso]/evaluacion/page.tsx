import { X } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Assessment } from "@/components/assessment/Assessment";
import { Container } from "@/components/layout/Container";
import { courses, getCourse } from "@/content/courses";

type Params = { curso: string };

export function generateStaticParams(): Params[] {
  return courses.map((c) => ({ curso: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const course = getCourse((await params).curso);
  return course
    ? pageMetadata({
        title: `Evaluación final · ${course.title}`,
        description: `Evaluación final del curso ${course.title}: ${course.assessment.count} preguntas, se aprueba con ${course.assessment.passMark}.`,
        path: `/cursos/${course.slug}/evaluacion/`,
        image: course.slug,
      })
    : {};
}

export default async function AssessmentPage({ params }: { params: Promise<Params> }) {
  const course = getCourse((await params).curso);
  if (!course) notFound();
  return (
    <>
      <header className="bg-alt text-on-alt">
        <Container width="reading" className="pt-2 pb-7">
          <div className="-mx-2 flex items-center justify-between">
            <span className="px-2 text-small font-medium">{course.title}</span>
            <Link href={`/cursos/${course.slug}/`} aria-label="Salir de la evaluación" className="grid size-11 place-items-center rounded-full">
              <X size={22} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-4 text-small font-semibold">Evaluación final</p>
          <h1 className="mt-1 text-h1 font-semibold tracking-[-0.025em]">¿Cuánto has aprendido?</h1>
        </Container>
      </header>
      <main>
        <Container width="reading" className="pt-8 pb-20">
          <Assessment
            course={{ slug: course.slug, title: course.title }}
            bank={course.assessment.bank}
            count={course.assessment.count}
            passMark={course.assessment.passMark}
            lessonSlugs={Object.fromEntries(course.lessons.map((l) => [l.number, l.slug]))}
          />
        </Container>
      </main>
    </>
  );
}
