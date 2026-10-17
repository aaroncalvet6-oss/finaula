import { round2 } from "./compound";

/** Teen monthly budget: save first, then fixed costs, then what is left for variable spending. */
export interface BudgetInput {
  income: number;
  fixed: number;
  /** Saving rate as a fraction between 0 and 0.5. */
  savingRate: number;
  /** Planned variable spending (optional, to compare with what is available). */
  variablePlanned?: number;
}

export interface BudgetResult {
  saving: number;
  spendable: number;
  variableAvailable: number;
  /** How much the plan goes over (0 if it fits). */
  shortfall: number;
  savingRate: number;
}

export const MAX_SAVING_RATE = 0.5;

export function budget({ income, fixed, savingRate, variablePlanned = 0 }: BudgetInput): BudgetResult {
  const inc = Math.max(0, Number.isFinite(income) ? income : 0);
  const fix = Math.max(0, Number.isFinite(fixed) ? fixed : 0);
  const rate = Math.min(MAX_SAVING_RATE, Math.max(0, Number.isFinite(savingRate) ? savingRate : 0));
  const planned = Math.max(0, Number.isFinite(variablePlanned) ? variablePlanned : 0);
  const saving = round2(inc * rate);
  const spendable = round2(inc - saving);
  const variableAvailable = round2(spendable - fix);
  const shortfall = round2(Math.max(0, fix + planned - spendable));
  return { saving, spendable, variableAvailable, shortfall, savingRate: rate };
}
