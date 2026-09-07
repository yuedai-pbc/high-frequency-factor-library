# 数据契约与时点约束

每条记录至少包含：`entity_id`、`observation_at`、`available_at`、`decision_at`、`value`、`unit`、`source_version`。时间使用 ISO-8601，整个数据集统一时区；有时区和无时区的时间不得混用。

必须满足 `available_at <= decision_at < execution_at`。财务期间结束日不能代替公告时间。收盘后公告通常只能用于下一可交易时点。示例 `asof_record` 对单一资产的完整截面选择最新已公开记录；生产接入须按实体分组并保留历史修订版本。

缺失值保留为缺失；禁止用未来值反向填充历史。同一股票或基金同一时点若出现重复，必须按版本来源处理，不能随意取最后一行。

收益率使用小数（1% = 0.01），交易成本使用 bp（1 bp = 0.0001），持仓权重为小数，方差与波动率使用不同列。所有数据同时保存原始单位与换算规则。

高频额外字段：exchange_timestamp、receive_timestamp、session、slot、trade_price、bid、ask、order_count、trade_count、cancel_count、amount。逐日区分交易时段，计数与成交额须同窗口。示例只有价格与消息计数算子，无逐笔重放引擎。
