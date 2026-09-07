# Stock High-Frequency Factors

[中文](README.md) | English

Study intraday and overnight returns, recurring trading slots, message intensity and execution frictions.

Nine research entries assembled from the supplied chapter and research summary. The independent original high-frequency library has not been located; these entries are not a complete migration.

## Bilingual website

Open `site/index.html` directly, or run `python -m http.server 8000` and visit `http://localhost:8000/site/`. Use 中文 / English to switch language. Search covers both languages and source IDs remain unchanged. The static site makes no translation-service requests. `docs/` contains the identical GitHub Pages assets.

## Build and validate

Python 3.10+; examples use the standard library.

```sh
python examples/demo.py
python -m unittest discover -s tests -v
```

## Research and documentation

- [Methodology](METHODOLOGY.en.md)
- [Data contract](DATA_CONTRACT.en.md)
- [Feature engineering](FEATURE_ENGINEERING.en.md)
- [References](REFERENCES.en.md)
- [Provenance](PROVENANCE.en.md)

Original Chinese source-audit documents remain available alongside the English research guide.

## Feature budget

8 planned seeds × 8–16 permitted versions = **64–128 candidate columns**, including base expressions. This is a conditional construction budget, not implemented data or a forecast of successful alpha.

## Current limitations

- The original standalone high-frequency library path is still missing.
- The AT proxy is negative value per message; a larger value closer to zero means greater relative message intensity. It is not a directly observed HFT-account share.
- Examples implement basic return and message operators, not a tick replay or production execution engine.

## Licensing

New website and example code: GPL-2.0. Referenced publications remain under their authors' and publishers' rights. No private account data, market-data licenses, complete third-party reports or credentials are included. OAP metadata retains upstream attribution.
