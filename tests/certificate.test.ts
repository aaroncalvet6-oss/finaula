import { describe, expect, it } from "vitest";
import { certificateLines, DISCLAIMER } from "@/lib/certificate";

const data = {
  name: "Lucía García",
  course: "Fundamentos del dinero",
  lessons: 6,
  minutes: 43,
  score: 9,
  total: 10,
  passedAt: "2026-10-17T10:00:00.000Z",
  id: "FIN-1A2B3C4D",
};

describe("certificate", () => {
  it("states it has no official academic validity", () => {
    expect(DISCLAIMER).toContain("no tiene validez académica oficial");
    expect(certificateLines(data).footer).toContain("no tiene validez académica oficial");
  });

  it("prints name, course, score, date and code", () => {
    const l = certificateLines(data);
    expect(l.name).toBe("Lucía García");
    expect(l.course).toBe("Fundamentos del dinero");
    expect(l.detail).toContain("9/10");
    expect(l.date).toBe("Fecha: 17 de octubre de 2026");
    expect(l.code).toBe("Código: FIN-1A2B3C4D");
  });

  it("uses a placeholder until a name is written", () => {
    expect(certificateLines({ ...data, name: "   " }).name).toBe("Tu nombre");
  });
});
