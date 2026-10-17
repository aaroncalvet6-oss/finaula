import { ArrowRight, BookOpen, CircleUser, House, Lightbulb, Wrench, X } from "lucide-react";
import Link from "next/link";
import { home, lesson, euro } from "../_shared/content";
import { Segments } from "../_shared/Progress";

function Logo() {
  return (
    <Link href="/propuestas/b" className="flex min-h-11 items-center gap-2" aria-label="Finaula, inicio">
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <rect width="26" height="26" rx="7" className="fill-ink" />
        <rect x="6.5" y="14" width="3" height="6" rx="1" className="fill-mark" />
        <rect x="11.5" y="10" width="3" height="10" rx="1" className="fill-mark" />
        <rect x="16.5" y="6" width="3" height="14" rx="1" className="fill-mark" />
      </svg>
      <span className="text-lg font-semibold tracking-[-0.02em]">Finaula</span>
    </Link>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[12px] tracking-[0.06em] text-muted uppercase">{children}</p>;
}

function TabBar() {
  const items = [
    { label: "Inicio", Icon: House, current: true },
    { label: "Cursos", Icon: BookOpen },
    { label: "Herramientas", Icon: Wrench },
    { label: "Perfil", Icon: CircleUser },
  ];
  return (
    <nav aria-label="Principal" className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-surface">
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ label, Icon, current }) => (
          <li key={label}>
            <Link
              href="#"
              aria-current={current ? "page" : undefined}
              className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[12px] ${
                current ? "font-medium text-ink" : "text-muted"
              }`}
            >
              <Icon size={22} strokeWidth={current ? 2.2 : 1.7} aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function InstrumentoHome() {
  const r = home.resume;
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5">
          <Logo />
          <span className="font-mono text-[12px] text-muted">14–18 · ES</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-28">
        <section className="pt-10 pb-10">
          <Label>Formación financiera · 14 a 18 años</Label>
          <h1 className="mt-4 text-[2.5rem] leading-[1.02] font-semibold tracking-[-0.04em]">{home.title}</h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">{home.lead}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/propuestas/b/leccion"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 font-medium text-on-accent"
            >
              {home.primary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="#cursos"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-line bg-surface px-5 font-medium"
            >
              {home.secondary}
            </Link>
          </div>
        </section>

        <section aria-label="Ejemplo de herramienta" className="rounded-xl border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <Label>Herramienta · Horas de trabajo</Label>
            <span className="size-2 rounded-full bg-accent-text" aria-hidden="true" />
          </div>
          <dl className="tabular grid grid-cols-2 font-mono text-[15px]">
            <div className="border-r border-b border-line px-4 py-3">
              <dt className="text-[12px] text-muted">PRECIO</dt>
              <dd className="mt-1 text-lg">90,00 €</dd>
            </div>
            <div className="border-b border-line px-4 py-3">
              <dt className="text-[12px] text-muted">GANAS POR HORA</dt>
              <dd className="mt-1 text-lg">6,00 €</dd>
            </div>
            <div className="col-span-2 flex items-baseline justify-between px-4 py-4">
              <dt className="text-[12px] text-muted">TE CUESTA</dt>
              <dd className="text-[2rem] leading-none font-medium">
                15 <span className="text-lg text-muted">h</span>
              </dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="resume" className="mt-10">
          <Label>
            <span id="resume">{r.label}</span>
          </Label>
          <Link
            href="/propuestas/b/leccion"
            className="mt-3 block rounded-xl border border-ink px-4 py-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[13px] text-muted">
                  {r.number} · {r.minutes} MIN
                </p>
                <p className="mt-1 text-lg leading-snug font-medium">{r.lesson}</p>
              </div>
              <ArrowRight className="mt-1 shrink-0" size={20} aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Segments
                done={r.done}
                total={r.total}
                label={`${r.done} de ${r.total} lecciones`}
                className="flex-1"
                filled="h-2 rounded-[2px] bg-accent-text"
                empty="h-2 rounded-[2px] bg-line"
              />
              <span className="tabular font-mono text-[13px] text-muted">
                {r.done}/{r.total}
              </span>
            </div>
          </Link>
        </section>

        <section id="cursos" className="mt-14">
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Cursos</h2>
            <Label>2 disponibles</Label>
          </div>
          <ul>
            {home.courses.map((c) => {
              const pct = Math.round((c.done / c.lessons) * 100);
              return (
                <li key={c.number} className="border-b border-line py-5">
                  <div className="flex gap-4">
                    <span className="tabular font-mono text-[13px] text-muted">C0{c.number}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold tracking-[-0.01em]">{c.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted">{c.description}</p>
                      <p className="mt-3 font-mono text-[12px] text-muted">
                        {c.lessons} LECCIONES · {c.minutes} MIN · {pct} %
                      </p>
                      <Segments
                        done={c.done}
                        total={c.lessons}
                        label={`${c.done} de ${c.lessons} lecciones`}
                        className="mt-2"
                        filled="h-1.5 rounded-[2px] bg-accent-text"
                        empty="h-1.5 rounded-[2px] bg-line"
                      />
                      <Link
                        href="#"
                        className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium"
                      >
                        {c.done > 0 ? "Continuar" : "Empezar"} <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 font-mono text-[12px] text-muted uppercase">
            Próximos: {home.upcoming.join(" / ")}
          </p>
        </section>

        <section className="mt-14">
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Herramientas</h2>
            <Label>Practica con tus cifras</Label>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {home.tools.map((t) => (
              <li key={t.title} className="bg-surface">
                <Link href="#" className="flex h-full min-h-36 flex-col justify-between p-4">
                  <span>
                    <span className="block font-medium leading-snug">{t.title}</span>
                    <span className="mt-1 block text-[14px] leading-snug text-muted">{t.description}</span>
                  </span>
                  <span className="mt-3 font-mono text-[11px] text-muted uppercase">{t.lesson}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <div className="border-b border-line pb-3">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Cómo funciona</h2>
          </div>
          <ol className="mt-2">
            {home.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] border-b border-line py-4">
                <span className="tabular font-mono text-[13px] text-accent-text">0{i + 1}</span>
                <div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="text-[15px] text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 rounded-xl bg-soft p-5 text-on-soft">
          <h2 className="text-xl font-semibold tracking-[-0.02em]">{home.trust.title}</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            {home.trust.points.map((p, i) => (
              <li key={p} className="grid grid-cols-[2rem_1fr]">
                <span className="font-mono text-[13px]">0{i + 1}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link href="#" className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-medium underline underline-offset-4">
            {home.trust.link}
          </Link>
        </section>

        <section className="mt-6 rounded-xl border border-line bg-alt p-5 text-on-alt">
          <h2 className="text-xl font-semibold tracking-[-0.02em]">{home.families.title}</h2>
          <p className="mt-2 text-[15px]">{home.families.text}</p>
          <Link href="#" className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-medium underline underline-offset-4">
            {home.families.link}
          </Link>
        </section>

        <footer className="mt-14 border-t border-line pt-6 text-[14px] text-muted">
          <p>Finaula · Es educación, no asesoramiento financiero.</p>
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
      <TabBar />
    </>
  );
}

export function InstrumentoLesson() {
  const ex = lesson.example;
  const [a, b] = ex.options;
  const total = (o: typeof a | typeof b) => o.items.reduce((sum, item) => sum + item.amount, 0);
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="mx-auto flex h-14 max-w-2xl items-center gap-3 px-2">
          <Link href="/propuestas/b" aria-label="Cerrar lección" className="grid size-11 place-items-center">
            <X size={22} aria-hidden="true" />
          </Link>
          <Segments
            done={lesson.currentStep + 1}
            total={lesson.steps.length}
            label="Progreso de la lección"
            className="flex-1"
            filled="h-1.5 rounded-[2px] bg-accent-text"
            empty="h-1.5 rounded-[2px] bg-line"
          />
          <span className="tabular pr-3 font-mono text-[13px] text-muted">
            {lesson.currentStep + 1}/{lesson.steps.length}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 pt-7 pb-32">
        <Label>
          {lesson.course} · {lesson.number} · {lesson.minutes} min
        </Label>
        <h1 className="mt-3 text-[2rem] leading-[1.08] font-semibold tracking-[-0.035em]">{lesson.title}</h1>

        <div className="mt-6 grid grid-cols-[5.5rem_1fr] gap-3 border-y border-line py-4">
          <Label>Objetivo</Label>
          <p className="text-[16px] leading-relaxed">{lesson.objective}</p>
        </div>

        <p className="mt-6 text-[18px] leading-[1.65]">{lesson.intro}</p>

        <div className="mt-6 border-l-[3px] border-mark py-1 pl-4">
          <p className="font-semibold">{lesson.concept.term}</p>
          <p className="mt-1 text-[18px] leading-[1.6]">{lesson.concept.definition}</p>
        </div>

        <section className="mt-10" aria-labelledby="ejemplo">
          <Label>Ejemplo</Label>
          <h2 id="ejemplo" className="mt-2 text-[1.375rem] font-semibold tracking-[-0.02em]">
            {ex.title}
          </h2>
          <p className="mt-2 text-[17px] leading-relaxed">{ex.setup}</p>
          <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-surface">
            {[a, b].map((o, i) => (
              <div key={o.label} className={`flex flex-col p-4 ${i === 0 ? "border-r border-line" : ""}`}>
                <p className="font-mono text-[12px] text-muted uppercase">{o.label}</p>
                <ul className="mt-2 flex-1 space-y-2 text-[14px] leading-snug">
                  {o.items.map((item) => (
                    <li key={item.name}>
                      <span className="block">{item.name}</span>
                      <span className="tabular font-mono text-muted">{euro(item.amount)}</span>
                    </li>
                  ))}
                </ul>
                <p className="tabular mt-3 border-t border-line pt-2 font-mono text-[15px] font-medium">
                  = {euro(total(o))}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[17px] leading-relaxed">{ex.takeaway}</p>
          <div className="mt-5 rounded-xl border border-line bg-surface px-4 py-4">
            <Label>En horas de trabajo</Label>
            <p className="tabular mt-2 font-mono text-[1.5rem]">
              20 € ÷ 8 €/h = <span className="bg-mark px-1 text-on-mark">2,5 h</span>
            </p>
            <p className="mt-2 text-[14px] text-muted">{ex.hoursNote}</p>
          </div>
        </section>

        <section className="mt-10 rounded-xl bg-mark px-5 py-5 text-on-mark">
          <p className="font-mono text-[12px] tracking-[0.06em] uppercase">Dato clave</p>
          <p className="mt-2 text-[1.25rem] leading-snug font-semibold tracking-[-0.01em]">{lesson.keyFact}</p>
        </section>

        <section className="mt-10" aria-labelledby="pregunta">
          <Label>Pregunta 2 de 4</Label>
          <h2 id="pregunta" className="mt-2 text-[17px] leading-[1.6] font-medium">
            {lesson.question.prompt}
          </h2>
          <fieldset className="mt-4 space-y-2">
            <legend className="sr-only">Elige una respuesta</legend>
            {lesson.question.options.map((o, i) => (
              <label
                key={o}
                className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border bg-surface px-3 py-3 ${
                  i === 0 ? "border-ink" : "border-line"
                }`}
              >
                <input type="radio" name="q" defaultChecked={i === 0} className="sr-only" />
                <kbd
                  className={`grid size-7 shrink-0 place-items-center rounded-md border font-mono text-[13px] ${
                    i === 0 ? "border-ink bg-ink text-bg" : "border-line text-muted"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </kbd>
                <span className="text-[16px]">{o}</span>
              </label>
            ))}
          </fieldset>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 border-t border-line bg-surface">
        <div className="mx-auto flex max-w-2xl gap-2 px-4 py-3">
          <button
            type="button"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-line px-4 font-medium"
          >
            <Lightbulb size={18} aria-hidden="true" /> Pista
          </button>
          <button type="button" className="h-12 flex-1 rounded-lg bg-accent font-medium text-on-accent">
            Comprobar
          </button>
        </div>
      </div>
    </>
  );
}
