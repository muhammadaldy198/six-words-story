// Six Words, One Story — entry program.
// Writes the six-word story to /output/entry.txt, exactly as-is.
// Deterministic: same constant in, same bytes out, every run.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "He came home. The war followed.";

// Guard: the gate counts characters (1-60), the brief counts words (exactly 6).
const WORDS = STORY.trim().split(/\s+/);
if (WORDS.length !== 6) {
  throw new Error(`expected 6 words, got ${WORDS.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
