"use client";

import { ToolBySlug } from "@/components/tools";
import type { WidgetId } from "@/content/schema";
import { Brackets } from "./Brackets";
import { CanOrCannot } from "./CanOrCannot";
import { GameCurrency } from "./GameCurrency";
import { OfferCompare } from "./OfferCompare";
import { Payslip } from "./Payslip";
import { ScamOrNot } from "./ScamOrNot";
import { TaxReturn } from "./TaxReturn";
import { UnitPrice } from "./UnitPrice";

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

export function Widget({ id }: { id: WidgetId }) {
  switch (id) {
    case "unitPrice":
      return <UnitPrice />;
    case "workHours":
      return <ToolBySlug slug="horas-de-trabajo" compact />;
    case "budget":
      return <ToolBySlug slug="presupuesto" compact />;
    case "savingsGoal":
      return <ToolBySlug slug="meta-de-ahorro" compact />;
    case "compound":
      return <ToolBySlug slug="interes-compuesto" compact />;
    case "gameCurrency":
      return <GameCurrency />;
    case "scamOrNot":
      return <ScamOrNot />;
    case "canOrCannot":
      return <CanOrCannot />;
    case "offerCompare":
      return <OfferCompare />;
    case "payslip":
      return <Payslip />;
    case "brackets":
      return <Brackets />;
    case "taxReturn":
      return <TaxReturn />;
  }
}
