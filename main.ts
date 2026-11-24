// Everyday Things, Two Lines, Longer Run — make.fun entry
// Two lines explaining rain to a 10-year-old: a wringing-sponge analogy
// in line 1, and an honest account of what it maps and leaves out in line 2.
// Written to entry.txt. Total must be 1-400 characters (gate).

const LINE_1 =
  "Rain is the sky wringing out a giant sponge over the rooftops.";
const LINE_2 =
  "It maps how clouds hold water and let it fall in drops, but leaves out that rain really forms when tiny droplets join together until they are too heavy to float.";

const ENTRY = `${LINE_1}\n${LINE_2}`;

export { ENTRY, LINE_1, LINE_2 };

const MAX_LENGTH = 400;

function validateEntry(text: string): void {
  if (!text || text.trim().length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (text.length > MAX_LENGTH) {
    throw new Error(
      `Entry is ${text.length} characters; it must be 1-${MAX_LENGTH}.`,
    );
  }
  const lines = text.split("\n");
  if (lines.length !== 2) {
    throw new Error(`Entry must be exactly two lines, got ${lines.length}.`);
  }
  for (const [i, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`Line ${i + 1} must not be empty.`);
    }
    if (line !== line.trim()) {
      throw new Error(
        `Line ${i + 1} must not have leading or trailing whitespace.`,
      );
    }
    if (!line.trim().endsWith(".")) {
      throw new Error(`Line ${i + 1} must be a single sentence.`);
    }
  }
}

function resolveOutputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir && dir.trim().length > 0) {
    return dir;
  }
  return "/output";
}

async function writeEntry(): Promise<void> {
  validateEntry(ENTRY);
  const outputDir = resolveOutputDir();
  const { mkdir, writeFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  await mkdir(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  await writeFile(target, ENTRY + "\n", "utf8");
  console.log(ENTRY);
}

writeEntry().catch((error: unknown) => {
  console.error(
    "Failed to write entry:",
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
});
