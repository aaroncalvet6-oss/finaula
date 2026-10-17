import { LOGO_PATHS } from "@/components/brand/Logo";
import { colors, fonts } from "@/design/tokens";

export const CERT_WIDTH = 1754;
export const CERT_HEIGHT = 1240; // A4 landscape ratio (√2)

export const DISCLAIMER = "Este certificado no tiene validez académica oficial.";

export interface CertificateData {
  name: string;
  course: string;
  lessons: number;
  minutes: number;
  score: number;
  total: number;
  /** ISO date of the first passing attempt. */
  passedAt: string;
  id: string;
}

export function formatCertificateDate(iso: string): string {
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}

/** All text printed on the certificate, in reading order (tested). */
export function certificateLines(d: CertificateData) {
  return {
    eyebrow: "Certificado de finalización",
    intro: "Finaula certifica que",
    name: d.name.trim() || "Tu nombre",
    middle: "ha completado el curso",
    course: d.course,
    detail: `${d.lessons} lecciones · ${d.minutes} minutos · evaluación final superada con ${d.score}/${d.total}`,
    date: `Fecha: ${formatCertificateDate(d.passedAt)}`,
    code: `Código: ${d.id}`,
    footer: `Formación financiera para jóvenes. ${DISCLAIMER}`,
  };
}

const c = colors.light;
const font = (weight: number, size: number, family: keyof typeof fonts) => `${weight} ${size}px ${fonts[family]}`;

function fitText(ctx: CanvasRenderingContext2D, text: string, weight: number, max: number, min: number, width: number, family: keyof typeof fonts) {
  let size = max;
  ctx.font = font(weight, size, family);
  while (size > min && ctx.measureText(text).width > width) {
    size -= 2;
    ctx.font = font(weight, size, family);
  }
  return size;
}

/** Draws the certificate on a canvas of CERT_WIDTH × CERT_HEIGHT. Always light: it is a printable document. */
export function drawCertificate(ctx: CanvasRenderingContext2D, d: CertificateData) {
  const W = CERT_WIDTH;
  const H = CERT_HEIGHT;
  const L = certificateLines(d);
  const left = 150;
  const contentWidth = W - left * 2;

  ctx.fillStyle = c.bg;
  ctx.fillRect(0, 0, W, H);

  // Header band (colour only in the header, as in the rest of the product).
  ctx.fillStyle = c.alt;
  ctx.fillRect(0, 0, W, 210);

  // Decorative geometry inside the band.
  ctx.fillStyle = c.mark;
  ctx.beginPath();
  ctx.arc(W - 250, 210, 120, Math.PI, 0);
  ctx.fill();
  ctx.globalAlpha = 0.18;
  ctx.fillStyle = c.onAlt;
  ctx.beginPath();
  ctx.arc(W - 110, 110, 70, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Logo on the dark band: the dark-theme logo colours.
  const logo = colors.dark;
  ctx.save();
  ctx.translate(left, 64);
  ctx.scale(2.6, 2.6);
  ctx.fillStyle = logo.logoSquare;
  ctx.fill(new Path2D(LOGO_PATHS.coin));
  ctx.fillStyle = logo.logoCircle;
  ctx.fill(new Path2D(LOGO_PATHS.blockLeft));
  ctx.fillStyle = logo.logoOverlap;
  ctx.fill(new Path2D(LOGO_PATHS.blockRight));
  ctx.restore();
  ctx.fillStyle = c.onAlt;
  ctx.font = font(650, 60, "display");
  ctx.textBaseline = "middle";
  ctx.fillText("finaula", left + 110, 106);

  // Body.
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = c.accentText;
  ctx.font = font(600, 26, "body");
  ctx.fillText(L.eyebrow.toUpperCase(), left, 330);

  ctx.fillStyle = c.muted;
  ctx.font = font(400, 34, "body");
  ctx.fillText(L.intro, left, 420);

  ctx.fillStyle = c.ink;
  const nameSize = fitText(ctx, L.name, 600, 96, 48, contentWidth, "display");
  ctx.fillText(L.name, left, 420 + 30 + nameSize);
  const nameBottom = 420 + 30 + nameSize + 28;
  ctx.fillStyle = c.accent;
  ctx.fillRect(left, nameBottom, 160, 6);

  ctx.fillStyle = c.muted;
  ctx.font = font(400, 34, "body");
  ctx.fillText(L.middle, left, nameBottom + 80);

  ctx.fillStyle = c.accentText;
  const courseSize = fitText(ctx, L.course, 600, 64, 36, contentWidth, "display");
  ctx.fillText(L.course, left, nameBottom + 80 + 24 + courseSize);

  ctx.fillStyle = c.ink;
  ctx.font = font(400, 28, "mono");
  ctx.fillText(L.detail, left, nameBottom + 80 + 24 + courseSize + 72);

  // Footer.
  ctx.strokeStyle = c.line;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(left, H - 200);
  ctx.lineTo(W - left, H - 200);
  ctx.stroke();

  ctx.fillStyle = c.ink;
  ctx.font = font(400, 28, "mono");
  ctx.fillText(L.date, left, H - 140);
  ctx.textAlign = "right";
  ctx.fillText(L.code, W - left, H - 140);
  ctx.textAlign = "left";

  ctx.fillStyle = c.muted;
  ctx.font = font(400, 26, "body");
  ctx.fillText(L.footer, left, H - 86);
}

/** Make sure the web fonts are ready before drawing on canvas. */
export async function loadCertificateFonts() {
  if (typeof document === "undefined" || !document.fonts) return;
  await Promise.all([
    document.fonts.load(font(650, 60, "display")),
    document.fonts.load(font(600, 60, "display")),
    document.fonts.load(font(400, 30, "body")),
    document.fonts.load(font(600, 30, "body")),
    document.fonts.load(font(400, 28, "mono")),
  ]);
}
