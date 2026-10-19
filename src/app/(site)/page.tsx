import { ArrowRight, BadgeEuro, BookOpenCheck, Megaphone, ShoppingBag, UserRoundX } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { HeroButton } from "@/components/course/ProgressIslands";
import { LogoSymbol } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";
import { courses } from "@/content/courses";
import { founderStory, pisa, pisaSource } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  description:
    "Formación financiera para jóvenes de 14 a 18 años en España: cursos cortos, con datos comprobados en fuentes oficiales. Gratis, sin registro, sin anuncios y sin venderte nada.",
  path: "/",
});

const principles = [
  { Icon: BookOpenCheck, title: "Datos comprobados", text: "Cada dato legal o fiscal sale de una fuente oficial, con su enlace y su fecha de consulta." },
  { Icon: BadgeEuro, title: "Gratis", text: "Todos los cursos, herramientas y certificados." },
  { Icon: UserRoundX, title: "Sin registro", text: "No hay cuentas. Tu progreso se guarda solo en tu navegador." },
  { Icon: Megaphone, title: "Sin anuncios", text: "Nada compite con lo que estás aprendiendo." },
  { Icon: ShoppingBag, title: "Sin venderte nada", text: "Es formación, no asesoramiento: no recomendamos productos, bancos ni inversiones." },
];

export default function HomePage() {
  const first = courses[0];
  const source = pisaSource();
  const [opening, school, questions, ...rest] = founderStory.paragraphs;

  return (
    <main>
      <Container>
        <section className="relative pt-12 pb-12 sm:pt-20">
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
            <TextLink href="/cursos/" className="text-ink underline">
              Ver los cursos
            </TextLink>
          </div>
        </section>
      </Container>

      <section aria-labelledby="historia" className="border-y border-line bg-surface">
        <Container width="reading" className="py-14">
          <Eyebrow>{founderStory.title}</Eyebrow>
          <h2 id="historia" className="sr-only">
            {founderStory.title}
          </h2>
          <div className="mt-6 space-y-5 text-reading">
            <p className="font-display text-h3 leading-snug font-medium tracking-[-0.015em]">{opening}</p>
            <p>{school}</p>
            <p className="border-l-[3px] border-accent pl-5 font-medium">{questions}</p>
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-3 text-small font-semibold">
            <LogoSymbol size={22} />— {founderStory.signature}
          </p>
        </Container>
      </section>

      <Container>
        <section aria-labelledby="datos" className="pt-14">
          <SectionHeading id="datos" description={`Informe PISA ${pisa.year}, competencia financiera de los alumnos de 15 años.`}>
            Lo que dicen los datos
          </SectionHeading>
          <dl className="grid gap-6 sm:grid-cols-2">
            {pisa.stats.map((s) => (
              <div key={s.value} className="border-t-[3px] border-accent pt-4">
                <dt className="tabular font-mono text-[2.75rem] leading-none font-medium">{s.value}</dt>
                <dd className="mt-3">{s.text}</dd>
              </div>
            ))}
          </dl>
          <figure className="mt-8" aria-label="Alumnos en el nivel más alto de competencia financiera">
            <figcaption className="text-caption font-semibold text-muted">Alumnos en el nivel más alto</figcaption>
            <div className="mt-3 space-y-3">
              {[
                { label: "España", value: 4.7, text: "4,7 %", bar: "bg-accent" },
                { label: "Media OCDE", value: 10.6, text: "10,6 %", bar: "bg-mark" },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-[6.5rem_1fr_3.75rem] items-center gap-3">
                  <span className="text-small">{row.label}</span>
                  <span className="h-3 rounded-full bg-line" aria-hidden="true">
                    <span className={`block h-full rounded-full ${row.bar}`} style={{ width: `${(row.value / 12) * 100}%` }} />
                  </span>
                  <span className="tabular text-right font-mono text-small">{row.text}</span>
                </div>
              ))}
            </div>
          </figure>
          <p className="mt-6 text-caption text-muted">
            Fuente:{" "}
            <a href={source.url} rel="noopener" className="underline underline-offset-2">
              {source.label}
            </a>
            . Consultado el 19/10/2026.
          </p>
        </section>

        <section aria-labelledby="como" className="mt-14 border-t border-line pt-10">
          <SectionHeading id="como">Cómo lo hacemos</SectionHeading>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {principles.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <Icon className="mt-0.5 shrink-0 text-accent-text" size={22} strokeWidth={1.8} aria-hidden="true" />
                <span>
                  <span className="block font-semibold">{title}</span>
                  <span className="block text-small text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
          <TextLink href="/fuentes/" className="mt-5">
            Fuentes y metodología <ArrowRight size={16} aria-hidden="true" />
          </TextLink>
        </section>

        <section aria-labelledby="empieza" className="mt-14 rounded-lg bg-alt px-5 py-8 text-on-alt sm:px-8">
          <h2 id="empieza" className="max-w-[20ch] text-h2 font-semibold tracking-[-0.02em]">
            {first.lessons.length} lecciones cortas para entender tu dinero.
          </h2>
          <p className="mt-2 max-w-prose">
            Curso 1 · {first.title}. Empieza cuando quieras: tu progreso se guarda en este navegador.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={`/cursos/${first.slug}/`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-surface px-6 font-semibold text-ink hover:bg-bg"
            >
              Empieza por el curso 1 <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <TextLink href="/cursos/" className="text-on-alt underline">
              Ver todos los cursos
            </TextLink>
          </div>
        </section>
      </Container>
    </main>
  );
}
