"use client";

import { useEffect } from "react";
import { useProgress } from "./store";

/** Loads stored progress once on the client and returns the store. */
export function useHydratedProgress() {
  const state = useProgress();
  const hydrate = useProgress((s) => s.hydrate);
  useEffect(() => {
    void hydrate();
  }, [hydrate]);
  return state;
}
