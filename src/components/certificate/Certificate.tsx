"use client";

import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Callouts";
import {
  CERT_HEIGHT,
  CERT_WIDTH,
  DISCLAIMER,
  drawCertificate,
  loadCertificateFonts,
  type CertificateData,
} from "@/lib/certificate";
import { useHydratedProgress } from "@/lib/progress/useHydratedProgress";

interface Props {
  course: { slug: string; title: string; lessons: number; minutes: number };
}

export function Certificate({ course }: Props) {
  const { hydrated, progress, profile, setCertificateName } = useHydratedProgress();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [busy, setBusy] = useState<"png" | "pdf" | null>(null);
  const record = progress.assessments[course.slug];
  const passed = record?.passed && record.passedAt && record.certificateId;

  const data: CertificateData | null = passed
    ? {
        name: profile.certificateName,
        course: course.title,
        lessons: course.lessons,
        minutes: course.minutes,
        score: record.passedScore ?? record.bestScore,
        total: record.total,
        passedAt: record.passedAt!,
        id: record.certificateId!,
      }
    : null;

  useEffect(() => {
    if (!data || !canvasRef.current) return;
    let cancelled = false;
    void loadCertificateFonts().then(() => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!cancelled && ctx) drawCertificate(ctx, data);
    });
    return () => {
      cancelled = true;
    };
    // Redraw when anything printed changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.name, data?.id, data?.score]);

  if (!hydrated) return <div className="aspect-[1.414] w-full rounded-md bg-sunken" aria-hidden="true" />;

  if (!data) {
    return (
      <div className="space-y-5">
        <p className="text-reading">
          El certificado se desbloquea al aprobar la evaluación final de «{course.title}».
        </p>
        <ButtonLink href={`/cursos/${course.slug}/evaluacion/`}>Ir a la evaluación final</ButtonLink>
      </div>
    );
  }

  const fileBase = `finaula-certificado-${course.slug}`;

  async function downloadPng() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setBusy("png");
    const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/png"));
    if (blob) saveBlob(blob, `${fileBase}.png`);
    setBusy(null);
  }

  async function downloadPdf() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setBusy("pdf");
    const { jsPDF } = await import("jspdf");
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    pdf.setProperties({ title: `Certificado · ${course.title}`, creator: "Finaula" });
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 297, 210);
    pdf.save(`${fileBase}.pdf`);
    setBusy(null);
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="cert-name" className="block font-semibold">
          Nombre que aparecerá en el certificado
        </label>
        <p id="cert-name-hint" className="text-small text-muted">
          Se guarda solo en este navegador. No lo enviamos a ningún sitio.
        </p>
        <input
          id="cert-name"
          type="text"
          autoComplete="name"
          maxLength={80}
          value={profile.certificateName}
          onChange={(e) => setCertificateName(e.target.value)}
          aria-describedby="cert-name-hint"
          placeholder="Tu nombre y apellidos"
          className="mt-2 h-12 w-full rounded-md border-[1.5px] border-line-strong bg-surface px-4 text-[1.0625rem] focus:border-accent focus:outline-none"
        />
      </div>

      <figure>
        <canvas
          ref={canvasRef}
          width={CERT_WIDTH}
          height={CERT_HEIGHT}
          className="h-auto w-full rounded-md border border-line"
          role="img"
          aria-label={`Certificado de finalización de ${course.title} a nombre de ${data.name || "tu nombre"}. ${DISCLAIMER}`}
        />
        <figcaption className="mt-2 text-small text-muted">{DISCLAIMER}</figcaption>
      </figure>

      <div className="flex flex-wrap gap-3">
        <Button onClick={downloadPng} disabled={busy !== null || !data.name.trim()}>
          <Download size={18} aria-hidden="true" /> {busy === "png" ? "Preparando…" : "Descargar imagen"}
        </Button>
        <Button variant="secondary" onClick={downloadPdf} disabled={busy !== null || !data.name.trim()}>
          <FileText size={18} aria-hidden="true" /> {busy === "pdf" ? "Preparando…" : "Descargar PDF"}
        </Button>
      </div>
      {!data.name.trim() ? <p className="text-small text-muted">Escribe tu nombre para descargarlo.</p> : null}
      <Notice>
        Acredita que has terminado un curso de Finaula. {DISCLAIMER} Puedes verlo de nuevo cuando quieras en tu{" "}
        <Link href="/perfil/" className="font-semibold underline underline-offset-4">
          perfil
        </Link>
        .
      </Notice>
    </div>
  );
}

function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
