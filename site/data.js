window.LIBRARY = {
  "slug": "high-frequency-factor-library",
  "title": "股票高频因子库",
  "cn": "股票高频因子库",
  "short": "股票高频因子库",
  "eyebrow": "02 / MARKET MICROSTRUCTURE",
  "color": "#a85824",
  "factors": [
    {
      "id": "same_slot_momentum",
      "name": "同时段动量",
      "category": "时段收益",
      "formula": "mean(r[d−k, slot]), k=1…lookback；信号仅使用过去交易日同一时段。",
      "logic": "规律性的交易需求可能在相同时段持续施加价格压力。",
      "status": "研究定义已整理",
      "refs": [
        "hks"
      ],
      "frequency": "30 分钟",
      "source": "用户第四章及前文研究概述",
      "caveat": ""
    },
    {
      "id": "cross_slot_reversal",
      "name": "异时段反转",
      "category": "时段收益",
      "formula": "以已结束时段收益作为信号，检验下一异时段收益是否与之负相关。",
      "logic": "不同投资者群体在不同时段接替交易，短暂价格压力可能回归。",
      "status": "研究定义已整理",
      "refs": [
        "hks",
        "lou"
      ],
      "frequency": "30 分钟",
      "source": "",
      "caveat": ""
    },
    {
      "id": "intraday",
      "name": "日内收益",
      "category": "时段收益",
      "formula": "C_t / O_t − 1；月度按 ∏(1+r_intra)−1 复合。",
      "logic": "分离连续交易时段中的价格形成。",
      "status": "示例已实现",
      "refs": [
        "lou"
      ],
      "frequency": "日度 → 月度",
      "source": "",
      "caveat": ""
    },
    {
      "id": "overnight",
      "name": "隔夜收益",
      "category": "时段收益",
      "formula": "O_t / C_(t−1) − 1；必须使用一致复权口径。",
      "logic": "度量收盘至下一次开盘期间的信息与价格修正。",
      "status": "示例已实现",
      "refs": [
        "lou"
      ],
      "frequency": "日度 → 月度",
      "source": "",
      "caveat": ""
    },
    {
      "id": "tug_of_war",
      "name": "日内—隔夜收益差",
      "category": "时段收益",
      "formula": "R_intra,month − R_overnight,month；不等于月度总收益。",
      "logic": "衡量收益在时段间的分化，用于检验跨时段信息和交易摩擦。",
      "status": "示例已实现",
      "refs": [
        "lou"
      ],
      "frequency": "月度",
      "source": "",
      "caveat": ""
    },
    {
      "id": "at_proxy",
      "name": "算法交易强度代理",
      "category": "订单消息",
      "formula": "−成交金额 / (委托数 + 成交记录数 + 撤单数) / 100；月度等权平均。",
      "logic": "越接近 0（越大），单位消息成交金额越低，意味着消息相对更密集。",
      "status": "示例已实现",
      "refs": [
        "hjm"
      ],
      "frequency": "日度 → 月度",
      "source": "第四章表 4-1",
      "caveat": "原文解释存在方向表述不一致，按代数定义解释；不是直接观测到的高频账户占比。"
    },
    {
      "id": "rv",
      "name": "已实现方差",
      "category": "波动与效率",
      "formula": "RV_day = Σ r_intraday²；sqrt(RV_day × 252) 是年化波动率近似。",
      "logic": "汇总日内价格变动；采样频率影响微观结构噪声。",
      "status": "示例已实现",
      "refs": [
        "corsi"
      ],
      "frequency": "日度",
      "source": "",
      "caveat": ""
    },
    {
      "id": "spread",
      "name": "相对有效价差",
      "category": "流动性",
      "formula": "2 × |成交价 − 同时点中间价| / 中间价。",
      "logic": "衡量立即成交的隐含成本。",
      "status": "研究定义已整理",
      "refs": [
        "hjm"
      ],
      "frequency": "逐笔",
      "source": "",
      "caveat": ""
    },
    {
      "id": "order_imbalance",
      "name": "订单簿不平衡",
      "category": "订单消息",
      "formula": "(买侧深度 − 卖侧深度)/(买侧深度 + 卖侧深度)。",
      "logic": "盘口供需失衡是候选微观结构信号，需要增量检验。",
      "status": "扩展规划",
      "refs": [
        "hjm"
      ],
      "frequency": "快照",
      "source": "",
      "caveat": "本次补充的研究方向，未冒充已找到的原库因子。"
    }
  ],
  "metrics": [
    [
      "9",
      "当前研究条目"
    ],
    [
      "30m",
      "时段研究粒度"
    ],
    [
      "L2",
      "目标数据层"
    ]
  ],
  "summary": "把同时段动量、跨时段反转与算法交易活动放进同一研究框架。",
  "scope": "目前依据用户第四章和前文概述整理。独立高频源代码库路径尚未取得，当前为研究说明与可运行基础算子，不代表完整原库迁移。",
  "steps": [
    [
      "重建交易时间",
      "区分集合竞价、连续交易与午间休市；交易、报价和订单按时间戳对齐，处理撤单及重复消息。"
    ],
    [
      "定义时段特征",
      "跨日保持相同 slot；先结束形成窗口，再预测下一时段。日内、隔夜按同一复权口径计算。"
    ],
    [
      "检验机制",
      "以消息强度作为 AT 代理，研究其与流动性、时段反转的关系；因果检验需另行论证识别条件。"
    ],
    [
      "模拟可成交结果",
      "纳入买卖价差、延迟、冲击与限价约束；A 股回测需检查当日可用持仓和 T+1 约束。"
    ]
  ],
  "limitations": [
    "9 是当前网站整理条目数，不是用户完整高频因子库总数。",
    "原章节代理公式与部分文字解释方向不一致，本网站按公式解释。",
    "独立库接入、逐笔重放和真实交易成本检验仍待完成。"
  ],
  "engineering": {
    "bases": 8,
    "lo": 8,
    "hi": 16,
    "groups": [
      [
        "时段收益",
        3
      ],
      [
        "消息与交易强度",
        2
      ],
      [
        "波动与效率",
        2
      ],
      [
        "流动性",
        1
      ]
    ],
    "windows": "交易日内 5/15/30/60 分钟与开盘、收盘时段；跨日同一时段 5/20 日历史基线。窗口嵌套只保留有信息差异的版本。",
    "transforms": "同窗口基础量 → 日内季节性残差 → 过去同时间段 z 分数 → 滞后变化 → 买卖方向/交易时段条件统计。8–16 是每个种子允许的总版本数，不是全排列。",
    "example": "消息强度：消息数/成交额 → 15/30 分钟版本 → 过去 20 日同槽位标准化 → 开盘与尾盘差 → 单独考察流动性条件下的变化。",
    "data": "需要逐笔或稳定分钟数据、交易所时间戳、接收时间戳、消息定义与历史交易时段。只有日线数据无法实现这一预算。",
    "generalize": "交易时段归一化后做跨月、跨股票、跨交易所留出；训练和测试之间隔离重叠窗口，使用下一可成交报价评价。",
    "priority": "当前 9 个研究条目先归并成约 8 个基础种子；消息相关代理定义与真实 HFT 账户标签分开。",
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
      "role": "原论文章节已引用",
      "note": "以同一交易时段的跨日收益延续为研究出发点；窗口和可交易时间必须明确。"
    },
    {
      "id": "lou",
      "title": "A tug of war: Overnight versus intraday expected returns",
      "authors": "Dong Lou; Christopher Polk; Spyros Skouras",
      "year": "2019",
      "url": "https://personal.lse.ac.uk/polk/research/TugOfWar.pdf",
      "role": "原论文章节已引用",
      "note": "区分日内与隔夜的收益形成，检验投资者异质性与跨时段反转。"
    },
    {
      "id": "hjm",
      "title": "Does Algorithmic Trading Improve Liquidity?",
      "authors": "Terrence Hendershott; Charles M. Jones; Albert J. Menkveld",
      "year": "2011",
      "url": "https://doi.org/10.1111/j.1540-6261.2010.01624.x",
      "role": "原论文章节已引用",
      "note": "订单消息强度可作为算法交易活动代理。代理变量不等于带账户标签的真实 HFT，相关性不能自动解释为因果。"
    },
    {
      "id": "corsi",
      "title": "A Simple Approximate Long-Memory Model of Realized Volatility",
      "authors": "Fulvio Corsi",
      "year": "2009",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1365738",
      "role": "本次补充方法出处",
      "note": "HAR-RV 使用日、周、月尺度的已实现方差描述持续性；训练和预测按时间推进。"
    }
  ]
};
