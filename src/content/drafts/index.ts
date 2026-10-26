import type { Course } from "../schema";
import { consumoInteligente } from "./consumo-inteligente";
import { deudasYCreditos } from "./deudas-y-creditos";

/**
 * Courses written but not yet verified. Nothing in the catalogue or the site imports this folder
 * (tested). When every fact a draft cites is verified, move its file to src/content/courses/ and
 * add it to `allCourses`: from then on the strict content tests check it.
 */
export const draftCourses: ReadonlyArray<Course> = [consumoInteligente, deudasYCreditos];
