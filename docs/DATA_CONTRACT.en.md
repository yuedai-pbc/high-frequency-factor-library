# Data contract

Each record retains entity_id, observation_at, available_at, decision_at, execution_at, value, unit and source_version. Use consistent ISO-8601 timestamps and time zones. Enforce available_at <= decision_at < execution_at; period-end dates are not publication dates. Keep historical revisions and missing values; never backward-fill from future observations.

Returns are decimals (1% = 0.01); costs are basis points (1 bp = 0.0001). Variance and volatility require separate fields. Preserve original units and conversion rules.

## Asset-specific inputs

Require tick or consistent minute data, exchange and receipt timestamps, message definitions and historical sessions. Daily prices alone cannot support this budget.

Align exchange and receipt timestamps, trading days, sessions and sampling slots.

## Applicability

- The original standalone high-frequency library path is still missing.
- The AT proxy is negative value per message; a larger value closer to zero means greater relative message intensity. It is not a directly observed HFT-account share.
- Examples implement basic return and message operators, not a tick replay or production execution engine.
