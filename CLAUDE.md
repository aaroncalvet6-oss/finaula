# Finaula

Financial education web platform for young people aged 14–18 in Spain
("Finaula · Formación financiera para jóvenes"). Short courses (5–8 min lessons), interactive
tools, final assessments and completion certificates. Education only, never financial advice.

Published at https://aaroncalvet6-oss.github.io/finaula/ (GitHub Pages, static export).

## Status

Work proceeds in phases. Each phase ends with lint, typecheck and tests green, a commit, and a
merge to `main` (which triggers the Pages deploy once the workflow exists).

| Phase | Scope | Status |
| --- | --- | --- |
| 1 | Content: `docs/temario.md`, `docs/fuentes.md` | Done; all facts used by courses 1 and 2 verified by the owner (17/10/2026) |
| 2 | Project scaffold + 3 visual directions with mobile screenshots | Done; owner picked C, refined as `c2` (Contraste · ajustada), awaiting sign-off |
| 3 | Full design system, logo, dev-only `/design` page | Pending |
| 4 | All pages, courses 1 and 2, tools, assessments, certificates | Pending |
| 5 | SEO, Lighthouse, tests, README, deploy | Pending |

## Languages

- Code, identifiers, comments, commit messages: **English**.
- UI copy and lesson content: **Spanish from Spain**, addressing the reader as "tú".

## Stack (current stable versions, pinned in `package.json` from phase 2)

- Next.js (App Router), TypeScript `strict`, `output: "export"` for GitHub Pages.
- Tailwind CSS, Motion, Lucide, Recharts, Zod, Zustand.
- Vitest (unit, content, contrast) and Playwright (e2e).
- GitHub Actions workflow that builds and deploys to Pages on every push to `main`.

## Planned structure

```
docs/                 temario.md (content spec), fuentes.md (fact registry)
src/config/site.ts    single source for basePath, site URL, contact email (null until given)
src/app/              routes (App Router); dev-only pages use the `page.dev.tsx` extension
src/components/       UI components (ui/ primitives, lesson/, tools/, assessment/, certificate/)
src/content/          typed content validated with Zod
  facts.ts            mirror of docs/fuentes.md: id, claim, url, checkedAt, status
  courses/            course + lesson definitions; lessons cite facts by id
  assessments/        question banks per course
src/lib/finance/      pure financial functions (work hours, compound interest, budget, goal)
src/lib/progress/     ProgressRepository interface + LocalProgressRepository
src/lib/tutor/        TutorProvider interface + StaticTutorProvider
src/lib/assessment/   seeded shuffling, scoring
src/design/           tokens (color, type, spacing, radius, shadow) for light and dark
tests/                Vitest; e2e/ Playwright
```

## Architecture rules

- `basePath` lives only in `src/config/site.ts`; `next.config.ts` imports it. Moving to a custom
  domain means changing that one line.
- Persistence goes through `ProgressRepository` only. The local implementation uses
  `localStorage` with keys prefixed `finaula:`, a versioned schema and Zod validation. No other
  code touches storage directly.
- Tutoring text goes through `TutorProvider`. Today: `StaticTutorProvider` with hand-written hints.
- No accounts, no analytics, no third-party cookies, no data collection, no external requests at
  runtime. Never publish any personal data about the author.

## Content rules

- Source of truth for lesson content: `docs/temario.md`. Source of truth for facts:
  `docs/fuentes.md`, mirrored in `src/content/facts.ts`.
- Any legal or fiscal fact (ages, percentages, deadlines, obligations, what a law or body says)
  must have a row in `docs/fuentes.md`. Only facts with a **Verificado** status (oficial, texto
  legal or mutua colaboradora) can appear in a lesson, and the lesson always links the official
  source. A test enforces this.
- Facts that change every year (figures, brackets, deadlines) never appear in lessons: explain the
  concept and link the official source.
- A course is shown only when every lesson has `status: "published"` and all of its cited facts
  are verified. Unfinished courses can appear only in a small "Próximos cursos" section.
- Any mention of returns states that they are not guaranteed and investments can lose value.
- Never recommend specific products, banks, apps, brokers or investments. Brand names may appear
  only as everyday context (e.g. Bizum) and never as a recommendation.
- Pedagogy: a 14-year-old must understand it on first read. Short sentences. Every technical term
  explained the first time it appears. Examples from Spanish teenagers' real life.
- Questions test understanding (apply, compare, decide), not memorisation.
- Illustrative numbers (salaries, rates, brackets) are labelled as invented examples.

## Design rules

- Own visual identity. Quality references: Linear, Stripe, Brilliant.org, Khan Academy.
- Token system (color, typography, spacing, radius, shadow) with light and dark modes. WCAG AA
  contrast for every text/background pair, checked by a test.
- Mobile-first. Touch targets ≥ 44 px, reading text ≥ 16 px, visible focus.
- Subtle motion only, always honouring `prefers-reduced-motion`.
- Logo (symbol + wordmark) that works on light, dark and as a favicon.
- Forbidden: purple or blue gradients, everything centred, generic shadowed cards everywhere,
  template look, mascots, characters, emojis. Tone is serious, clear and modern, never childish.

## Commands

```
npm run dev          # local dev server (includes /design)
npm run build        # static export to out/
npm run lint
npm run typecheck
npm test             # Vitest
npm run test:e2e     # Playwright (uses the preinstalled Chromium)
npm run lighthouse   # Lighthouse CI, mobile profile (phase 5)
npm run screenshots  # mobile screenshots of the design proposals (needs `npm run dev`)
npm run comparison   # side-by-side sheet docs/design-proposals/comparativa.png
```

Phase 2 design proposals live in `src/app/propuestas/` as dev-only routes
(`/finaula/propuestas/a|b|c|c2` and `/leccion`; `c2` is the chosen base). Screenshots: `docs/design-proposals/`.
`AGENTS.md` is generated by Next.js: this Next version has breaking changes, so read
`node_modules/next/dist/docs/` before using an API you are unsure about.

## Environment notes

- The dev environment cannot open official Spanish websites (boe.es, agenciatributaria.gob.es,
  seg-social.es, bde.es, cnmv.es…): the network policy blocks them. Facts that cannot be opened
  stay **Pendiente** in `docs/fuentes.md`; the owner verifies them and sends the links.
- Use `executablePath: '/opt/pw-browsers/chromium'` if the Playwright version needs it. Never run
  `playwright install`.
