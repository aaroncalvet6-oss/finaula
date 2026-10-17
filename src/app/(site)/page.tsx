import { ArrowRight, BookOpenCheck, ChartPie, Clock, Lock, Scale, Target, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/course/CourseCard";
import { HeroButton, ResumeCard } from "@/components/course/ProgressIslands";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";
import { courses, upcomingCourses } from "@/content/courses";
import { tools } from "@/content/tools";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const toolIcons = { "horas-de-trabajo": Clock, presupuesto: ChartPie, "meta-de-ahorro": Target, "interes-compuesto": TrendingUp };

const trust = [
  {
    Icon: BookOpenCheck,
    text: "Cada dato legal o fiscal está comprobado en fuentes oficiales, como el BOE, la Agencia Tributaria o la Seguridad Social, con su enlace y la fecha de consulta.",
  },
  { Icon: Scale, text: "Es formación, no asesoramiento. Nunca te recomendamos productos, bancos ni inversiones." },
  { Icon: Lock, text: "Tu progreso se guarda solo en tu navegador. No hay cuentas, ni anuncios, ni recogemos datos." },
];

const steps = [
  { title: "Aprende en 5 a 8 minutos", text: "Cada lección explica una idea con un ejemplo de tu vida y cifras claras." },
  { title: "Practica con tus cifras", text: "Preguntas con explicación y herramientas para probar con tu paga o tu sueldo." },
  { title: "Demuestra lo que sabes", text: "Aprueba la evaluación final de cada curso y descarga tu certificado de finalización." },
];

export default function HomePage() {
  const first = courses[0];
  const resumeCourses = courses.map((c) => ({
    slug: c.slug,
    title: c.title,
    lessons: c.lessons.map((l) => ({ slug: l.slug, number: l.number, title: l.title, minutes: l.minutes })),
  }));

  return (
    <main>
      <Container>
        <section className="relative pt-12 pb-10 sm:pt-20">
          <svg className="absolute top-11 right-0 sm:top-[4.75rem]" width="36" height="36" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M17 15V1A14 14 0 0 1 31 15Z" className="fill-mark" />
            <rect x="1" y="17" width="14" height="14" rx="3" className="fill-accent" />
          </svg>
          <div className="pr-14">
            <Eyebrow>Para jóvenes de 14 a 18 años</Eyebrow>
          </div>
          <h1 className="mt-6 max-w-[15ch] text-display font-semibold tracking-[-0.03em] sm:text-[3.5rem]">
            Entiende <span className="text-accent-text">tu dinero</span> antes de que otros decidan por ti.
          </h1>
          <p className="mt-5 max-w-[34rem] text-lead text-muted">
            Cursos cortos de formación financiera con ejemplos reales, herramientas para practicar con tus cifras y un
            certificado al terminar. Sin registro, sin anuncios y sin venderte nada.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <HeroButton firstLessonHref={`/cursos/${first.slug}/${first.lessons[0].slug}/`} />
            <TextLink href="#cursos" className="text-ink underline">
              Ver los cursos
            </TextLink>
          </div>
        </section>

        <ResumeCard courses={resumeCourses} />

        <section aria-labelledby="confianza" className="mt-12 border-y border-line py-8">
          <SectionHeading id="confianza">Por qué puedes fiarte</SectionHeading>
          <ul className="grid gap-5 sm:grid-cols-3">
            {trust.map(({ Icon, text }) => (
              <li key={text} className="flex gap-4 sm:flex-col sm:gap-3">
                <Icon className="mt-0.5 shrink-0 text-accent-text" size={22} strokeWidth={1.8} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <TextLink href="/fuentes/" className="mt-5">
            Fuentes y metodología <ArrowRight size={16} aria-hidden="true" />
          </TextLink>
        </section>

        <section id="cursos" aria-labelledby="cursos-title" className="mt-14 scroll-mt-6">
          <SectionHeading id="cursos-title" description="Cada curso pertenece a una ruta. Empieza por el que quieras.">
            Rutas y cursos
          </SectionHeading>
          <ul className="grid gap-4 sm:grid-cols-2">
            {courses.map((c) => (
              <li key={c.slug}>
                <CourseCard course={c} />
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="font-body text-small font-semibold">Próximos cursos</h3>
            <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-small text-muted">
              {upcomingCourses.map((u) => (
                <li key={u.title}>
                  {u.title} <span className="text-caption">· {u.area}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="herramientas-title" className="mt-14">
          <SectionHeading id="herramientas-title" description="Practica con tus propias cifras. Cada herramienta va unida a su lección.">
            Herramientas
          </SectionHeading>
          <ul className="grid sm:grid-cols-2 sm:gap-x-8">
            {tools.map((t) => {
              const Icon = toolIcons[t.slug];
              return (
                <li key={t.slug} className="border-b border-line">
                  <Link href={`/herramientas/${t.slug}/`} className="group flex gap-4 py-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-soft text-on-soft">
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold group-hover:underline">{t.title}</span>
                      <span className="block text-small text-muted">{t.summary}</span>
                      <span className="tabular mt-1.5 block font-mono text-caption text-ink">{t.sample}</span>
                      {t.slug === "interes-compuesto" ? (
                        <span className="mt-1 block text-caption text-muted">Ninguna rentabilidad está garantizada.</span>
                      ) : null}
                    </span>
                    <ArrowRight size={18} className="mt-3 shrink-0 text-muted" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-caption text-muted">Las cifras son ejemplos.</p>
        </section>

        <section aria-labelledby="como-title" className="mt-14">
          <SectionHeading id="como-title">Cómo funciona</SectionHeading>
          <ol className="grid gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-2 sm:block">
                <span className="tabular font-display text-h2 leading-none font-semibold text-accent-text">{i + 1}</span>
                <div className="sm:mt-3">
                  <h3 className="font-body text-body font-semibold">{s.title}</h3>
                  <p className="text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="familias-title" className="mt-14 border-l-[3px] border-alt pl-5">
          <SectionHeading id="familias-title">Para familias y centros educativos</SectionHeading>
          <p className="max-w-prose">
            Lecciones cortas que caben en una tutoría, con un temario publicado, fuentes oficiales y preguntas que comprueban si
            se ha entendido. No hace falta registro y no se recoge ningún dato personal, así que se puede usar en clase sin
            trámites.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-6">
            <TextLink href="/cursos/">
              Ver el temario de los cursos <ArrowRight size={16} aria-hidden="true" />
            </TextLink>
            <TextLink href="/legal/">Privacidad y uso educativo</TextLink>
          </div>
        </section>
      </Container>
    </main>
  );
}
