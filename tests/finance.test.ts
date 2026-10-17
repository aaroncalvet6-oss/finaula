import { describe, expect, it } from "vitest";
import {
  annualGross,
  budget,
  compoundAmount,
  compoundSeries,
  MAX_YEARS,
  packCost,
  periodsToGoal,
  priceWithInflation,
  progressiveTax,
  savingsGoal,
  simpleAmount,
  taxReturnResult,
  unitPrice,
  workHours,
} from "@/lib/finance";

describe("workHours", () => {
  it("converts a price into hours and minutes", () => {
    expect(workHours(20, 8)).toEqual({ hours: 2.5, h: 2, min: 30 });
    expect(workHours(90, 6)?.hours).toBe(15);
    expect(workHours(63, 7)?.h).toBe(9);
  });
  it("handles zero price", () => {
    expect(workHours(0, 8)).toEqual({ hours: 0, h: 0, min: 0 });
  });
  it("rounds 59.99 minutes up to the next hour", () => {
    expect(workHours(9.999, 10)).toEqual({ hours: 0.9999, h: 1, min: 0 });
  });
  it("rejects zero, negative or invalid inputs", () => {
    expect(workHours(20, 0)).toBeNull();
    expect(workHours(20, -5)).toBeNull();
    expect(workHours(-1, 8)).toBeNull();
    expect(workHours(Number.NaN, 8)).toBeNull();
    expect(workHours(20, Number.POSITIVE_INFINITY)).toBeNull();
  });
});

describe("compound interest", () => {
  it("matches the lesson table (100 € at 5 %)", () => {
    expect(compoundAmount(100, 0.05, 1)).toBe(105);
    expect(compoundAmount(100, 0.05, 2)).toBe(110.25);
    expect(compoundAmount(100, 0.05, 3)).toBe(115.76);
    expect(compoundAmount(100, 0.05, 10)).toBe(162.89);
    expect(compoundAmount(100, 0.05, 20)).toBe(265.33);
    expect(simpleAmount(100, 0.05, 20)).toBe(200);
  });
  it("matches the questions (100 € and 200 € at 10 % for 2 years)", () => {
    expect(compoundAmount(100, 0.1, 2)).toBe(121);
    expect(compoundAmount(200, 0.1, 2)).toBe(242);
  });
  it("monthly series compounds to the annual rate", () => {
    const s = compoundSeries({ initial: 100, monthly: 0, annualRate: 0.05, years: 20 });
    expect(s).toHaveLength(21);
    expect(s[20].value).toBeCloseTo(265.33, 1);
    expect(s[0]).toEqual({ year: 0, contributed: 100, value: 100, interest: 0 });
  });
  it("with 0 % only adds contributions", () => {
    const s = compoundSeries({ initial: 0, monthly: 10, annualRate: 0, years: 2 });
    expect(s[2]).toEqual({ year: 2, contributed: 240, value: 240, interest: 0 });
  });
  it("with a negative rate loses money", () => {
    const s = compoundSeries({ initial: 1000, monthly: 0, annualRate: -0.1, years: 1 });
    expect(s[1].value).toBeCloseTo(900, 5);
    expect(s[1].interest).toBeLessThan(0);
  });
  it("clamps years and ignores invalid inputs", () => {
    expect(compoundSeries({ initial: 1, monthly: 0, annualRate: 0.01, years: 500 })).toHaveLength(MAX_YEARS + 1);
    expect(compoundSeries({ initial: 50, monthly: 0, annualRate: 0.05, years: 0 })).toHaveLength(1);
    const bad = compoundSeries({ initial: Number.NaN, monthly: -5, annualRate: Number.NaN, years: 1 });
    expect(bad[1].value).toBe(0);
  });
});

describe("budget", () => {
  it("matches Nerea's example (60 €, 14 € fixed, 20 %)", () => {
    const r = budget({ income: 60, fixed: 14, savingRate: 0.2, variablePlanned: 40 });
    expect(r).toEqual({ saving: 12, spendable: 48, variableAvailable: 34, shortfall: 6, savingRate: 0.2 });
  });
  it("clamps the saving rate between 0 % and 50 %", () => {
    expect(budget({ income: 100, fixed: 0, savingRate: 0.9 }).saving).toBe(50);
    expect(budget({ income: 100, fixed: 0, savingRate: -1 }).saving).toBe(0);
  });
  it("reports negative availability when fixed costs exceed what is left", () => {
    const r = budget({ income: 50, fixed: 60, savingRate: 0 });
    expect(r.variableAvailable).toBe(-10);
    expect(r.shortfall).toBe(10);
  });
  it("handles zero income", () => {
    expect(budget({ income: 0, fixed: 0, savingRate: 0.2 })).toEqual({
      saving: 0,
      spendable: 0,
      variableAvailable: 0,
      shortfall: 0,
      savingRate: 0.2,
    });
  });
});

