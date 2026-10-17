"use client";

import dynamic from "next/dynamic";
import type { ToolSlug } from "@/content/schema";
import { BudgetTool } from "./BudgetTool";
import { SavingsGoalTool } from "./SavingsGoalTool";
import { WorkHoursTool } from "./WorkHoursTool";

// Recharts is only loaded where the compound interest tool is shown.
const CompoundTool = dynamic(() => import("./CompoundTool").then((m) => m.CompoundTool), {
  loading: () => <div className="h-[34rem] rounded-md bg-sunken" aria-hidden="true" />,
});

export function ToolBySlug({ slug, compact }: { slug: ToolSlug; compact?: boolean }) {
  switch (slug) {
    case "horas-de-trabajo":
      return <WorkHoursTool compact={compact} />;
    case "presupuesto":
      return <BudgetTool compact={compact} />;
    case "meta-de-ahorro":
      return <SavingsGoalTool compact={compact} />;
    case "interes-compuesto":
      return <CompoundTool compact={compact} />;
  }
}
