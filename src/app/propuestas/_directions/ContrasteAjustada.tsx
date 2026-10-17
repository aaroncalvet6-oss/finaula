import { ArrowLeft, ArrowRight, BookOpenCheck, ChartPie, CircleUser, Clock, Lock, Scale, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { home, lesson, euro } from "../_shared/content";
import { Segments } from "../_shared/Progress";

const base = "/propuestas/c2";

const tools = [
  { Icon: Clock, sample: "90 € → 15 h" },
  { Icon: ChartPie, sample: "60 € · 20 % → 12 €" },
  { Icon: Target, sample: "180 € ÷ 20 sem → 9 €" },
  { Icon: TrendingUp, sample: "100 € · 5 % · 20 a → 265,33 €" },
];

const trustIcons = [BookOpenCheck, Scale, Lock];

function Symbol({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" aria-hidden="true">
      <rect x="9" y="2" width="15" height="15" rx="3.5" className="fill-mark" />
      <circle cx="9.5" cy="16.5" r="7.5" className="fill-accent" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href={base} className="flex min-h-11 items-center gap-2" aria-label="Finaula, inicio">
      <Symbol />
      <span className="font-display text-[1.375rem] font-bold tracking-[-0.025em]">finaula</span>
    </Link>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex gap-2 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">
      <span className="mt-[0.4em] size-2 shrink-0 rounded-[2px] bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-[1.75rem] leading-tight font-semibold tracking-[-0.02em]">{children}</h2>;
}

/** Subtle geometric cover for a course header. */
function CourseCover({ n }: { n: number }) {
  return (
    <svg width="96" height="56" viewBox="0 0 96 56" aria-hidden="true" className="opacity-90">
      {n === 1 ? (
        <>
          <circle cx="62" cy="36" r="20" className="fill-mark" />
          <circle cx="82" cy="20" r="14" fill="currentColor" opacity="0.18" />
        </>
      ) : (
        <>
          <rect x="44" y="26" width="12" height="30" rx="3" fill="currentColor" opacity="0.18" />
          <rect x="62" y="14" width="12" height="42" rx="3" fill="currentColor" opacity="0.18" />
          <rect x="80" y="2" width="12" height="54" rx="3" className="fill-mark" />
        </>
      )}
    </svg>
  );
}

export function ContrasteAjustadaHome() {
  const r = home.resume;
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Logo />
          <nav aria-label="Principal" className="flex items-center">
            <Link href="#cursos" className="inline-flex min-h-11 items-center px-2 text-[15px] font-medium">
              Cursos
            </Link>
            <Link href="#herramientas" className="inline-flex min-h-11 items-center px-2 text-[15px] font-medium">
              Herramientas
            </Link>
            <Link href="#" aria-label="Perfil" className="grid size-11 place-items-center">
              <CircleUser size={23} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5">
        <section className="relative pt-12 pb-12">
          <svg
            className="absolute top-10 right-0"
            width="48"
            height="48"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <rect x="24" y="0" width="40" height="40" rx="8" className="fill-mark" />
            <circle cx="24" cy="40" r="20" className="fill-accent" />
          </svg>
          <div className="pr-16">
            <Eyebrow>Para jóvenes de 14 a 18 años</Eyebrow>
          </div>
          <h1 className="mt-6 max-w-[15ch] font-display text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.03em]">
            Entiende <span className="text-accent-text">tu dinero</span> antes de que otros decidan por ti.
          </h1>
          <p className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-muted">{home.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={`${base}/leccion`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-on-accent"
            >
              {home.primary} <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#cursos" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
              {home.secondary}
            </Link>
          </div>
        </section>

        <section aria-labelledby="resume" className="rounded-2xl border border-line bg-surface px-5 py-5">
          <h2 id="resume" className="text-[14px] font-semibold text-muted">
            {r.label}
          </h2>
          <Link href={`${base}/leccion`} className="mt-3 flex items-center gap-4">
            <span className="tabular font-display text-[2.75rem] leading-none font-semibold text-accent-text">
              {r.number}
            </span>
            <span className="flex-1">
              <span className="block text-[17px] leading-snug font-semibold">{r.lesson}</span>
              <span className="mt-0.5 block text-[14px] text-muted">
                {r.course} · {r.minutes} min
              </span>
            </span>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-on-accent">
              <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <Segments
              done={r.done}
              total={r.total}
              label={`${r.done} de ${r.total} lecciones`}
              className="flex-1"
              filled="h-2 rounded-full bg-accent"
              empty="h-2 rounded-full bg-line"
            />
            <span className="tabular font-mono text-[13px] text-muted">
              {r.done}/{r.total}
            </span>
          </div>
        </section>

        <section aria-labelledby="confianza" className="mt-12 border-y border-line py-8">
          <SectionTitle>
            <span id="confianza">{home.trust.title}</span>
          </SectionTitle>
          <ul className="mt-5 space-y-5">
            {home.trust.points.map((p, i) => {
              const Icon = trustIcons[i];
              return (
                <li key={p} className="flex gap-4">
                  <Icon className="mt-0.5 shrink-0 text-accent-text" size={22} strokeWidth={1.8} aria-hidden="true" />
                  <span>{p}</span>
                </li>
              );
            })}
          </ul>
          <Link href="#" className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-text">
            {home.trust.link} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <section id="cursos" className="mt-12">
          <SectionTitle>Cursos</SectionTitle>
          <ul className="mt-5 space-y-4">
            {home.courses.map((c, i) => (
              <li key={c.number} className="overflow-hidden rounded-2xl border border-line bg-surface">
                <div
                  className={`flex items-end justify-between px-5 pt-4 pb-3 ${
                    i === 0 ? "bg-alt text-on-alt" : "bg-soft text-on-soft"
                  }`}
                >
                  <div>
                    <p className="text-[13px] font-semibold">Curso</p>
                    <p className="font-display text-[2.75rem] leading-none font-semibold">{c.number}</p>
                  </div>
                  <CourseCover n={c.number} />
                </div>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="font-display text-[1.375rem] leading-tight font-semibold tracking-[-0.015em]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.description}</p>
                  <p className="tabular mt-3 font-mono text-[13px] text-muted">
                    {c.lessons} lecciones · {c.minutes} min
                  </p>
                  <Segments
                    done={c.done}
                    total={c.lessons}
                    label={`${c.done} de ${c.lessons} lecciones`}
                    className="mt-3"
                    filled="h-2 rounded-full bg-accent"
                    empty="h-2 rounded-full bg-line"
                  />
                  <Link href="#" className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-text">
                    {c.done > 0 ? "Continuar" : "Empezar"} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-muted">
            <span className="font-semibold text-ink">Próximos cursos:</span> {home.upcoming.join(" · ")}
          </p>
        </section>

        <section id="herramientas" className="mt-12">
          <SectionTitle>Herramientas</SectionTitle>
          <ul className="mt-3">
            {home.tools.map((t, i) => {
              const { Icon, sample } = tools[i];
              return (
                <li key={t.title} className="border-b border-line last:border-0">
                  <Link href="#" className="flex gap-4 py-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-soft text-on-soft">
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold">{t.title}</span>
                      <span className="block text-[15px] leading-snug text-muted">{t.description}</span>
                      <span className="tabular mt-1.5 block font-mono text-[13px] text-ink">{sample}</span>
                    </span>
                    <ArrowRight size={18} className="mt-3 shrink-0 text-muted" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-2 text-[13px] text-muted">Las cifras son ejemplos. Ninguna rentabilidad está garantizada.</p>
        </section>

        <section className="mt-12">
          <SectionTitle>Cómo funciona</SectionTitle>
          <ol className="mt-5 space-y-5">
            {home.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-2">
                <span className="tabular font-display text-[1.75rem] leading-none font-semibold text-accent-text">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 border-l-[3px] border-alt pl-5">
          <SectionTitle>{home.families.title}</SectionTitle>
          <p className="mt-3">{home.families.text}</p>
          <Link href="#" className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-text">
            {home.families.link} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <footer className="mt-14 border-t border-line pt-8 pb-10 text-[15px] text-muted">
          <div className="flex items-center gap-2 text-ink">
            <Symbol size={22} />
            <span className="font-display text-lg font-bold tracking-[-0.02em]">finaula</span>
          </div>
          <p className="mt-3">Formación financiera para jóvenes. Es educación, no asesoramiento financiero.</p>
          <nav aria-label="Pie de página" className="mt-2 flex gap-5">
            <Link href="#" className="inline-flex min-h-11 items-center underline underline-offset-4">
              Fuentes y metodología
            </Link>
            <Link href="#" className="inline-flex min-h-11 items-center underline underline-offset-4">
              Legal
            </Link>
          </nav>
        </footer>
      </main>
    </>
  );
}

export function ContrasteAjustadaLesson() {
  const ex = lesson.example;
  const budget = 25;
  const segmentColors = ["bg-accent", "bg-mark", "bg-alt"];
  return (
    <>
      <header className="bg-alt text-on-alt">
        <div className="mx-auto max-w-2xl px-3 pt-2 pb-6">
          <div className="flex items-center justify-between">
            <Link href={base} aria-label="Volver al curso" className="grid size-11 place-items-center">
              <ArrowLeft size={22} aria-hidden="true" />
            </Link>
            <span className="tabular pr-2 font-mono text-[13px]">
              {lesson.index}/{lesson.total} · {lesson.minutes} MIN
            </span>
          </div>
          <div className="px-2">
            <p className="mt-3 text-[14px] font-medium">{lesson.course}</p>
            <p className="tabular mt-1 font-display text-[3.5rem] leading-none font-semibold">{lesson.number}</p>
            <h1 className="mt-3 font-display text-[1.875rem] leading-[1.08] font-semibold tracking-[-0.025em]">
              {lesson.title}
            </h1>
            <Segments
              done={lesson.currentStep + 1}
              total={lesson.steps.length}
              label="Progreso de la lección"
              className="mt-6"
              filled="h-2 rounded-full bg-mark"
              empty="h-2 rounded-full bg-on-alt/25"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[38rem] px-5 pt-8 pb-32">
        <p className="text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">Objetivo</p>
        <p className="mt-1 text-[18px] leading-[1.6] font-medium">{lesson.objective}</p>

        <p className="mt-6 text-[18px] leading-[1.7]">{lesson.intro}</p>

        <div className="mt-7 border-l-[3px] border-accent pl-5">
          <p className="font-display text-[1.25rem] font-semibold">{lesson.concept.term}</p>
          <p className="mt-1 text-[18px] leading-[1.65]">{lesson.concept.definition}</p>
        </div>

        <section className="mt-12" aria-labelledby="ejemplo">
          <Eyebrow>Ejemplo</Eyebrow>
          <h2 id="ejemplo" className="mt-2 font-display text-[1.625rem] font-semibold tracking-[-0.02em]">
            {ex.title}
          </h2>
          <p className="mt-2 text-[18px] leading-[1.7]">{ex.setup}</p>
          <div className="mt-6 space-y-6">
            {ex.options.map((o) => {
              const total = o.items.reduce((sum, item) => sum + item.amount, 0);
              return (
                <figure key={o.label}>
                  <figcaption className="flex items-baseline justify-between">
                    <span className="font-semibold">{o.label}</span>
                    <span className="tabular font-mono text-[13px] text-muted">
                      {euro(total)} de {euro(budget)}
                    </span>
                  </figcaption>
                  <div className="mt-2 flex h-9 gap-[3px] overflow-hidden rounded-lg bg-line" aria-hidden="true">
                    {o.items.map((item, i) => (
                      <span
                        key={item.name}
                        className={`${segmentColors[i]} h-full`}
                        style={{ width: `${(item.amount / budget) * 100}%` }}
                      />
                    ))}
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[16px]">
                    {o.items.map((item, i) => (
                      <li key={item.name} className="flex items-center gap-2.5">
                        <span className={`size-3 shrink-0 rounded-[3px] ${segmentColors[i]}`} aria-hidden="true" />
                        <span className="flex-1">{item.name}</span>
                        <span className="tabular font-mono text-[15px]">{euro(item.amount)}</span>
                      </li>
                    ))}
                  </ul>
                </figure>
              );
            })}
          </div>
          <p className="mt-6 text-[18px] leading-[1.7]">{ex.takeaway}</p>
          <div className="mt-6 rounded-xl border border-line bg-surface px-4 py-4">
            <p className="text-[13px] font-semibold text-muted">En horas de trabajo</p>
            <p className="tabular mt-1 font-mono text-[1.375rem]">
              20 € ÷ 8 €/h = <span className="font-semibold text-accent-text">2,5 h</span>
            </p>
            <p className="mt-1.5 text-[15px] text-muted">{ex.hoursNote}</p>
          </div>
        </section>

        <figure className="mt-12 border-y border-line py-7">
          <figcaption className="text-[13px] font-semibold tracking-[0.04em] text-accent-text uppercase">
            Dato clave
          </figcaption>
          <blockquote className="mt-2 font-display text-[1.375rem] leading-snug font-medium tracking-[-0.01em]">
            {lesson.keyFact}
          </blockquote>
        </figure>

        <section className="mt-12" aria-labelledby="pregunta">
          <p className="tabular font-mono text-[13px] text-muted">PREGUNTA 2/4</p>
          <h2 id="pregunta" className="mt-2 text-[18px] leading-[1.6] font-semibold">
            {lesson.question.prompt}
          </h2>
          <fieldset className="mt-4 space-y-3">
            <legend className="sr-only">Elige una respuesta</legend>
            {lesson.question.options.map((o, i) => (
              <label
                key={o}
                className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border-[1.5px] bg-surface px-4 py-3 ${
                  i === 0 ? "border-ink" : "border-line"
                }`}
              >
                <input type="radio" name="q" defaultChecked={i === 0} className="sr-only" />
                <span
                  className={`grid size-7 shrink-0 place-items-center rounded-full border-[1.5px] font-mono text-[13px] ${
                    i === 0 ? "border-ink bg-ink text-bg" : "border-line text-muted"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-[16px]">{o}</span>
              </label>
            ))}
          </fieldset>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 border-t border-line bg-bg">
        <div className="mx-auto flex max-w-[38rem] items-center justify-between gap-4 px-5 py-3">
          <span className="text-[14px] text-muted">Paso 2 de 6 · guardado</span>
          <button type="button" className="h-12 rounded-full bg-accent px-7 font-semibold text-on-accent">
            Comprobar
          </button>
        </div>
      </div>
    </>
  );
}
