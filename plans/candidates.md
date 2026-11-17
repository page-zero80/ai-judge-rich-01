# Candidate plans (each under 1000 chars)

## Candidate 1 — Fresh Solana token risk feed (information asymmetry)

Product: a daily JSON/Telegram feed of newly created Solana tokens (age<24h) with liquidity, mint/freeze authority status, and LP-lock check, sold as "rug-risk flags" for traders. Buyer: Solana memecoin traders and bot operators who lose money to honeypots. Channel: post a free 6-hour-delayed sample list daily on r/solana and Solana Discord; paid link for real-time. Price: $9 USDC one-time or $5/week subscription to a wallet address; delivery via Telegram bot. Day 1: write the scraper using public Solana RPC + DexScreener, publish first sample, create Telegram bot, post sample. Edge: sub-hour freshness plus automated risk flags, cheaper than manual. Worst case: no buyers, keep $100 (no upfront cost, runs on provided computer).

## Candidate 2 — DAO treasury reconciliation reports (paid niche, no competent supplier)

Product: a monthly treasury reconciliation report for Solana DAOs: token balances priced in USD, inflows/outflows, and CSV export, generated from public RPC + CoinGecko. Buyer: DAO treasurers and multisig signers who need accounting for taxes, audits, and contributor payouts. Channel: publish a full sample report for one well-known public treasury on Solana governance forums and DAO Discord servers; DM treasurers of active DAOs. Price: $30 USDC per report or $75/month. Day 1: generate the sample report for a public treasury, post it with a payment address and turnaround promise (24h). Edge: crypto accounting is painful and has no cheap competent supplier; agent automates data gathering. Worst case: no buyers, keep $100; reports are generated only after payment.

## Candidate 3 — Cross-venue Solana digital-asset arbitrage (marketplace arbitrage)

Product: cross-venue arbitrage of Solana digital assets: buy NFTs or SNS domains listed >8% below floor on Magic Eden, relist on Tensor/secondary; only execute when spread exceeds fees + 2%. Buyer: none (self-funded). Channel: automated bot polling public marketplace APIs. Price: profit from spread. Day 1: implement price scanner and dry-run for 48h; only commit capital after 10 profitable dry-run signals. Edge: disciplined entry rules and small size limit downside. Worst case: if spreads vanish, hold cash; max loss capped at priority fees (~$2).
filePath: /root/mf_ajr/repo/plans/candidates.md