describe("savingsGoal", () => {
  it("matches the lesson examples", () => {
    expect(savingsGoal({ target: 240, current: 60, periods: 20 })).toEqual({ missing: 180, perPeriod: 9, reached: false });
    expect(savingsGoal({ target: 200, current: 50, periods: 10 })?.perPeriod).toBe(15);
    expect(savingsGoal({ target: 300, current: 60, periods: 12 })?.perPeriod).toBe(20);
  });
  it("rounds the contribution up to the cent so the goal is reached", () => {
    expect(savingsGoal({ target: 100, current: 0, periods: 3 })?.perPeriod).toBe(33.34);
  });
  it("is already reached when current ≥ target", () => {
    expect(savingsGoal({ target: 100, current: 150, periods: 0 })).toEqual({ missing: 0, perPeriod: 0, reached: true });
  });
  it("returns null without time left or with invalid input", () => {
    expect(savingsGoal({ target: 100, current: 0, periods: 0 })).toBeNull();
    expect(savingsGoal({ target: Number.NaN, current: 0, periods: 4 })).toBeNull();
  });
  it("computes periods needed", () => {
    expect(periodsToGoal(240, 60, 6)).toBe(30);
    expect(periodsToGoal(100, 100, 5)).toBe(0);
    expect(periodsToGoal(100, 0, 0)).toBeNull();
  });
});

describe("lesson helpers", () => {
  it("unit price", () => {
    expect(unitPrice(4.2, 6)).toBeCloseTo(0.7);
    expect(unitPrice(3.3, 0.75)).toBeCloseTo(4.4);
    expect(unitPrice(3, 0)).toBeNull();
  });
  it("in-game packs (Álex: 1.200 gems, packs of 1.000 at 9,99 €)", () => {
    expect(packCost(1200, 1000, 9.99)).toEqual({ packs: 2, paid: 19.98, fairPrice: 11.99, leftover: 800 });
    expect(packCost(750, 500, 4.99)?.paid).toBe(9.98);
    expect(packCost(500, 500, 4.99)?.leftover).toBe(0);
    expect(packCost(100, 0, 1)).toBeNull();
  });
  it("annual gross with 12 or 14 payments", () => {
    expect(annualGross(1200, 14)).toBe(16800);
    expect(annualGross(1400, 12)).toBe(16800);
    expect(annualGross(1050, 14)).toBeGreaterThan(annualGross(1200, 12));
  });
  it("progressive tax applies each rate only to its bracket", () => {
    const scale = [
      { upTo: 10000, rate: 0.1 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.2 },
    ];
    expect(progressiveTax(12000, scale).total).toBe(1400);
    expect(progressiveTax(11000, scale).total).toBe(1200);
    expect(progressiveTax(10001, scale).total).toBe(1000.2);
    expect(progressiveTax(0, scale).total).toBe(0);
    const exam = [
      { upTo: 12000, rate: 0.15 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.25 },
    ];
    expect(progressiveTax(14000, exam).total).toBe(2300);
  });
  it("earning more never leaves you with less after tax", () => {
    const scale = [
      { upTo: 10000, rate: 0.1 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.2 },
    ];
    for (let income = 9000; income < 11000; income += 250) {
      const a = income - progressiveTax(income, scale).total;
      const b = income + 1 - progressiveTax(income + 1, scale).total;
      expect(b).toBeGreaterThan(a);
    }
  });
  it("tax return outcome", () => {
    expect(taxReturnResult(0, 42)).toEqual({ diff: -42, outcome: "devolver" });
    expect(taxReturnResult(120, 200)).toEqual({ diff: -80, outcome: "devolver" });
    expect(taxReturnResult(200, 120)).toEqual({ diff: 80, outcome: "pagar" });
    expect(taxReturnResult(50, 50)).toEqual({ diff: 0, outcome: "cero" });
  });
  it("inflation", () => {
    expect(priceWithInflation(3, 0.03, 5)).toBe(3.48);
  });
});
