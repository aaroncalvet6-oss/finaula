/**
 * Single source of truth for deployment settings.
 * To move to a custom domain, set `basePath` to "" and update `url`.
 */
export const site = {
  name: "Finaula",
  tagline: "Formación financiera para jóvenes",
  url: "https://aaroncalvet6-oss.github.io/finaula",
  basePath: "/finaula",
  locale: "es-ES",
  /** Contact address for the legal page. Shown only once the owner provides it. */
  contactEmail: null as string | null,
} as const;

/** Prefixes a public asset path with the base path (needed for plain <img>, not for next/link). */
export function assetPath(path: string): string {
  return `${site.basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
