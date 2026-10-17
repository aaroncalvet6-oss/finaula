"use client";

import type { ToolSlug } from "@/content/schema";
import { BudgetTool } from "./BudgetTool";
import { CompoundTool } from "./CompoundTool";
import { SavingsGoalTool } from "./SavingsGoalTool";
import { WorkHoursTool } from "./WorkHoursTool";

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
