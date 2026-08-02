---
name: 'excel-ai-connector'
tagline: 'Excel Office Add-in · 多 Provider AI 通用接入'
role: '全栈（个人项目）'
period: '2026-07'
stack:
  - 'Office.js'
  - 'JavaScript / TypeScript'
  - 'Node.js Bridge'
  - 'Provider Adapter 模式'
  - 'localStorage'
repo: 'https://github.com/binbinao/excel-ai-connector'
metrics:
  - { value: '4 Provider', label: '模型支持' }
  - { value: '3 输出', label: '模式' }
  - { value: '1 天 6 fix', label: '密集迭代' }
highlights:
  - 'OpenAI-compatible / Azure OpenAI / Anthropic / Gemini 统一 Adapter'
  - '任务窗格前端 + Node.js Bridge 后端（API Key 不暴露给浏览器）'
  - '三种输出模式：覆盖选区 / 写入新工作表 / 输出到结果框'
  - '配置锁定避免误改 Endpoint / Model / API Key'
  - 'MVP 阶段，"1 天内修复 6 个边界 bug"是工程产出证明'
featured: true
order: 4
---

**痛点**：Excel 用户想用 AI 处理数据，但单一 Provider 绑定切换成本高；办公场景常需要"按任务选模型"（分析 GPT / 对话 Claude / 视觉 Gemini）。

**关键取舍**：
- **多 Provider vs 单一**：选多 Provider，规避厂商锁定 + 按任务选模型；代价是 Adapter 维护成本
- **后端 Bridge vs 前端直连**：选 Bridge，规避前端跨域 + API Key 不暴露；代价是部署稍复杂
- **MVP 范围**：只做"读选区 → 调模型 → 回写"，先窄后深