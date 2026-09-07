# Stock High-Frequency Factors

[中文](README.md) · [English](README.en.md)

Study intraday and overnight returns, recurring trading slots, message intensity and execution frictions.

Nine research entries assembled from the supplied chapter and research summary. The independent original high-frequency library has not been located; these entries are not a complete migration.

## Website and language switching

[中文网页](https://yuedai-pbc.github.io/high-frequency-factor-library/?lang=zh) · [English website](https://yuedai-pbc.github.io/high-frequency-factor-library/?lang=en)

Overview, catalog, factor cards, methodology, feature engineering, reference notes and interaction messages are available in Chinese and English. Switch with 中文 / English at the top right; search supports both languages. Source IDs, original paper titles, authors, formula symbols and material labeled as upstream original text retain their source form for verification.

Open `site/index.html` offline, or start a server at the repository root:

```sh
python -m http.server 8000
```

Visit [localhost:8000/site/](http://localhost:8000/site/).

## Catalog scope

- **9**: Current research entries
- **30m**: Session research granularity
- **L2**: Target data level

## Construction approach

1. **Reconstruct trading time** — Distinguish call auctions, continuous trading and lunch breaks. Align trades, quotes and orders by timestamp; handle cancellations and duplicate messages.

2. **Define session features** — Keep the same slot across trading days. End the formation window before predicting the next slot. Calculate intraday and overnight returns using consistent corporate-action adjustments.

3. **Test mechanisms** — Use message intensity as an algorithmic-trading proxy and study its relationship with liquidity and session reversals. Causal tests require separately justified identification assumptions.

4. **Simulate executable outcomes** — Include bid/ask spreads, latency, impact and limit-order constraints. A-share backtests must check available holdings and T+1 restrictions.

## Feature engineering and generalization budget

8 planned seeds × 8–16 permitted versions per seed = **64–128 candidate columns**, including base expressions. This is a data-dependent construction budget, not a count of implemented or validated alphas.

Consolidate nine current research entries into roughly eight initial seeds. Keep message proxies separate from directly labeled HFT accounts.

[Full feature engineering protocol](docs/FEATURE_ENGINEERING.en.md)

## Run and test

Python 3.10+; basic examples use only the standard library.

```sh
python examples/demo.py
python -m unittest discover -s tests -v
```

## Files and research documentation

- `site/`: Static website with offline support.
- `docs/`: The same website for GitHub Pages and bilingual research documentation.
- `data/catalog.json` / `data/catalog.en.json`: Chinese / English factor catalogs.
- `data/references.json` / `data/references.en.json`: Chinese / English bibliographic notes.
- `src/factors.py`: Independently written basic operators.
- [Methodology and economic rationale](docs/METHODOLOGY.en.md)
- [Inputs and availability constraints](docs/DATA_CONTRACT.en.md)
- [Provenance and implementation scope](docs/PROVENANCE.en.md)
- [Papers and research links](docs/REFERENCES.en.md)
- [Bilingual review record](docs/BILINGUAL_AUDIT.en.md)

## Implementation status and remaining validation

- Nine is the number of entries currently organized on this website, not the size of the user's complete high-frequency library.
- Some prose in the original chapter conflicts with the direction implied by its proxy formula. This website follows the formula.
- Integration of the standalone library, tick replay and real transaction-cost tests remain pending.

## GitHub Pages publication

The website is published from `/docs` on the `main` branch. Synchronize static assets in `site/` and `docs/` when updating the website. GitHub Actions validates Python examples; the Pages build runs separately.

## Data, provenance and licensing

Example inputs are teaching data. No real holdings, raw market data, account information or credentials are included, and no real out-of-sample performance is claimed. New website and example code use GPL-2.0. Publications remain under their authors' and publishers' rights; complete third-party reports are not redistributed. OAP metadata retains upstream attribution.
