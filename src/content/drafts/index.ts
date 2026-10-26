import type { Course } from "../schema";
import { ahorroEInversion } from "./ahorro-e-inversion";
import { comoFuncionaLaEconomia } from "./como-funciona-la-economia";
import { deudasYCreditos } from "./deudas-y-creditos";

/**
 * Courses written but not yet verified. Nothing in the catalogue or the site imports this folder
 * (tested). When every fact a draft cites is verified, move its file to src/content/courses/ and
 * add it to `allCourses`: from then on the strict content tests check it.
 *
 * Course 6 stays here until after 20/11/2026 even with all facts verified: consumer credit rules
 * change with Directive (EU) 2023/2225 (see CLAUDE.md and docs/fuentes.md).
 */
export const draftCourses: ReadonlyArray<Course> = [deudasYCreditos, ahorroEInversion, comoFuncionaLaEconomia];
