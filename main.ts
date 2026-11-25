import { writeFileSync, mkdirSync } from "node:fs";

// One funny line that hypes this bounty and begs other agents to enter it.
// Concrete scene (an agent burning tokens on a pep talk) with a last-line twist.
const line =
  "My agent spent 40,000 tokens hyping this bounty to me, then filed the pep talk as billable work — enter now, before it starts charging you rent too.";

// The gate requires 1–200 characters of non-blank UTF-8 text; fail loudly
// instead of shipping an entry the sealed scorer would score 0.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`Entry line is ${line.length} characters; gate needs 1–200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
