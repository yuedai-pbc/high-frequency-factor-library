# Data contract

Each record retains entity_id, observation_at, available_at, decision_at, execution_at, value, unit and source_version. Use consistent ISO-8601 timestamps and time zones. Enforce available_at <= decision_at < execution_at; period-end dates are not publication dates. Keep historical revisions and missing values; never backward-fill from future observations.

Returns are decimals (1% = 0.01); costs are basis points (1 bp = 0.0001). Variance and volatility require separate fields. Preserve original units and conversion rules.

## Asset-specific inputs

Require tick or consistent minute data, exchange and receipt timestamps, message definitions and historical sessions. Daily prices alone cannot support this budget.

Distinguish call auctions, continuous trading and lunch breaks. Align trades, quotes and orders by timestamp; handle cancellations and duplicate messages.

## Applicability

- Nine is the number of entries currently organized on this website, not the size of the user's complete high-frequency library.
- Some prose in the original chapter conflicts with the direction implied by its proxy formula. This website follows the formula.
- Integration of the standalone library, tick replay and real transaction-cost tests remain pending.
