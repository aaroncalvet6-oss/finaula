import { describe, expect, it } from "vitest";
import { drawAttempt, score, seededRandom, shuffle } from "@/lib/assessment";

const bank = Array.from({ length: 15 }, (_, i) => ({
  id: `q${i}`,
  prompt: `P${i}`,
  correct: `ok${i}`,
  distractors: [`a${i}`, `b${i}`],
}));

describe("assessment draws", () => {
  it("is reproducible for a seed and differs across seeds", () => {
    expect(drawAttempt(bank, 10, 1)).toEqual(drawAttempt(bank, 10, 1));
    const ids = (seed: number) => drawAttempt(bank, 10, seed).map((d) => d.question.id).join();
    expect(new Set([1, 2, 3, 4, 5].map(ids)).size).toBeGreaterThan(1);
  });

  it("draws distinct questions and keeps the right answer findable", () => {
    const d = drawAttempt(bank, 10, 42);
    expect(new Set(d.map((x) => x.question.id)).size).toBe(10);
    for (const x of d) {
      expect(x.options).toHaveLength(3);
      expect(x.options[x.correctIndex]).toBe(x.question.correct);
    }
  });

  it("moves the correct option around across attempts", () => {
    const positions = new Set<number>();
    for (let seed = 0; seed < 30; seed++) positions.add(drawAttempt(bank, 10, seed)[0].correctIndex);
    expect(positions.size).toBe(3);
  });

  it("refuses to draw more than the bank has", () => {
    expect(() => drawAttempt(bank, 16, 1)).toThrow();
  });

  it("scores answers, counting unanswered as wrong", () => {
    const d = drawAttempt(bank, 3, 7);
    expect(score(d, d.map((x) => x.correctIndex))).toBe(3);
    expect(score(d, [null, d[1].correctIndex, (d[2].correctIndex + 1) % 3])).toBe(1);
  });

  it("shuffle keeps all items", () => {
    const r = seededRandom(3);
    expect(shuffle([1, 2, 3, 4], r).sort()).toEqual([1, 2, 3, 4]);
  });
});
