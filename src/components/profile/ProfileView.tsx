"use client";

import { Award, Trash2 } from "lucide-react";
import { useState } from "react";
import { CourseProgress } from "@/components/course/ProgressIslands";
import { Button, ButtonLink, TextLink } from "@/components/ui/Button";
import { formatCertificateDate } from "@/lib/certificate";
import { completedCount } from "@/lib/progress/reducers";
import { useHydratedProgress } from "@/lib/progress/useHydratedProgress";

interface CourseRef {
  slug: string;
  title: string;
  number: number;
  lessons: ReadonlyArray<string>;
}

export function ProfileView({ courses }: { courses: ReadonlyArray<CourseRef> }) {
  const { hydrated, progress, profile, setCertificateName, clearAll } = useHydratedProgress();
  const [confirming, setConfirming] = useState(false);
  if (!hydrated) return <div className="h-64 rounded-md bg-sunken" aria-hidden="true" />;

  const certificates = courses.filter((c) => progress.assessments[c.slug]?.passed);

  return (
    <div className="space-y-12">
      <section aria-labelledby="cursos-title">
        <h2 id="cursos-title" className="text-h2 font-semibold tracking-[-0.02em]">
          Cursos
        </h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {courses.map((c) => {
            const done = completedCount(progress, c.slug, c.lessons);
            const a = progress.assessments[c.slug];
            return (
              <li key={c.slug} className="py-5">
                <p className="text-caption font-semibold text-muted">Curso {c.number}</p>
                <h3 className="font-body text-h4 font-semibold">{c.title}</h3>
                <CourseProgress course={c.slug} lessons={c.lessons} className="mt-3" />
                <p className="mt-2 text-small text-muted">
                  {done === c.lessons.length ? "Todas las lecciones completadas." : `${done} de ${c.lessons.length} lecciones completadas.`}{" "}
                  {a
                    ? `Evaluación: mejor resultado ${a.bestScore}/${a.total}${a.passed ? ", aprobada" : ""}.`
                    : "Evaluación sin hacer."}
                </p>
                <TextLink href={`/cursos/${c.slug}/`} className="text-small">
                  {done === 0 ? "Empezar" : "Ir al curso"}
                </TextLink>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="certificados-title">
        <h2 id="certificados-title" className="text-h2 font-semibold tracking-[-0.02em]">
          Certificados
        </h2>
        {certificates.length === 0 ? (
          <p className="mt-3 text-muted">Aún no tienes ninguno. Aprueba la evaluación final de un curso para conseguirlo.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {certificates.map((c) => {
              const a = progress.assessments[c.slug];
              return (
                <li key={c.slug} className="flex items-center gap-4 rounded-md border border-line bg-surface p-4">
                  <Award size={28} strokeWidth={1.7} className="shrink-0 text-accent-text" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-semibold">{c.title}</p>
                    <p className="tabular font-mono text-caption text-muted">
                      {a.passedAt ? formatCertificateDate(a.passedAt) : ""} · {a.certificateId}
                    </p>
                  </div>
                  <ButtonLink href={`/cursos/${c.slug}/certificado/`} variant="secondary" size="sm">
                    Ver
                  </ButtonLink>
                </li>
              );
            })}
          </ul>
        )}
        <div className="mt-6">
          <label htmlFor="profile-name" className="block font-semibold">
            Nombre para tus certificados
          </label>
          <input
            id="profile-name"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={profile.certificateName}
            onChange={(e) => setCertificateName(e.target.value)}
            className="mt-2 h-12 w-full rounded-md border-[1.5px] border-line-strong bg-surface px-4 focus:border-accent focus:outline-none"
          />
        </div>
      </section>

      <section aria-labelledby="datos-title" className="border-t border-line pt-6">
        <h2 id="datos-title" className="text-h3 font-semibold">
          Tus datos
        </h2>
        <p className="mt-2 text-small text-muted">
          Se guardan en este navegador con las claves <code className="font-mono">finaula:progress</code> y{" "}
          <code className="font-mono">finaula:profile</code>. Puedes borrarlos cuando quieras.
        </p>
        {confirming ? (
          <div className="mt-4 rounded-md border border-danger bg-danger-soft p-4 text-on-danger-soft" role="alert">
            <p className="font-semibold">¿Seguro? Se borrarán tu progreso, tus resultados y tu nombre. No se puede deshacer.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button
                onClick={async () => {
                  await clearAll();
                  setConfirming(false);
                }}
              >
                Sí, borrar todo
              </Button>
              <Button variant="secondary" onClick={() => setConfirming(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        ) : (
          <Button variant="secondary" className="mt-4" onClick={() => setConfirming(true)}>
            <Trash2 size={18} aria-hidden="true" /> Borrar mis datos
          </Button>
        )}
      </section>
    </div>
  );
}
