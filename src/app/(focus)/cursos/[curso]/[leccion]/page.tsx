import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { LessonReader } from "@/components/lesson/LessonReader";
import { courses, factsFor, getLesson, lessonFacts } from "@/content/courses";
import { getTool } from "@/content/tools";

type Params = { curso: string; leccion: string };

export function generateStaticParams(): Params[] {
  return courses.flatMap((c) => c.lessons.map((l) => ({ curso: c.slug, leccion: l.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { curso, leccion } = await params;
  const found = getLesson(curso, leccion);
  if (!found) return {};
  return pageMetadata({
    title: `${found.lesson.number} · ${found.lesson.title}`,
    description: found.lesson.objective,
    path: `/cursos/${curso}/${leccion}/`,
    image: curso,
  });
}

export default async function LessonPage({ params }: { params: Promise<Params> }) {
  const { curso, leccion } = await params;
  const found = getLesson(curso, leccion);
  if (!found) notFound();
  const { course, lesson, index, next } = found;
  return (
    <LessonReader
      course={{ slug: course.slug, title: course.title, lessonCount: course.lessons.length }}
      lesson={lesson}
      index={index}
      next={next ? { slug: next.slug, number: next.number, title: next.title } : null}
      facts={factsFor(lessonFacts(lesson))}
      tool={lesson.tool ? (getTool(lesson.tool) ?? null) : null}
    />
  );
}
