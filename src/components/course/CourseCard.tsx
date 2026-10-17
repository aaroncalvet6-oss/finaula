import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CourseCover } from "@/components/ui/CourseCover";
import { courseMinutes } from "@/content/courses";
import type { Course } from "@/content/schema";
import { CourseProgress } from "./ProgressIslands";

/** Course card: colour only in the header strip, text on a neutral surface. */
export function CourseCard({ course, headingLevel = 3 }: { course: Course; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const lessons = course.lessons.map((l) => l.slug);
  return (
    <article className="group relative overflow-hidden rounded-lg border border-line bg-surface">
      <div
        className={`flex items-end justify-between px-5 pt-4 pb-3 ${
          course.tone === "alt" ? "bg-alt text-on-alt" : "bg-soft text-on-soft"
        }`}
      >
        <div>
          <p className="text-caption font-semibold">Curso</p>
          <p className="font-display text-[2.75rem] leading-none font-semibold">{course.number}</p>
        </div>
        <CourseCover motif={course.motif} />
      </div>
      <div className="px-5 pt-4 pb-5">
        <p className="eyebrow text-muted">Ruta · {course.area}</p>
        <H className="mt-1 text-h3 font-semibold tracking-[-0.015em]">
          <Link href={`/cursos/${course.slug}/`} className="after:absolute after:inset-0 after:content-['']">
            {course.title}
          </Link>
        </H>
        <p className="mt-2 text-small text-muted">{course.summary}</p>
        <p className="tabular mt-3 font-mono text-caption text-muted">
          {course.lessons.length} lecciones · {courseMinutes(course)} min · evaluación y certificado
        </p>
        <CourseProgress course={course.slug} lessons={lessons} className="mt-3" />
        <span className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-text group-hover:underline">
          Ver el curso <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
