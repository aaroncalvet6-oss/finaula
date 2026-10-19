import { ArrowRight, BookOpenCheck, Clock, Lock, Award, Users, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { courseMinutes, courses } from "@/content/courses";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Para familias y centros educativos",
  description:
    "Cómo usar Finaula en casa o en clase: lecciones de 5 a 8 minutos, temario publicado, fuentes oficiales, sin registro y sin recoger datos.",
  path: "/familias/",
});

function Point({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 shrink-0 text-accent-text">{icon}</span>
      <span>
        <span className="block font-semibold">{title}</span>
        <span className="block text-muted">{children}</span>
      </span>
    </li>
  );
}

export default function FamiliesPage() {
  const icon = { size: 22, strokeWidth: 1.8, "aria-hidden": true } as const;
  return (
    <main>
      <Container width="reading" className="pt-10">
        <Eyebrow>Familias y centros</Eyebrow>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Para familias y centros educativos</h1>
        <p className="mt-3 text-lead text-muted">
          Finaula está pensada para que un chico o una chica de 14 a 18 años aprenda solo. Pero funciona todavía mejor si
          alguien le acompaña.
        </p>

        <section aria-labelledby="centros" className="mt-12">
          <h2 id="centros" className="text-h2 font-semibold tracking-[-0.02em]">
            En clase
          </h2>
          <ul className="mt-5 space-y-5">
            <Point icon={<Clock {...icon} />} title="Lecciones que caben en una tutoría">
              Cada lección dura de 5 a 8 minutos y trabaja una sola idea, con un ejemplo, preguntas y un reto práctico.
            </Point>
            <Point icon={<BookOpenCheck {...icon} />} title="Temario publicado y fuentes oficiales">
              Puedes revisar antes qué se enseña en cada lección. Los datos legales y fiscales enlazan a su fuente oficial.
            </Point>
            <Point icon={<Lock {...icon} />} title="Sin registro y sin datos personales">
              El alumnado no crea cuentas y la web no recoge datos. El progreso se guarda solo en el navegador del
              dispositivo que se use.
            </Point>
            <Point icon={<Award {...icon} />} title="Evaluación final y certificado">
              Cada curso termina con una evaluación con preguntas al azar. Al aprobarla se descarga un certificado de
              finalización, que no tiene validez académica oficial.
            </Point>
          </ul>
        </section>

        <section aria-labelledby="casa" className="mt-12">
          <h2 id="casa" className="text-h2 font-semibold tracking-[-0.02em]">
            En casa
          </h2>
          <ul className="mt-5 space-y-5">
            <Point icon={<MessageCircle {...icon} />} title="Retos para hacer juntos">
              Muchos retos prácticos piden revisar algo con la familia: los movimientos de una tarjeta, una nómina o la
              campaña de la Renta. Son una buena excusa para hablar de dinero.
            </Point>
            <Point icon={<Users {...icon} />} title="Sin vender nada">
              Es formación, no asesoramiento: no recomendamos productos, entidades ni inversiones, y no hay anuncios.
            </Point>
          </ul>
        </section>

        <section aria-labelledby="cursos" className="mt-12 border-t border-line pt-6">
          <h2 id="cursos" className="text-h3 font-semibold">
            Cursos disponibles
          </h2>
          <ul className="mt-3 divide-y divide-line">
            {courses.map((c) => (
              <li key={c.slug} className="py-3">
                <TextLink href={`/cursos/${c.slug}/`}>
                  Curso {c.number} · {c.title}
                </TextLink>
                <p className="tabular font-mono text-caption text-muted">
                  {c.lessons.length} lecciones · {courseMinutes(c)} min
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-x-6">
            <TextLink href="/fuentes/">
              Fuentes y metodología <ArrowRight size={16} aria-hidden="true" />
            </TextLink>
            <TextLink href="/legal/">Privacidad y uso educativo</TextLink>
          </div>
        </section>
      </Container>
    </main>
  );
}
