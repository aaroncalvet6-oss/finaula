import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CourseCard } from "@/components/course/CourseCard";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Typography";
import { areas, courses, upcomingCourses, type Area } from "@/content/courses";

export const metadata: Metadata = pageMetadata({
  title: "Cursos",
  description: `Cursos cortos de formación financiera para jóvenes: ${courses.map((c) => c.title).join(", ")}. Con evaluación y certificado.`,
  path: "/cursos/",
});

const areaIntro: Record<Area, string> = {
  "Tu dinero hoy": "El dinero que ya manejas: cómo funciona, cómo organizarlo y cómo pagar.",
  "Trabajo e ingresos": "Cómo se gana el dinero y qué pasa con tu sueldo.",
  "Hacer crecer tu dinero": "Ahorrar con un plan y entender qué es invertir y sus riesgos.",
  "Protégete y entiende el mundo": "Estafas, deudas, impuestos y economía: lo que te afecta aunque no lo veas.",
};

export default function CoursesPage() {
  return (
    <main>
      <Container className="pt-10">
        <Eyebrow>Cursos</Eyebrow>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Aprende paso a paso</h1>
        <p className="mt-3 max-w-prose text-lead text-muted">
          Lecciones de 5 a 8 minutos, una evaluación final y un certificado al aprobar. Puedes empezar por cualquiera.
        </p>
        {areas.map((area, i) => {
          const published = courses.filter((c) => c.area === area);
          const upcoming = upcomingCourses.filter((u) => u.area === area);
          const id = `area-${i + 1}`;
          return (
            <section key={area} aria-labelledby={id} className="mt-12 border-t border-line pt-6">
              <h2 id={id} className="text-h2 font-semibold tracking-[-0.02em]">
                {area}
              </h2>
              <p className="mt-1 max-w-prose text-small text-muted">{areaIntro[area]}</p>
              {published.length > 0 ? (
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {published.map((c) => (
                    <li key={c.slug}>
                      <CourseCard course={c} headingLevel={3} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {upcoming.length > 0 ? (
                <div className="mt-5">
                  <h3 className="text-caption font-semibold text-muted">Próximos cursos</h3>
                  <ul className="mt-1.5 space-y-1 text-small text-muted">
                    {upcoming.map((u) => (
                      <li key={u.number}>
                        <span className="tabular font-mono">{u.number}</span> · {u.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          );
        })}
      </Container>
    </main>
  );
}
