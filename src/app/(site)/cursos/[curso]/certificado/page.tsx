import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Certificate } from "@/components/certificate/Certificate";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { courseMinutes, courses, getCourse } from "@/content/courses";

type Params = { curso: string };

export function generateStaticParams(): Params[] {
  return courses.map((c) => ({ curso: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const course = getCourse((await params).curso);
  return course
    ? { title: `Certificado · ${course.title}`, robots: { index: false }, alternates: { canonical: `/cursos/${course.slug}/certificado/` } }
    : {};
}

export default async function CertificatePage({ params }: { params: Promise<Params> }) {
  const course = getCourse((await params).curso);
  if (!course) notFound();
  return (
    <main>
      <Container width="reading" className="pt-10">
        <TextLink href={`/cursos/${course.slug}/`} className="text-small text-muted">
          {course.title}
        </TextLink>
        <div className="mt-2">
          <Eyebrow>Certificado de finalización</Eyebrow>
        </div>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">{course.title}</h1>
        <div className="mt-8">
          <Certificate
            course={{ slug: course.slug, title: course.title, lessons: course.lessons.length, minutes: courseMinutes(course) }}
          />
        </div>
      </Container>
    </main>
  );
}
