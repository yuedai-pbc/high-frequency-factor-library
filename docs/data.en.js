window.LIBRARY_EN = {
  "slug": "high-frequency-factor-library",
  "title": "Stock High-Frequency Factors",
  "cn": "Stock High-Frequency Factors",
  "short": "Stock High-Frequency Factors",
  "eyebrow": "02 / MARKET MICROSTRUCTURE",
  "color": "#a85824",
  "factors": [
    {
      "id": "same_slot_momentum",
      "name": "Same-slot momentum",
      "category": "Session returns",
      "formula": "mean(r[d-k, slot]), k=1..lookback, using the same slot on prior trading days only.",
      "logic": "Recurring trading demand may create persistent slot-specific pressure.",
      "status": "Research definition documented",
      "refs": [
        "hks"
      ],
      "frequency": "30 minutes",
      "source": "User-supplied chapter 4 and preceding research summary",
      "caveat": "No future intraday observations may enter formation."
    },
    {
      "id": "cross_slot_reversal",
      "name": "Cross-slot reversal",
      "category": "Session returns",
      "formula": "Use completed-slot returns to test whether subsequent different-slot returns reverse.",
      "logic": "Temporary pressure may dissipate as investor groups change.",
      "status": "Research definition documented",
      "refs": [
        "hks",
        "lou"
      ],
      "frequency": "30 minutes",
      "source": "",
      "caveat": "Respect session boundaries and the next executable price."
    },
    {
      "id": "intraday",
      "name": "Intraday return",
      "category": "Session returns",
      "formula": "C_t/O_t-1; compound monthly as product(1+r_intraday)-1.",
      "logic": "Separates price formation during continuous trading.",
      "status": "Example implemented",
      "refs": [
        "lou"
      ],
      "frequency": "Daily to monthly",
      "source": "",
      "caveat": "Use consistently adjusted prices."
    },
    {
      "id": "overnight",
      "name": "Overnight return",
      "category": "Session returns",
      "formula": "O_t/C_(t-1)-1.",
      "logic": "Measures information and repricing from close to next open.",
      "status": "Example implemented",
      "refs": [
        "lou"
      ],
      "frequency": "Daily to monthly",
      "source": "",
      "caveat": "Use consistent corporate-action adjustments."
    },
    {
      "id": "tug_of_war",
      "name": "Intraday-minus-overnight return",
      "category": "Session returns",
      "formula": "Monthly compounded intraday return minus monthly compounded overnight return.",
      "logic": "Tests divergence across sessions and associated trading frictions.",
      "status": "Example implemented",
      "refs": [
        "lou"
      ],
      "frequency": "Monthly",
      "source": "",
      "caveat": "This is not the total monthly return."
    },
    {
      "id": "at_proxy",
      "name": "Algorithmic-trading activity proxy",
      "category": "Order messages",
      "formula": "-notional/(orders+trade records+cancellations)/100; equal-weight across days for a month.",
      "logic": "A larger value, closer to zero, means less value per message and greater relative message intensity.",
      "status": "Example implemented",
      "refs": [
        "hjm"
      ],
      "frequency": "Daily to monthly",
      "source": "Chapter 4, Table 4-1",
      "caveat": "Interpret the algebraic sign consistently; this is not directly observed HFT-account participation."
    },
    {
      "id": "rv",
      "name": "Realized variance",
      "category": "Volatility and efficiency",
      "formula": "RV_day=sum(intraday_return^2); sqrt(RV_day*252) approximates annualized volatility.",
      "logic": "Aggregates intraday price variation.",
      "status": "Example implemented",
      "refs": [
        "corsi"
      ],
      "frequency": "Daily",
      "source": "",
      "caveat": "Sampling frequency affects microstructure noise. Variance and volatility are different units."
    },
    {
      "id": "spread",
      "name": "Relative effective spread",
      "category": "Liquidity",
      "formula": "2*abs(trade price-contemporaneous midpoint)/midpoint.",
      "logic": "Measures the implicit cost of immediate execution.",
      "status": "Research definition documented",
      "refs": [
        "hjm"
      ],
      "frequency": "Transaction level",
      "source": "",
      "caveat": "Align trade and quote timestamps."
    },
    {
      "id": "order_imbalance",
      "name": "Order-book imbalance",
      "category": "Order messages",
      "formula": "(bid depth-ask depth)/(bid depth+ask depth).",
      "logic": "Order-book supply-demand imbalance is a candidate microstructure signal.",
      "status": "Planned extension",
      "refs": [
        "hjm"
      ],
      "frequency": "Snapshot",
      "source": "",
      "caveat": "New extension, not claimed as a recovered factor from the missing original library."
    }
  ],
  "metrics": [
    [
      "9",
      "Catalog records"
    ],
    [
      "4",
      "References"
    ],
    [
      "0",
      "Completed market-data backtests"
    ]
  ],
  "summary": "Study intraday and overnight returns, recurring trading slots, message intensity and execution frictions.",
  "scope": "Nine research entries assembled from the supplied chapter and research summary. The independent original high-frequency library has not been located; these entries are not a complete migration.",
  "steps": [
    [
      "Step 1",
      "Align exchange and receipt timestamps, trading days, sessions and sampling slots."
    ],
    [
      "Step 2",
      "Construct session returns and message-based activity measures from compatible windows; separate proxies from actual labeled HFT participation."
    ],
    [
      "Step 3",
      "Compare same-slot persistence, cross-slot reversal, variance and liquidity after seasonal adjustment."
    ],
    [
      "Step 4",
      "Use subsequent executable prices and transaction costs; test incremental information under rolling and grouped holdouts."
    ]
  ],
  "limitations": [
    "The original standalone high-frequency library path is still missing.",
    "The AT proxy is negative value per message; a larger value closer to zero means greater relative message intensity. It is not a directly observed HFT-account share.",
    "Examples implement basic return and message operators, not a tick replay or production execution engine."
  ],
  "engineering": {
    "bases": 8,
    "lo": 8,
    "hi": 16,
    "groups": [
      [
        "Session returns",
        3
      ],
      [
        "Messages/trading intensity",
        2
      ],
      [
        "Volatility/efficiency",
        2
      ],
      [
        "Liquidity",
        1
      ]
    ],
    "windows": "Intraday windows: 5/15/30/60 minutes and opening/closing sessions; use 5/20-day historical same-slot baselines. Retain nested windows only when they represent distinct information.",
    "transforms": "Basic within-window measure, intraday-seasonality residual, historical same-slot z-score, lagged change and session/side conditioning. Eight to sixteen is the total allowed versions per seed, not all parameter combinations.",
    "example": "Message intensity: messages/value, 15/30-minute variants, prior-20-day same-slot normalization, opening-minus-closing difference and a separately tested liquidity condition.",
    "data": "Require tick or consistent minute data, exchange and receipt timestamps, message definitions and historical sessions. Daily prices alone cannot support this budget.",
    "generalize": "Normalize trading-session coordinates and hold out months, stocks and exchanges. Separate overlapping windows and evaluate at subsequent executable quotes.",
    "priority": "Consolidate nine current research entries into roughly eight initial seeds. Keep message proxies separate from directly labeled HFT accounts.",
    "low": 64,
    "high": 128,
    "catalog_count": 9
  },
  "kind": "hf",
  "papers": [
    {
      "id": "hks",
      "title": "Intraday Patterns in the Cross-section of Stock Returns",
      "authors": "Steven L. Heston; Robert A. Korajczyk; Ronnie Sadka",
      "year": "2010",
      "url": "https://arxiv.org/abs/1005.3535",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Same-slot momentum; Cross-slot reversal. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "lou",
      "title": "A tug of war: Overnight versus intraday expected returns",
      "authors": "Dong Lou; Christopher Polk; Spyros Skouras",
      "year": "2019",
      "url": "https://personal.lse.ac.uk/polk/research/TugOfWar.pdf",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Cross-slot reversal; Intraday return; Overnight return; Intraday-minus-overnight return. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "hjm",
      "title": "Does Algorithmic Trading Improve Liquidity?",
      "authors": "Terrence Hendershott; Charles M. Jones; Albert J. Menkveld",
      "year": "2011",
      "url": "https://doi.org/10.1111/j.1540-6261.2010.01624.x",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Algorithmic-trading activity proxy; Relative effective spread; Order-book imbalance. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "corsi",
      "title": "A Simple Approximate Long-Memory Model of Realized Volatility",
      "authors": "Fulvio Corsi",
      "year": "2009",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1365738",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Realized variance. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    }
  ]
};
