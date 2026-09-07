# Feature engineering and generalization

8 seeds × 8–16 total versions = **64–128 planned columns**, including base expressions. Derived expressions beyond one per seed: 56–120. Current catalog: 9 entries; do not add these different units.

## Priority

Consolidate nine current research entries into roughly eight initial seeds. Keep message proxies separate from directly labeled HFT accounts.

## Windows

Intraday windows: 5/15/30/60 minutes and opening/closing sessions; use 5/20-day historical same-slot baselines. Retain nested windows only when they represent distinct information.

## Transforms

Basic within-window measure, intraday-seasonality residual, historical same-slot z-score, lagged change and session/side conditioning. Eight to sixteen is the total allowed versions per seed, not all parameter combinations.

## Example

Message intensity: messages/value, 15/30-minute variants, prior-20-day same-slot normalization, opening-minus-closing difference and a separately tested liquidity condition.

## Data

Require tick or consistent minute data, exchange and receipt timestamps, message definitions and historical sessions. Daily prices alone cannot support this budget.

## Generalize

Normalize trading-session coordinates and hold out months, stocks and exchanges. Separate overlapping windows and evaluate at subsequent executable quotes.

## Planned seed allocation

- Session returns: 3
- Messages/trading intensity: 2
- Volatility/efficiency: 2
- Liquidity: 1

## Protocol and counting conventions

Register each seed's hypothesis, source version, formula, market, sign, availability time, unit and missing-value rule. Whitelist transformations and assign versioned feature IDs. Fit time-series thresholds, regressions and PCA on training history only. Contemporaneous ranks use only eligible information available at that time.

Use rolling training, validation and a sealed final test. Purge overlapping labels according to the holding horizon and respect issuer, manager, underlying and contract groups. Never use the final test to choose directions or versions.

Deduplicate identical formulas, unit changes and strictly monotonic representations before claiming independent signals. Correlation clustering is fitted in training data; |Spearman| > 0.95 is only an example threshold to pre-register, not a universal rule. Evaluate family-level incremental prediction, ablations, coverage, stability, turnover and costs. Retain all attempts and address multiple testing, for example with FDR or hierarchical family screening.

Counts describe three different things: current source records; planned candidate columns including base expressions; and factors retained after data and out-of-sample screening. Only the first two are known or budgeted. Planning totals must not be added mechanically to catalog counts or interpreted as independent alpha dimensions. Use the lower version budget first, expanding only after basic replication and data-quality gates. Interactions consume the existing version allowance. Data-quality flags, position scaling and PnL accounting are not predictive seeds.
