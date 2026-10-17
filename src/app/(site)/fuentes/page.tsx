import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Typography";
import { courses, factsFor, lessonFacts } from "@/content/courses";
import type { Fact } from "@/content/schema";

export const metadata: Metadata = {
  title: "Fuentes y metodología",
  description: "Cómo verificamos cada dato legal o fiscal de las lecciones y qué fuentes oficiales usamos.",
  alternates: { canonical: "/fuentes/" },
};

const statusText: Record<Fact["status"], string> = {
  oficial: "Comprobado en la página oficial.",
  "texto legal": "Comprobado en una reproducción literal del texto legal publicado en el BOE.",
  "mutua colaboradora": "Comprobado en la tabla de una mutua colaboradora con la Seguridad Social. La cifra no aparece en las lecciones.",
  pendiente: "Pendiente de verificar. No se usa.",
};

const method = [
  {
    title: "Solo fuentes oficiales",
    text: "BOE, Agencia Tributaria, Seguridad Social, SEPE, Banco de España, CNMV y otros organismos públicos. Las lecciones siempre enlazan la fuente oficial.",
  },
  {
    title: "Cada dato, con su ficha",
    text: "Cualquier dato legal o fiscal (edades, porcentajes, obligaciones, qué dice una ley) tiene una ficha con la fuente, el enlace exacto y la fecha de consulta.",
  },
  {
    title: "Sin verificar, no se publica",
    text: "Una lección solo se publica si todos sus datos están verificados, y un curso solo aparece si lo están todas sus lecciones. Lo comprueba un test automático antes de cada publicación.",
  },
  {
    title: "Las cifras que cambian cada año, fuera",
    text: "Tramos, límites o fechas que cambian cada año no aparecen en las lecciones: explicamos el concepto y enlazamos la fuente oficial, que siempre estará al día.",
  },
  {
    title: "Ejemplos señalados",
    text: "Los sueldos, intereses y tramos de los ejemplos son inventados para practicar, y la lección lo dice. Nunca son previsiones ni recomendaciones.",
  },
];

function formatDate(d: string | null) {
  return d ?? "fecha no indicada";
}

export default function SourcesPage() {
  return (
    <main>
      <Container width="reading" className="pt-10">
        <Eyebrow>Fuentes y metodología</Eyebrow>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Cómo comprobamos lo que enseñamos</h1>
        <p className="mt-3 text-lead text-muted">
          En formación financiera, un dato mal puesto puede costar dinero. Por eso cada dato tiene una fuente oficial que puedes
          abrir tú.
        </p>

        <ol className="mt-10 space-y-6">
          {method.map((m, i) => (
            <li key={m.title} className="grid grid-cols-[2.25rem_1fr] gap-2">
              <span className="tabular font-display text-h3 leading-none font-semibold text-accent-text">{i + 1}</span>
              <div>
                <h2 className="font-body text-body font-semibold">{m.title}</h2>
                <p className="text-muted">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <section aria-labelledby="datos" className="mt-14">
          <h2 id="datos" className="text-h2 font-semibold tracking-[-0.02em]">
            Datos que usan las lecciones publicadas
          </h2>
          {courses.map((course) => {
            const ids = [...new Set(course.lessons.flatMap(lessonFacts))];
            const facts = factsFor(ids);
            return (
              <section key={course.slug} aria-labelledby={`f-${course.slug}`} className="mt-8">
                <h3 id={`f-${course.slug}`} className="text-h4 font-semibold">
                  Curso {course.number} · {course.title}
                </h3>
                {facts.length === 0 ? (
                  <p className="mt-2 text-muted">
                    Este curso no usa datos legales ni fiscales. Explica conceptos con ejemplos y todas sus cifras son inventadas
                    para practicar.
                  </p>
                ) : (
                  <ul className="mt-3 divide-y divide-line border-y border-line">
                    {facts.map((f) => {
                      const lessons = course.lessons.filter((l) => lessonFacts(l).includes(f.id)).map((l) => l);
                      return (
                        <li key={f.id} className="py-4">
                          <p>{f.claim}</p>
                          <a
                            href={f.source.url}
                            rel="noopener"
                            className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-small font-semibold text-accent-text underline underline-offset-4"
                          >
                            {f.source.label}
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>
                          <p className="text-caption text-muted">
                            <span className="tabular font-mono">{f.id}</span> · Consultado: {formatDate(f.checkedAt)} ·{" "}
                            {statusText[f.status]}
                            {f.annual ? " Cambia cada año: la lección no da la cifra." : ""}
                          </p>
                          <p className="mt-1 text-caption text-muted">
                            Se usa en:{" "}
                            {lessons.map((l, i) => (
                              <span key={l.slug}>
                                {i > 0 ? ", " : ""}
                                <Link href={`/cursos/${course.slug}/${l.slug}/`} className="underline underline-offset-2">
                                  {l.number}
                                </Link>
                              </span>
                            ))}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </section>

        <p className="mt-10 text-small text-muted">
          ¿Has visto un dato que ha cambiado? Las fuentes oficiales mandan: si no coincide, vale lo que diga la fuente enlazada.
        </p>
      </Container>
    </main>
  );
}
