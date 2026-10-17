# Finaula · Formación financiera para jóvenes

Finaula es una plataforma web de formación financiera para jóvenes de 14 a 18 años en España.
Ofrece cursos cortos (lecciones de 5 a 8 minutos), herramientas interactivas, evaluaciones finales
y certificados de finalización.

**Web:** https://aaroncalvet6-oss.github.io/finaula/

- **Educación, no asesoramiento.** Nunca recomienda productos, entidades ni inversiones.
- **Fuentes oficiales.** Cada dato legal o fiscal está comprobado en una fuente oficial (BOE,
  Agencia Tributaria, Seguridad Social…) y tiene su ficha en [`docs/fuentes.md`](docs/fuentes.md).
  Un test impide publicar una lección con datos sin verificar.
- **Privacidad.** Sin cuentas, sin analítica, sin cookies de terceros y sin recoger datos. El
  progreso y el nombre del certificado se guardan solo en el navegador (`finaula:progress` y
  `finaula:profile`).

## Contenido

| Curso | Lecciones | Evaluación final |
| --- | --- | --- |
| 1 · Fundamentos del dinero | 6 (43 min) | 10 preguntas de un banco de 15, se aprueba con 7 |
| 2 · Tu primer sueldo | 5 (36 min) | 8 preguntas de un banco de 12, se aprueba con 6 |

Herramientas: horas de trabajo, presupuesto, meta de ahorro e interés compuesto.

El temario completo está en [`docs/temario.md`](docs/temario.md).

## Cómo ejecutarla

Necesitas Node.js 22 o superior.

```bash
npm install
npm run dev          # http://localhost:3000/finaula/
```

La página interna del sistema de diseño (`/finaula/design/`) solo existe en desarrollo.

### Comprobaciones

```bash
npm run lint         # ESLint
npm run typecheck    # TypeScript estricto
npm test             # Vitest: finanzas, progreso, evaluaciones, contenido, contraste, SEO
npm run build        # export estático en out/
npm run test:e2e     # Playwright: inicio → lección → evaluación → certificado (tras el build)
```

### Otras utilidades

```bash
npm run serve        # sirve out/ en http://localhost:4173/finaula/, como GitHub Pages
npm run lighthouse   # Lighthouse móvil (mediana de 3 pasadas) en 4 páginas; necesita `npm run serve`
npm run screenshots  # capturas en móvil de las páginas principales en docs/screenshots/
npm run og           # regenera las imágenes para redes sociales en public/og/
npm run icons        # regenera el icono para iOS a partir del símbolo
```

## Cómo se publica

Cada push a `main` lanza el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Instala dependencias y ejecuta lint, typecheck y tests unitarios.
2. Genera el export estático (`npm run build`).
3. Ejecuta los tests e2e con Playwright contra ese build.
4. Solo si todo pasa, publica `out/` en GitHub Pages.

Si cualquier paso falla, no se publica nada y la web sigue con la versión anterior.

### Cambiar a un dominio propio

La ruta base está en una sola línea, en [`src/config/site.ts`](src/config/site.ts):
`basePath: "/finaula"`. Para un dominio propio, pon `basePath: ""` y actualiza `url`.

## Stack

Next.js (App Router, export estático) · TypeScript estricto · Tailwind CSS · Motion · Lucide ·
Recharts · Zod · Zustand · Vitest · Playwright.

| Carpeta | Contenido |
| --- | --- |
| `src/content/` | Cursos, lecciones, bancos de preguntas y registro de datos, validados con Zod |
| `src/lib/finance/` | Funciones financieras puras (con tests) |
| `src/lib/progress/` | `ProgressRepository` con implementación local, preparada para cuentas en el futuro |
| `src/lib/tutor/` | `TutorProvider` con textos fijos, preparado para una versión con IA |
| `src/design/` | Tokens de diseño (claro y oscuro, contraste AA comprobado por test) |

Las reglas de diseño y contenido para quien desarrolle están en [`CLAUDE.md`](CLAUDE.md).

## Licencias

Las fuentes tipográficas (Bricolage Grotesque, Inter y Geist Mono) se distribuyen con la licencia
SIL Open Font License 1.1. Las copias de las licencias están en `public/fonts/`.
