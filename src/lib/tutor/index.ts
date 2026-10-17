/**
 * Tutoring layer. Today the hints are hand-written in the content
 * (StaticTutorProvider); a future AI-backed provider can implement the same
 * interface without changing the lesson or assessment UI.
 */
export interface TutorQuestion {
  id: string;
  hint: string;
  explanation: string;
}

export interface TutorProvider {
  /** A nudge before answering. Never reveals the answer. */
  hint(question: TutorQuestion): Promise<string>;
  /** Why the correct answer is correct (shown after answering). */
  explain(question: TutorQuestion, answeredCorrectly: boolean): Promise<string>;
}

export class StaticTutorProvider implements TutorProvider {
  async hint(q: TutorQuestion) {
    return q.hint;
  }

  async explain(q: TutorQuestion, answeredCorrectly: boolean) {
    return answeredCorrectly ? q.explanation : `No es esa. ${q.explanation}`;
  }
}

export const tutor: TutorProvider = new StaticTutorProvider();
