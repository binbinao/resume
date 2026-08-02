---
name: 'Material-LIMS'
tagline: '材料实验室信息管理系统 · 工业软件全栈代表作'
taglineEn: 'Material lab information system · flagship industrial-software full-stack project'
role: '全栈 / Tech Lead（个人项目）'
period: '2026-06 — 2026-07'
stack:
  - 'Java 17 + Spring Boot 3.2'
  - 'Flowable BPMN 2.0'
  - 'PostgreSQL 15 + Redis 7'
  - 'MinIO'
  - 'React 18 + TypeScript'
  - 'Ant Design Pro 6'
  - 'Azure AD + Microsoft Graph API'
repo: 'https://github.com/binbinao/Material-LIMS'
metrics:
  - { value: '8 模块', label: '业务覆盖' }
  - { value: '50 commits', label: '代码产出' }
  - { value: '10.0 commits/周', label: '节奏' }
highlights:
  - '委托 → 分析 → 报告 → 工作流 → 审计 → 设备 → 校准 → SSO 全链路'
  - 'BPMN 2.0 工作流引擎替代硬编码状态机'
  - 'Microsoft 365 在线编辑（Word）+ Azure AD SSO'
  - '不可变审计跟踪 + 电子签名基础（FDA 21 CFR Part 11 合规导向）'
  - '结构化测试结果 + 规范化判定域（行业 Know-How）'
featured: true
order: 3
---

Material-LIMS 是"机械背景 + 工业软件"路线上最大的单体项目。

**为什么做它**：求职关键期，需要证明既能写现代 AI 代码（DeepDraw），也能落地传统 Java 全栈——广度证明。

**关键取舍**（面试可讲）：
- **Flowable vs Camunda**：选 Flowable，国内文档 + Spring Boot 集成成熟
- **Word 在线编辑 vs 仅下载**：选在线编辑，理由是报告审批需要多人协作批注；代价是重度依赖 Azure 生态，国内部署受限
- **SSO**：Azure AD > 自建 Keycloak，客户多数在 Microsoft 生态里