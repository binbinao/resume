---
name: 'PhysicsNeMo: From Zero to One'
tagline: 'NVIDIA PhysicsNeMo 中文教程书 · 8 章 + 4 附录'
taglineEn: 'Hands-on tutorial book for NVIDIA PhysicsNeMo · 8 chapters + 4 appendices'
role: 'Tech Author / 教材主编（个人项目）'
period: '2026-05 — 2026-08'
stack:
  - 'Python ≥3.10'
  - 'PyTorch ≥2.3'
  - 'NVIDIA PhysicsNeMo 2.0'
  - 'DDP + AMP'
  - 'Multi-Agent 编排'
repo: 'https://github.com/binbinao/physicsnemo-from-zero-to-one'
metrics:
  - { value: '8 章 + 4 附录', label: '教材规模' }
  - { value: '3 变体/章', label: '裸 PyTorch / SDK / GPU' }
  - { value: '30+ commits', label: '跨 3 个月迭代' }
  - { value: '2 周', label: 'multi-agent 编排产出' }
highlights:
  - 'PINN 与神经算子三层教学：每章给出 raw PyTorch（教育）/ PhysicsNeMo SDK（CPU 验证）/ GPU production（DDP+AMP）三种实现'
  - '配套 6 周学习路径 + 云 GPU 部署指南 + 50 问踩坑 + Colab quickstart'
  - '教材全书双语（book/ + book_en/），LaTeX 公式混排友好'
  - 'CAE 审阅 round 1/2/3：3 阶段外部 CAE 专家反馈迭代（含 CFD 批跑 / 联合反演 / 多目标优化）'
  - 'README 自述 multi-agent 编排 2 周产出全文 + 配图'
featured: true
order: 1
---

## 为什么做这件事

AI for Engineering 是 2026 年最热的工业 AI 赛道之一：Ansys SimAI™、Siemens Xcelerator AI、Dassault 3DEXPERIENCE AI 都在收口这块市场。但**学界到工业落地之间有一道大坑**——PINN（Physics-Informed Neural Networks）和神经算子（Neural Operators）的论文很多，能让工业仿真工程师"装上就跑"的实战教材几乎为零。NVIDIA PhysicsNeMo 框架文档齐全，但只有官方 API 文档，没有"从 0 到能跑"的中文教学路径。

我给自己立了一个目标：**写一本能让工业背景的工程师 6 周内从零到能跑自己的 PINN 模型**的教材。每章给 3 种实现（裸 PyTorch 看懂原理 / PhysicsNeMo SDK 看懂工业封装 / GPU production 看懂大规模训练），让读者**按需选择深度**。

## 真实成果边界

- **2★ / 0 forks** —— 公开小 repo，影响力还在早期
- **30+ commits 跨 3 个月** —— 教材不是一次性 dump，是经过 3 轮 CAE 专家反馈迭代（issue #54–#88 集中处理）的实战产物
- **multi-agent 2 周产出** —— 教材主体由 Claude / CodeBuddy 多 Agent 编排生成（README 自述）；但章节结构、数学审校、CA 审阅 round 1/2/3 全部由我把关
- **教材大小**：8 章 + 4 附录 + 6 周学习计划 + 50 问踩坑 + 云 GPU 指南。**全套中英双语**

## 想看哪一段就跳过去

| 你想知道 | 跳到 |
|:---|:---|
| 30 秒懂这本教材 | [README on GitHub](https://github.com/binbinao/physicsnemo-from-zero-to-one) |
| 数学与符号速查 | `book/appendix_a_math.md` |
| 云 GPU 与环境 | `book/appendix_b_cloud_gpu.md` |
| 50 问踩坑 | `book/appendix_c_troubleshooting.md` |
| PyTorch 30 分钟最小集 | `book/appendix_d_pytorch_mini.md` |
| 6 周学习计划 | `docs/STUDY_PLAN_6WEEKS.md` |
| CAE 审阅 round 3 | `docs/CAE_REVIEW_BACKLOG.md` |