# 股票高频因子库

[中文](README.md) · [English](README.en.md)

把同时段动量、跨时段反转与算法交易活动放进同一研究框架。

目前依据用户第四章和前文概述整理。独立高频源代码库路径尚未取得，当前为研究说明与可运行基础算子，不代表完整原库迁移。

## 网页与语言切换

[中文网页](https://yuedai-pbc.github.io/high-frequency-factor-library/?lang=zh) · [English website](https://yuedai-pbc.github.io/high-frequency-factor-library/?lang=en)

网页的概览、目录、因子详情、构建思路、特征工程、文献说明及交互提示均提供中英文。使用右上角 中文 / English 切换，也支持双语检索。代码 ID、论文原题、作者、公式变量和标注为上游原文的材料保留原样，以便核对来源。

离线打开 `site/index.html`，或在仓库根目录启动：

```sh
python -m http.server 8000
```

访问 [localhost:8000/site/](http://localhost:8000/site/).

## 内容规模

- **9**: 当前研究条目
- **30m**: 时段研究粒度
- **L2**: 目标数据层

## 构建思路

1. **重建交易时间** — 区分集合竞价、连续交易与午间休市；交易、报价和订单按时间戳对齐，处理撤单及重复消息。

2. **定义时段特征** — 跨日保持相同 slot；先结束形成窗口，再预测下一时段。日内、隔夜按同一复权口径计算。

3. **检验机制** — 以消息强度作为 AT 代理，研究其与流动性、时段反转的关系；因果检验需另行论证识别条件。

4. **模拟可成交结果** — 纳入买卖价差、延迟、冲击与限价约束；A 股回测需检查当日可用持仓和 T+1 约束。

## 特征工程与泛化预算

计划 8 个种子 × 每种子 8–16 种允许表达 = **64–128 个候选列**，包含基础表达。这是依赖数据的构建预算，不是已实现数量或有效 alpha 数量。

当前 9 个研究条目先归并成约 8 个基础种子；消息相关代理定义与真实 HFT 账户标签分开。

[完整特征工程方案](docs/FEATURE_ENGINEERING.md)

## 运行与测试

Python 3.10+；基础示例仅使用标准库。

```sh
python examples/demo.py
python -m unittest discover -s tests -v
```

## 文件与研究文档

- `site/`: 可离线浏览的静态网页。
- `docs/`: 同一套 GitHub Pages 网页与双语研究文档。
- `data/catalog.json` / `data/catalog.en.json`: 中文 / 英文因子目录。
- `data/references.json` / `data/references.en.json`: 中文 / 英文书目说明。
- `src/factors.py`: 独立编写的基础算子。
- [方法与经济逻辑](docs/METHODOLOGY.md)
- [输入与时点约束](docs/DATA_CONTRACT.md)
- [来源与实现边界](docs/PROVENANCE.md)
- [论文与引用关系](docs/REFERENCES.md)
- [双语复核记录](docs/BILINGUAL_AUDIT.md)

## 完成度与待验证事项

- 9 是当前网站整理条目数，不是用户完整高频因子库总数。
- 原章节代理公式与部分文字解释方向不一致，本网站按公式解释。
- 独立库接入、逐笔重放和真实交易成本检验仍待完成。

## GitHub Pages 发布

本仓库网页从 `main` 分支的 `/docs` 发布。更新网页时同步 `site/` 与 `docs/` 的静态资源；GitHub Actions 验证 Python 示例，Pages 构建独立运行。

## 数据、来源与许可

示例输入是教学数据，不含真实持仓、原始行情、账户信息或连接凭据；不宣称真实样本外业绩。新写网页及示例代码采用 GPL-2.0。论文版权属于原作者与出版方，完整第三方报告不重新分发；OAP 元数据保留上游署名。
