---
name: 'DeepDraw'
tagline: '面向钣金/机加工行业的 DFM 多 Agent 系统'
taglineEn: 'DFM multi-Agent system for sheet-metal & machining'
role: '全栈（个人项目）'
period: '2026-06 — 2026-07'
stack: ['Python', 'LangGraph', 'ChromaDB', 'Vision-LLM', 'PDF/DXF 解析']
repo: 'https://github.com/binbinao/DeepDraw'
metrics:
  - { value: '5-Agent', label: '协作流水线' }
  - { value: 'Phase 1-7', label: '阶段交付' }
  - { value: '8.8 commits/周', label: '节奏' }
highlights:
  - 'Spec Interpreter → Drawing Auditor → BOM Generator → Process Recommender → Chief Verifier 五 Agent 协作'
  - 'LangGraph 编排 + TypedDict 状态机 + 自博弈 Reflection Loop（最多 3 轮）'
  - 'ChromaDB 企业标准 RAG，metadata filter 适配现场部署'
  - 'PoC 验证 5 个真实场景'
featured: true
order: 1
---

DFM-Copilot Squad 是把"钣金/机加工图纸审核"这件老师傅凭经验做的事，用多 Agent 系统重做一遍。

**为什么这件事我能做**：机械背景懂工艺，AI 转码懂实现，行业 Know-How × AI Agent 这条路上同时具备的人不多。

**真实成果边界**：在某小厂单台机器试用基本满意，但产品数量少看不出效率提升幅度——所以这里**不写"30 分钟 → 3 分钟"**，那是 README 占位数据。star=0 / fork=0，但 github.com/binbinao 上代码量最大、节奏最快的项目之一。