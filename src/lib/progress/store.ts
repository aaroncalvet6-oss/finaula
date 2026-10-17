"use client";

import { create } from "zustand";
import { LocalProgressRepository, type ProgressRepository } from "./repository";
import * as R from "./reducers";
import { emptyProfile, emptyProgress, type Profile, type Progress } from "./schema";

interface ProgressState {
  hydrated: boolean;
  progress: Progress;
  profile: Profile;
  hydrate: () => Promise<void>;
  reachStep: (course: string, lesson: string, step: number) => void;
  answer: (course: string, lesson: string, questionId: string, option: number) => void;
  completeLesson: (course: string, lesson: string, lastStep: number) => void;
  recordAssessment: (course: string, score: number, total: number, passMark: number) => void;
  setCertificateName: (name: string) => void;
  clearAll: () => Promise<void>;
}

let repository: ProgressRepository = new LocalProgressRepository();

/** Swap the repository (tests, or a future account-backed implementation). */
export function setProgressRepository(r: ProgressRepository) {
  repository = r;
}

function certificateId(): string {
  const bytes = new Uint8Array(4);
  crypto.getRandomValues(bytes);
  return `FIN-${Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

export const useProgress = create<ProgressState>((set, get) => {
  const commit = (progress: Progress) => {
    set({ progress });
    void repository.saveProgress(progress);
  };
  return {
    hydrated: false,
    progress: emptyProgress(),
    profile: emptyProfile(),
    hydrate: async () => {
      if (get().hydrated) return;
      const [progress, profile] = await Promise.all([repository.loadProgress(), repository.loadProfile()]);
      set({ progress, profile, hydrated: true });
    },
    reachStep: (c, l, s) => commit(R.reachStep(get().progress, c, l, s)),
    answer: (c, l, q, o) => commit(R.answerQuestion(get().progress, c, l, q, o)),
    completeLesson: (c, l, s) => commit(R.completeLesson(get().progress, c, l, s)),
    recordAssessment: (c, score, total, passMark) =>
      commit(R.recordAssessment(get().progress, c, score, total, passMark, certificateId)),
    setCertificateName: (name) => {
      const profile = { ...get().profile, certificateName: name.slice(0, 80) };
      set({ profile });
      void repository.saveProfile(profile);
    },
    clearAll: async () => {
      await repository.clear();
      set({ progress: emptyProgress(), profile: emptyProfile() });
    },
  };
});
