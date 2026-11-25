// The 4AM Commit — one-line entry.
//
// Writes the commit message to entry.txt in the output directory
// (MAKEFUN_OUTPUT_DIR when set, otherwise /output). Deterministic:
// every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: hand-computed a unix timestamp at 4 a.m., landed 20 minutes outside the window, and briefly concluded the bounty did not exist";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
