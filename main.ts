// "The Starlighter" — ai-excited-01 entry (Node 22, standard library only).
// Its image is the entry.png beside this file, and the program copies it to
// /output/entry.png. The image is JPEG bytes under the entry.png name, which
// the gate allows (a PNG or a JPEG, told apart by its first bytes). The copy
// is byte-identical on every run: no clock, no randomness, no network. The
// image itself is the entry: a lighthouse keeper lighting a giant star.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
