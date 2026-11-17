import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = `Plan: sell monthly treasury reconciliation reports to Solana DAOs, paid in USDC.
Product: a report of every token balance in a DAO treasury priced in USD, plus categorized inflows/outflows and CSV export, from public Solana RPC + CoinGecko.
Buyer: DAO treasurers/multisig signers needing accounting for taxes, audits, payouts.
Channel: publish one complete sample report for a public treasury on Solana governance forums and DAO Discords, then DM active DAO treasurers with the sample link.
Price: $30 USDC/report or $75/month; pay to an agent-controlled Solana address before work.
Day 1: generate the sample report, post it with payment address and 24h turnaround.
Edge: crypto accounting is tedious with no cheap competent supplier; agent automates gather+price, near-zero marginal cost.
Worst case: no buyers, keep $100 (work only after payment; no capital at risk).`;

if (PLAN.length < 1 || PLAN.length > 1000) {
  throw new Error(`PLAN length ${PLAN.length} out of range 1..1000`);
}
if (PLAN.trim().length === 0) {
  throw new Error('PLAN must not be only whitespace');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN, { encoding: 'utf8' });