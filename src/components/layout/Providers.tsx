"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const loadFeatures = () => import("./motionFeatures").then((m) => m.default);

/**
 * Animations follow the system «reduce motion» setting. Motion's animation
 * features load after the page is interactive (components use `m.*`).
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
