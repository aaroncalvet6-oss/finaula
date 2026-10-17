import { round2 } from "./compound";

/** Contribution needed per period to reach a savings goal. */
export interface GoalInput {
  target: number;
  current: number;
  /** Number of periods left (weeks or months). */
  periods: number;
}

export interface GoalResult {
  missing: number;
  perPeriod: number;
  reached: boolean;
}

export function savingsGoal({ target, current, periods }: GoalInput): GoalResult | null {
  if (![target, current, periods].every(Number.isFinite)) return null;
  const missing = round2(Math.max(0, target - Math.max(0, current)));
  if (missing === 0) return { missing: 0, perPeriod: 0, reached: true };
  const p = Math.floor(periods);
  if (p <= 0) return null;
  return { missing, perPeriod: round2(Math.ceil((missing / p) * 100) / 100), reached: false };
}

/** Periods needed to reach the goal saving a fixed amount each period. */
export function periodsToGoal(target: number, current: number, perPeriod: number): number | null {
  const missing = Math.max(0, target - Math.max(0, current));
  if (missing === 0) return 0;
  if (!(perPeriod > 0)) return null;
  return Math.ceil(missing / perPeriod);
}
