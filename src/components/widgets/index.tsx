"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { WidgetId } from "@/content/schema";

export const widgetTitles: Record<WidgetId, string> = {
  unitPrice: "Comparador de precio por unidad",
  workHours: "Horas de trabajo",
  budget: "Tu presupuesto",
  savingsGoal: "Meta de ahorro",
  gameCurrency: "Moneda de juego a euros",
  scamOrNot: "¿Estafa o no?",
  compound: "Interés compuesto",
  canOrCannot: "¿Es legal?",
  offerCompare: "Comparador de ofertas",
  payslip: "Nómina interactiva",
  brackets: "Calculadora de tramos",
  taxReturn: "¿A pagar o a devolver?",
};

const loading = () => <div className="h-48 rounded-md bg-sunken" aria-hidden="true" />;

// Lesson versions of the tools (compact layout).
const compact = <P extends { compact?: boolean }>(Tool: ComponentType<P>) => {
  function CompactTool() {
    return <Tool {...({ compact: true } as P)} />;
  }
  return CompactTool;
};

// Each lesson only downloads the widgets it shows, when the practice section appears.
const widgets: Record<WidgetId, ComponentType> = {
  unitPrice: dynamic(() => import("./UnitPrice").then((m) => m.UnitPrice), { loading }),
  workHours: dynamic(() => import("@/components/tools/WorkHoursTool").then((m) => compact(m.WorkHoursTool)), { loading }),
  budget: dynamic(() => import("@/components/tools/BudgetTool").then((m) => compact(m.BudgetTool)), { loading }),
  savingsGoal: dynamic(() => import("@/components/tools/SavingsGoalTool").then((m) => compact(m.SavingsGoalTool)), {
    loading,
  }),
  compound: dynamic(() => import("@/components/tools/CompoundTool").then((m) => compact(m.CompoundTool)), { loading }),
  gameCurrency: dynamic(() => import("./GameCurrency").then((m) => m.GameCurrency), { loading }),
  scamOrNot: dynamic(() => import("./ScamOrNot").then((m) => m.ScamOrNot), { loading }),
  canOrCannot: dynamic(() => import("./CanOrCannot").then((m) => m.CanOrCannot), { loading }),
  offerCompare: dynamic(() => import("./OfferCompare").then((m) => m.OfferCompare), { loading }),
  payslip: dynamic(() => import("./Payslip").then((m) => m.Payslip), { loading }),
  brackets: dynamic(() => import("./Brackets").then((m) => m.Brackets), { loading }),
  taxReturn: dynamic(() => import("./TaxReturn").then((m) => m.TaxReturn), { loading }),
};

export function Widget({ id }: { id: WidgetId }) {
  const Component = widgets[id];
  return <Component />;
}
