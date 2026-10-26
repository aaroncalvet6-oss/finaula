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
| 2 | Project scaffold + 3 visual directions with mobile screenshots | Done; owner picked C, refined (Contraste · ajustada) |
| 3 | Full design system, logo, dev-only `/design` page | Done; logo approved (symbol redrawn to avoid resembling Mastercard) |
| 4 | All pages, courses 1 and 2, tools, assessments, certificates | Done |
| 5 | SEO, Lighthouse, tests, README, deploy | Done |

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
  (site)/             pages with header and footer: home, cursos, ficha, certificado, herramientas,
                      perfil, fuentes, legal
  (focus)/            pages without site navigation: lesson reader, final assessment
src/components/       UI components (ui/ primitives, lesson/, tools/, assessment/, certificate/)
src/content/          typed content validated with Zod
  facts.ts            mirror of docs/fuentes.md: id, claim, url, checkedAt, status
  courses/            course + lesson definitions; lessons cite facts by id
  assessments/        question banks per course
  drafts/             written courses whose facts are still pending; never imported by the site
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
- Courses written before their facts are verified live in `src/content/drafts/`, citing pending
  facts from `pendingFacts` in `facts.ts`. `tests/drafts.test.ts` checks they only cite registered
  facts and that nothing on the site imports them. Once every fact is verified, the course moves
  to `src/content/courses/` and the strict `tests/content.test.ts` checks it. Never relax that test.
- Course 6 («Deudas y créditos») stays in drafts until after 20/11/2026, even if all its facts are
  verified: consumer credit rules change with Directive (EU) 2023/2225 (applies from 20/11/2026;
  «buy now, pay later» may count as credit without interest, caps on credit cost). Then review
  lessons 6.2–6.5 and F-57, F-60, F-61, F-62 against the final Spanish law in the BOE. Source and
  details in `docs/fuentes.md`.
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
npm run test:e2e     # Playwright journey tests against the static export (run `npm run build` first)
npm run serve        # serve out/ under /finaula like GitHub Pages (port 4173)
npm run screenshots  # mobile screenshots of the main pages into docs/screenshots (needs `npm run serve`)
npm run lighthouse   # Lighthouse mobile, median of 3 runs, 4 pages; target ≥ 95 (needs `npm run serve`)
npm run og           # social images into public/og/
npm run icons        # regenerate src/app/apple-icon.png from the logo symbol
npm run logo-shots   # logo review screenshots from /design (needs `npm run dev`)
```

Fonts are self-hosted from `public/fonts` (latin subset) with metric-matched fallbacks and
preloads (`src/design/fonts.ts`); do not reintroduce `@fontsource` CSS imports in the app.
Heavy client code loads on demand: lesson widgets, lesson questions, Recharts (only when the chart
scrolls into view), jsPDF (on download). Keep it that way to hold Lighthouse ≥ 95.
SEO: every page uses `pageMetadata()` from `src/lib/seo.ts`; course pages emit schema.org Course.
CI: `.github/workflows/deploy.yml` runs lint, typecheck, unit tests, build and e2e before deploying.

Design: tokens in `src/design/tokens.ts` (single source; emitted as `--f-*` CSS variables by the
root layout, mapped to Tailwind utilities in `globals.css`). Dark mode follows the system setting.
Living reference at `/finaula/design/` (dev only). Phase 2 proposal screenshots stay in
`docs/design-proposals/` for the record; the chosen direction is "C · Contraste ajustada".
If styles look stale in dev, delete `.next/` and restart.
`AGENTS.md` is generated by Next.js: this Next version has breaking changes, so read
`node_modules/next/dist/docs/` before using an API you are unsure about.

## Environment notes

- The dev environment cannot open official Spanish websites (boe.es, agenciatributaria.gob.es,
  seg-social.es, bde.es, cnmv.es…): the network policy blocks them. Facts that cannot be opened
  stay **Pendiente** in `docs/fuentes.md`; the owner verifies them and sends the links.
- Use `executablePath: '/opt/pw-browsers/chromium'` if the Playwright version needs it. Never run
  `playwright install`.
