import { emptyProfile, emptyProgress, profileSchema, progressSchema, type Profile, type Progress } from "./schema";

/**
 * Where learner progress lives. Today: the browser only (LocalProgressRepository).
 * A future account-backed implementation can replace it without touching the UI.
 */
export interface ProgressRepository {
  loadProgress(): Promise<Progress>;
  saveProgress(progress: Progress): Promise<void>;
  loadProfile(): Promise<Profile>;
  saveProfile(profile: Profile): Promise<void>;
  /** Removes everything this app stored. */
  clear(): Promise<void>;
}

export const STORAGE_PREFIX = "finaula:";
export const PROGRESS_KEY = `${STORAGE_PREFIX}progress`;
export const PROFILE_KEY = `${STORAGE_PREFIX}profile`;

/** Minimal Storage subset, so tests can pass an in-memory implementation. */
export type KeyValueStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export class LocalProgressRepository implements ProgressRepository {
  constructor(private readonly storage: KeyValueStorage | null = typeof window === "undefined" ? null : safeLocalStorage()) {}

  private read<T>(key: string, parse: (v: unknown) => T, fallback: () => T): T {
    try {
      const raw = this.storage?.getItem(key);
      if (!raw) return fallback();
      return parse(JSON.parse(raw));
    } catch {
      // Corrupted or from an incompatible version: start fresh rather than crash.
      return fallback();
    }
  }

  private write(key: string, value: unknown) {
    try {
      this.storage?.setItem(key, JSON.stringify(value));
    } catch {
      // Storage full or blocked (private mode): progress just won't persist.
    }
  }

  async loadProgress() {
    return this.read(PROGRESS_KEY, (v) => progressSchema.parse(v), emptyProgress);
  }

  async saveProgress(progress: Progress) {
    this.write(PROGRESS_KEY, progressSchema.parse(progress));
  }

  async loadProfile() {
    return this.read(PROFILE_KEY, (v) => profileSchema.parse(v), emptyProfile);
  }

  async saveProfile(profile: Profile) {
    this.write(PROFILE_KEY, profileSchema.parse(profile));
  }

  async clear() {
    try {
      this.storage?.removeItem(PROGRESS_KEY);
      this.storage?.removeItem(PROFILE_KEY);
    } catch {
      // ignore
    }
  }
}

function safeLocalStorage(): KeyValueStorage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
