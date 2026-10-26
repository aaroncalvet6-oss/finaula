import { bancosTarjetasYPagos } from "./bancos-tarjetas-y-pagos";
import { queNoTeEstafen } from "./que-no-te-estafen";

/**
 * Courses written but not yet verified. Nothing in the catalogue or the site imports this folder
 * (tested). When every fact a draft cites is verified, move its file to src/content/courses/ and
 * add it to `allCourses`: from then on the strict content tests check it.
 */
export const draftCourses = [bancosTarjetasYPagos, queNoTeEstafen];
