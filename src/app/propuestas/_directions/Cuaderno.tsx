import { ArrowLeft, ArrowRight, CircleUser, Clock, ChartPie, Target, TrendingUp, X } from "lucide-react";
import Link from "next/link";
import { home, lesson, euro } from "../_shared/content";
import { Segments } from "../_shared/Progress";

const toolIcons = [Clock, ChartPie, Target, TrendingUp];

function Logo() {
  return (
    <Link href="/propuestas/a" className="flex min-h-11 items-center gap-2.5" aria-label="Finaula, inicio">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="4" className="fill-ink" />
        <path d="M8 21V9.5C8 7.6 9.4 6.5 11.3 6.5H20" className="stroke-bg" strokeWidth="2.4" fill="none" />
        <path d="M8 13.5h8.5" className="stroke-mark" strokeWidth="2.4" />
      </svg>
      <span className="font-display text-[1.375rem] font-medium tracking-tight">Finaula</span>
    </Link>
  );
}

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4 border-t border-ink pt-4">
      <span className="tabular font-mono text-sm text-muted">{index}</span>
      <h2 className="font-display text-[1.75rem] leading-tight font-normal tracking-tight">{title}</h2>
    </div>
  );
}

export function CuadernoHome() {
  const r = home.resume;
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Logo />
          <Link
            href="#"
            aria-label="Perfil"
            className="grid size-11 place-items-center rounded-full text-ink hover:bg-alt"
          >
            <CircleUser size={24} strokeWidth={1.6} />
          </Link>
        </div>
        <nav aria-label="Principal" className="mx-auto max-w-3xl px-5">
          <ul className="-mb-px flex gap-6 text-[15px]">
            {["Inicio", "Cursos", "Herramientas"].map((item, i) => (
              <li key={item}>
                <Link
                  href="#"
                  aria-current={i === 0 ? "page" : undefined}
                  className={`flex min-h-11 items-center border-b-2 ${
                    i === 0 ? "border-ink font-medium text-ink" : "border-transparent text-muted"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5">
        <section className="pt-10 pb-12">
          <p className="mb-5 flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] text-muted uppercase">
            <span className="h-px w-8 bg-muted" aria-hidden="true" />
            {home.eyebrow}
          </p>
          <h1 className="font-display text-[2.75rem] leading-[1.04] font-normal tracking-[-0.02em]">
            Entiende <span className="shadow-[inset_0_-0.32em_0_var(--t-mark)]">tu dinero</span> antes de
            que otros decidan por ti.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">{home.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/propuestas/a/leccion"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-5 font-medium text-on-accent"
            >
              {home.primary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#cursos" className="inline-flex min-h-11 items-center font-medium underline underline-offset-4">
              {home.secondary}
            </Link>
          </div>
        </section>

        <section aria-labelledby="resume" className="mb-14 border-y border-line py-5">
          <h2 id="resume" className="text-[13px] font-medium tracking-[0.08em] text-muted uppercase">
            {r.label}
          </h2>
          <Link href="/propuestas/a/leccion" className="mt-3 flex items-start gap-4">
            <span className="tabular font-display text-[2.5rem] leading-none text-accent-text">{r.number}</span>
            <span className="flex-1">
              <span className="block font-display text-xl leading-snug">{r.lesson}</span>
              <span className="mt-1 block text-[15px] text-muted">
                {r.course} · {r.minutes} min
              </span>
            </span>
            <ArrowRight className="mt-2 shrink-0" size={20} aria-hidden="true" />
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <Segments
              done={r.done}
              total={r.total}
              label={`${r.done} de ${r.total} lecciones`}
              className="flex-1"
              filled="h-[3px] bg-accent"
              empty="h-[3px] bg-line"
            />
            <span className="tabular text-sm text-muted">
              {r.done} de {r.total}
            </span>
          </div>
        </section>

        <section id="cursos" className="mb-14">
          <SectionHead index="01" title="Cursos" />
          <ol>
            {home.courses.map((c) => (
              <li key={c.number} className="border-b border-line py-6 first:pt-0">
                <p className="text-[13px] font-medium tracking-[0.08em] text-muted uppercase">Curso {c.number}</p>
                <h3 className="mt-1 font-display text-[1.625rem] leading-tight">{c.title}</h3>
                <p className="mt-2 text-muted">{c.description}</p>
                <p className="tabular mt-3 text-[15px]">
                  {c.lessons} lecciones · {c.minutes} min
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <Segments
                      done={c.done}
                      total={c.lessons}
                      label={`${c.done} de ${c.lessons} lecciones`}
                      filled="h-[3px] bg-accent"
                      empty="h-[3px] bg-line"
                    />
                  </div>
                  <Link
                    href="#"
                    className="inline-flex min-h-11 items-center gap-1.5 font-medium text-accent-text"
                  >
                    {c.done > 0 ? "Continuar" : "Empezar"}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] text-muted">
            <span className="font-medium text-ink">Próximos cursos:</span> {home.upcoming.join(" · ")}
          </p>
        </section>

        <section className="mb-14">
          <SectionHead index="02" title="Herramientas" />
          <ul>
            {home.tools.map((t, i) => {
              const Icon = toolIcons[i];
              return (
                <li key={t.title} className="border-b border-line last:border-0">
                  <Link href="#" className="flex gap-4 py-4">
                    <Icon className="mt-1 shrink-0 text-accent-text" size={22} strokeWidth={1.6} aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block font-medium">{t.title}</span>
                      <span className="block text-[15px] text-muted">{t.description}</span>
                      <span className="mt-1 block text-[13px] text-muted">Se trabaja en la {t.lesson.toLowerCase()}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mb-14">
          <SectionHead index="03" title="Cómo funciona" />
          <ol className="space-y-6">
            {home.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-2">
                <span className="font-display text-[2rem] leading-none text-accent-text">{i + 1}</span>
                <div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <section className="bg-soft text-on-soft">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="font-display text-[1.75rem] leading-tight">{home.trust.title}</h2>
          <ul className="mt-5 space-y-4">
            {home.trust.points.map((p) => (
              <li key={p} className="border-l-2 border-on-soft pl-4">
                {p}
              </li>
            ))}
          </ul>
          <Link href="#" className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-medium underline underline-offset-4">
            {home.trust.link}
          </Link>
        </div>
      </section>

      <section className="bg-alt text-on-alt">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="font-display text-[1.75rem] leading-tight">{home.families.title}</h2>
          <p className="mt-3">{home.families.text}</p>
          <Link href="#" className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-medium underline underline-offset-4">
            {home.families.link}
          </Link>
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-5 py-10 text-[15px] text-muted">
        <p className="font-display text-xl text-ink">Finaula</p>
        <p className="mt-2">Formación financiera para jóvenes. Es educación, no asesoramiento financiero.</p>
        <nav aria-label="Pie de página" className="mt-4 flex gap-6">
          <Link href="#" className="inline-flex min-h-11 items-center underline underline-offset-4">
            Fuentes y metodología
          </Link>
          <Link href="#" className="inline-flex min-h-11 items-center underline underline-offset-4">
            Legal
          </Link>
        </nav>
      </footer>
    </>
  );
}

export function CuadernoLesson() {
  const ex = lesson.example;
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-3">
          <Link href="/propuestas/a" aria-label="Volver al curso" className="grid size-11 place-items-center">
            <ArrowLeft size={22} aria-hidden="true" />
          </Link>
          <p className="text-[15px] text-muted">
            Lección {lesson.index} de {lesson.total} · {lesson.minutes} min
          </p>
          <Link href="/propuestas/a" aria-label="Cerrar lección" className="grid size-11 place-items-center">
            <X size={22} aria-hidden="true" />
          </Link>
        </div>
        <Segments
          done={lesson.currentStep + 1}
          total={lesson.steps.length}
          label="Progreso de la lección"
          className="gap-0.5"
          filled="h-[3px] bg-accent"
          empty="h-[3px] bg-line"
        />
      </header>

      <main className="mx-auto max-w-2xl px-5 pt-8 pb-32">
        <p className="text-[13px] font-medium tracking-[0.08em] text-muted uppercase">
          {lesson.course} · {lesson.number}
        </p>
        <h1 className="mt-2 font-display text-[2.125rem] leading-[1.08] tracking-[-0.015em]">{lesson.title}</h1>
        <p className="mt-4 font-display text-xl leading-snug text-muted italic">{lesson.objective}</p>

        <p className="mt-8 text-[18px] leading-[1.65]">{lesson.intro}</p>

        <div className="mt-8 border-l-2 border-accent pl-5">
          <p className="text-[13px] font-medium tracking-[0.08em] text-accent-text uppercase">{lesson.concept.term}</p>
          <p className="mt-1 text-[18px] leading-[1.6]">{lesson.concept.definition}</p>
        </div>

        <section className="mt-12" aria-labelledby="ejemplo">
          <h2 id="ejemplo" className="font-display text-[1.625rem] leading-tight">
            <span className="text-muted">Ejemplo · </span>
            {ex.title}
          </h2>
          <p className="mt-3 text-[18px]">{ex.setup}</p>
          <div className="mt-6 space-y-6">
            {ex.options.map((o) => {
              const total = o.items.reduce((sum, item) => sum + item.amount, 0);
              return (
                <div key={o.label}>
                  <p className="font-medium">{o.label}</p>
                  <dl className="mt-2">
                    {o.items.map((item) => (
                      <div key={item.name} className="flex items-baseline gap-2 py-1.5">
                        <dt className="shrink">{item.name}</dt>
                        <span className="min-w-4 flex-1 border-b border-dotted border-muted" aria-hidden="true" />
                        <dd className="tabular">{euro(item.amount)}</dd>
                      </div>
                    ))}
                    <div className="mt-1 flex justify-between border-t border-ink pt-2 font-medium">
                      <dt>Total</dt>
                      <dd className="tabular">{euro(total)}</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-[18px] leading-[1.65]">{ex.takeaway}</p>
          <div className="mt-6 bg-alt px-5 py-4 text-on-alt">
            <p className="tabular font-display text-[1.75rem]">
              20 € ÷ 8 €/h = <span className="shadow-[inset_0_-0.3em_0_var(--t-mark)]">2,5 h</span>
            </p>
            <p className="mt-1 text-[15px]">{ex.hoursNote}</p>
          </div>
        </section>

        <figure className="mt-12 border-y border-line py-8">
          <p className="text-[13px] font-medium tracking-[0.08em] text-muted uppercase">Dato clave</p>
          <blockquote className="mt-3 font-display text-[1.625rem] leading-snug italic">{lesson.keyFact}</blockquote>
        </figure>

        <section className="mt-12" aria-labelledby="pregunta">
          <p className="text-[13px] font-medium tracking-[0.08em] text-muted uppercase">Pregunta 2 de 4</p>
          <h2 id="pregunta" className="mt-2 text-[18px] leading-[1.6] font-medium">
            {lesson.question.prompt}
          </h2>
          <fieldset className="mt-5 space-y-3">
            <legend className="sr-only">Elige una respuesta</legend>
            {lesson.question.options.map((o, i) => (
              <label
                key={o}
                className={`flex min-h-14 cursor-pointer items-center gap-4 rounded-md border px-4 py-3 ${
                  i === 0 ? "border-ink bg-surface" : "border-line"
                }`}
              >
                <input type="radio" name="q" defaultChecked={i === 0} className="sr-only" />
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full border font-display ${
                    i === 0 ? "border-accent bg-accent text-on-accent" : "border-muted"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{o}</span>
              </label>
            ))}
          </fieldset>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 border-t border-line bg-bg">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-3">
          <span className="text-[15px] text-muted">Paso 2 de 6 · guardado</span>
          <button type="button" className="h-12 rounded-md bg-accent px-6 font-medium text-on-accent">
            Comprobar
          </button>
        </div>
      </div>
    </>
  );
}
