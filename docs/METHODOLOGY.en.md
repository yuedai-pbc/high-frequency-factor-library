# Methodology

Nine research entries assembled from the supplied chapter and research summary. The independent original high-frequency library has not been located; these entries are not a complete migration.

## Step 1

Align exchange and receipt timestamps, trading days, sessions and sampling slots.

## Step 2

Construct session returns and message-based activity measures from compatible windows; separate proxies from actual labeled HFT participation.

## Step 3

Compare same-slot persistence, cross-slot reversal, variance and liquidity after seasonal adjustment.

## Step 4

Use subsequent executable prices and transaction costs; test incremental information under rolling and grouped holdouts.

## Research protocol

Register each seed's hypothesis, source version, formula, market, sign, availability time, unit and missing-value rule. Whitelist transformations and assign versioned feature IDs. Fit time-series thresholds, regressions and PCA on training history only. Contemporaneous ranks use only eligible information available at that time.

Use rolling training, validation and a sealed final test. Purge overlapping labels according to the holding horizon and respect issuer, manager, underlying and contract groups. Never use the final test to choose directions or versions.

Deduplicate identical formulas, unit changes and strictly monotonic representations before claiming independent signals. Correlation clustering is fitted in training data; |Spearman| > 0.95 is only an example threshold to pre-register, not a universal rule. Evaluate family-level incremental prediction, ablations, coverage, stability, turnover and costs. Retain all attempts and address multiple testing, for example with FDR or hierarchical family screening.

Counts describe three different things: current source records; planned candidate columns including base expressions; and factors retained after data and out-of-sample screening. Only the first two are known or budgeted. Planning totals must not be added mechanically to catalog counts or interpreted as independent alpha dimensions. Use the lower version budget first, expanding only after basic replication and data-quality gates. Interactions consume the existing version allowance. Data-quality flags, position scaling and PnL accounting are not predictive seeds.
