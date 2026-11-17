import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = resolve(join(outputDir, 'entry.txt'));

const PLAN = `Plan: sell fixed-scope year-end on-chain books to Solana DAOs in USDC; accountants charge $300+, we charge $150 and deliver in 24h.
Report: multisig token balances in USD, categorised flows, P&L, accountant CSV, from public Solana RPC + CoinGecko.
Buyer: signers of $50k-$50M DAOs with no finance hire, who report to tokenholders and hand books to a bookkeeper.
First 3: MonkeDAO, Metaplex DAO, Jupiter DAO; find signer wallets on their public Realms/Squads pages, match public X/Telegram handles, send one tailored note with a free sample of that treasury.
Day 1 build all 3 samples and message one signer each; day 2 post the MonkeDAO sample in its governance forum; then 60 Realms DAOs with unreconciled proposals, one tailored note each, no bulk blast.
Price: $150 per year-end package, or $75/month, paid upfront USDC; no KYC or bank.
Day 30: ~$700 expected = $100 + 4 x $150 from 60 approaches at 7%. Worst case $100: tools $0, work starts after payment.
`;

function validatePlan(plan: string): number {
  const bytes = Buffer.byteLength(plan, 'utf8');
  if (bytes < 1 || bytes > 1000) {
    throw new Error(`plan must be 1..1000 UTF-8 bytes, got ${bytes}`);
  }
  if (plan.trim().length === 0) {
    throw new Error('plan must not be only whitespace');
  }
  return bytes;
}

function writeEntry(plan: string): void {
  const bytes = validatePlan(plan);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, plan, { encoding: 'utf8' });
  console.log(`wrote ${bytes} bytes to ${outputPath}`);
}

writeEntry(PLAN);
