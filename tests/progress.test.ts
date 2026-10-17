import { describe, expect, it } from "vitest";
import { LocalProgressRepository, PROFILE_KEY, PROGRESS_KEY, type KeyValueStorage } from "@/lib/progress/repository";
import { answerQuestion, completedCount, completeLesson, reachStep, recordAssessment } from "@/lib/progress/reducers";
import { emptyProgress } from "@/lib/progress/schema";

function memoryStorage(): KeyValueStorage & { data: Map<string, string> } {
  const data = new Map<string, string>();
  return {
    data,
    getItem: (k) => data.get(k) ?? null,
    setItem: (k, v) => void data.set(k, v),
    removeItem: (k) => void data.delete(k),
  };
}

describe("LocalProgressRepository", () => {
  it("round-trips progress and profile under the finaula: prefix", async () => {
    const storage = memoryStorage();
    const repo = new LocalProgressRepository(storage);
    const p = reachStep(emptyProgress(), "c", "l", 2);
    await repo.saveProgress(p);
    await repo.saveProfile({ version: 1, certificateName: "Lucía" });
    expect([...storage.data.keys()].every((k) => k.startsWith("finaula:"))).toBe(true);
    expect(await repo.loadProgress()).toEqual(p);
    expect((await repo.loadProfile()).certificateName).toBe("Lucía");
  });

  it("returns empty state for missing, corrupted or foreign data", async () => {
    const storage = memoryStorage();
    const repo = new LocalProgressRepository(storage);
    expect(await repo.loadProgress()).toEqual(emptyProgress());
    storage.setItem(PROGRESS_KEY, "{not json");
    expect(await repo.loadProgress()).toEqual(emptyProgress());
    storage.setItem(PROGRESS_KEY, JSON.stringify({ version: 99, lessons: [] }));
    expect(await repo.loadProgress()).toEqual(emptyProgress());
    storage.setItem(PROFILE_KEY, JSON.stringify({ version: 1, certificateName: 42 }));
    expect((await repo.loadProfile()).certificateName).toBe("");
  });

  it("works without storage (server or blocked storage)", async () => {
    const repo = new LocalProgressRepository(null);
    await repo.saveProgress(emptyProgress());
    expect(await repo.loadProgress()).toEqual(emptyProgress());
  });

  it("survives a storage that throws", async () => {
    const throwing: KeyValueStorage = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("full");
      },
      removeItem: () => {
        throw new Error("blocked");
      },
    };
    const repo = new LocalProgressRepository(throwing);
    await expect(repo.saveProgress(emptyProgress())).resolves.toBeUndefined();
    expect(await repo.loadProgress()).toEqual(emptyProgress());
    await expect(repo.clear()).resolves.toBeUndefined();
  });

  it("clear removes everything", async () => {
    const storage = memoryStorage();
    const repo = new LocalProgressRepository(storage);
    await repo.saveProgress(emptyProgress());
    await repo.saveProfile({ version: 1, certificateName: "X" });
    await repo.clear();
    expect(storage.data.size).toBe(0);
  });
});

describe("progress reducers", () => {
  it("only moves the step forward and remembers the last lesson", () => {
    let p = reachStep(emptyProgress(), "c", "l", 3);
    p = reachStep(p, "c", "l", 1);
    expect(p.lessons["c/l"].step).toBe(3);
    expect(p.last).toEqual({ course: "c", lesson: "l" });
  });

  it("stores answers and completion", () => {
    let p = answerQuestion(emptyProgress(), "c", "l", "q1", 2);
    p = completeLesson(p, "c", "l", 5);
    expect(p.lessons["c/l"]).toMatchObject({ step: 5, completed: true, answers: { q1: 2 } });
    expect(completedCount(p, "c", ["l", "m"])).toBe(1);
  });

  it("records assessments: best score, first pass kept for the certificate", () => {
    let n = 0;
    const id = () => `ID${++n}`;
    let p = recordAssessment(emptyProgress(), "c", 5, 10, 7, id);
    expect(p.assessments.c).toMatchObject({ attempts: 1, bestScore: 5, passed: false });
    expect(p.assessments.c.certificateId).toBeUndefined();
    p = recordAssessment(p, "c", 8, 10, 7, id);
    expect(p.assessments.c).toMatchObject({ attempts: 2, bestScore: 8, passed: true, passedScore: 8, certificateId: "ID1" });
    p = recordAssessment(p, "c", 6, 10, 7, id);
    expect(p.assessments.c).toMatchObject({ attempts: 3, bestScore: 8, passed: true, passedScore: 8, certificateId: "ID1" });
  });

  it("passes exactly at the pass mark", () => {
    const p = recordAssessment(emptyProgress(), "c", 6, 8, 6, () => "X");
    expect(p.assessments.c.passed).toBe(true);
  });
});
