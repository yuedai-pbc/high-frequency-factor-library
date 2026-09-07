[English](README.en.md) | 中文

# 股票高频因子库

股票高频因子库。把同时段动量、跨时段反转与算法交易活动放进同一研究框架。

目前依据用户第四章和前文概述整理。独立高频源代码库路径尚未取得，当前为研究说明与可运行基础算子，不代表完整原库迁移。

## 网页

直接用浏览器打开 `site/index.html` 即可离线使用。也可以在仓库根目录执行：

```sh
python -m http.server 8000
```

访问 http://localhost:8000/site/ 。网页包含目录检索、类别/状态筛选、因子详情、参考资料、构建流程、筛选结果导出及交互计算。双语在线网页入口位于 GitHub 仓库 About 的 Website 链接。

## 内容规模

- 9：当前研究条目
- 30m：时段研究粒度
- L2：目标数据层

## 运行与测试

Python 3.10+，核心示例只使用标准库。

```sh
python examples/demo.py
python -m unittest discover -s tests -v
```

## 目录

- `site/`：无构建依赖的静态网页。
- `data/catalog.json`：逐因子目录与来源；`data/references.json`：书目。
- `src/factors.py`：本次独立编写的基础计算示例。
- `docs/METHODOLOGY.md`：设计、经济逻辑、评价方法。
- `docs/DATA_CONTRACT.md`：输入字段、时点约束。
- `docs/PROVENANCE.md`：原项目依据、计数与完成度。
- `docs/REFERENCES.md`：参考论文与引用关系。

## 完成度

- 9 是当前网站整理条目数，不是用户完整高频因子库总数。
- 原章节代理公式与部分文字解释方向不一致，本网站按公式解释。
- 独立库接入、逐笔重放和真实交易成本检验仍待完成。

## 发布为 GitHub Pages

仓库推送后，在 Settings → Pages → Build and deployment 中选择 Deploy from a branch，分支 `main`，目录 `/docs`。本仓库已把同一套静态页面复制到 `docs/`，可直接发布；独立 `site/` 便于本地浏览。私有仓库的 Pages 可用性取决于账号方案，且 Pages 访问权限需单独核对。

GitHub Actions 仅配置 Python 验证，不会自动把私有内容公开。

## 数据与来源

示例输入为教学数据；不含真实持仓、原始行情、账户信息或连接凭据。因子定义、文献与代码来源分别记录。未提供或暗示真实样本外业绩。

## 特征工程与泛化预算

计划 8 个种子 × 每种子 8–16 种允许表达 = 64–128 个候选列（含基础表达，非有效 alpha 数量）。详见 [特征工程方案](FEATURE_ENGINEERING.md)。
