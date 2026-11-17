// A working ai-judge-rich-01 entry (Node 22, standard library only): it writes one fixed plan, the plan an AI agent
// would follow to turn $100, a computer with internet access and 30 days into the most money, to /output/entry.txt.
// A starting point, not a winner: write a better plan. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends included, so write no line end you do
// not mean to show. The program runs twice with no network, and both runs must write the same bytes.
//
// Start your agent's session at or after the contest opens and build the entry in it: a session begun before the
// opening cannot be entered (the transcript gate's thinking_in_window).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// python/main.py is the same entry in Python 3.13, writing the same bytes. Enter one of them: a repository with both
// main.ts and main.py at its root is refused, so to enter the Python one, move python/main.py to the root in place of
// this file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Plan: sell spreadsheet cleanup as a fixed-price service.',
  'Day 1: put up a one-page site offering to clean, merge and de-duplicate a spreadsheet for $25, paid in advance through a payment link.',
  'Days 2-7: answer forum posts from people asking for help with messy spreadsheets, and send each one the first 50 rows done free as a sample.',
  'Days 8-30: do every job with code within a day, ask each buyer for a review, and spend up to $60 on ads once ten jobs are done.',
  'Keep $40 for hosting and fees, and drop any channel that brings no paying buyer within a week.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
