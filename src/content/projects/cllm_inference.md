---
name: 'cllm_inference'
tagline: '自研 C++20 GGUF 推理引擎 · 零依赖 + ARM NEON SDOT 加速'
taglineEn: 'Self-built C++20 GGUF inference engine · zero deps + ARM NEON SDOT speedup'
role: '系统软件 / 全栈（个人项目）'
roleEn: 'Systems software / Full-stack (personal project)'
period: '2026-10'
stack:
  - 'C++20'
  - 'GGUF v2/v3'
  - 'mmap 零拷贝'
  - 'ARM NEON SDOT (整数点积)'
  - '手写 ThreadPool'
  - 'OpenAI 兼容 HTTP + SSE'
  - '单文件 Web UI (Claude 风格)'
  - 'BPE + SentencePiece'
stackEn:
  - 'C++20'
  - 'GGUF v2/v3'
  - 'mmap zero-copy'
  - 'ARM NEON SDOT (integer dot product)'
  - 'Hand-written ThreadPool'
  - 'OpenAI-compatible HTTP + SSE'
  - 'Single-file Web UI (Claude-style)'
  - 'BPE + SentencePiece'
repo: 'https://github.com/binbinao/cllm_inference'
metrics:
  - { value: '13 种', label: 'GGML 量化覆盖' }
  - { value: '3-7x', label: 'NEON SDOT 内核加速' }
  - { value: '4.1x', label: '端到端 Qwen3-0.6B' }
  - { value: '17.5/wk', label: 'commit 节奏' }
metricsEn:
  - { value: '13 types', label: 'GGML quantization' }
  - { value: '3-7x', label: 'NEON SDOT kernel' }
  - { value: '4.1x', label: 'end-to-end Qwen3-0.6B' }
  - { value: '17.5/wk', label: 'commit pace' }
highlights:
  - '零第三方运行时依赖 — 仅 C++20 标准库 + POSIX，无需 Boost / Crow / cpp-httplib'
  - '13 种 GGML 量化格式全覆盖：F32/F16/Q4_0/Q4_1/Q5_0/Q5_1/Q8_0/Q8_1/Q2_K/Q3_K/Q4_K/Q5_K/Q6_K'
  - 'mmap 零拷贝量化推理 — 0.5B Q4_K_M 常驻 ~430MB（对比全量反量化缓存 ~3GB）'
  - 'OpenAI 兼容 HTTP + SSE 流式 + 单文件 Web UI，支持 qwen2/qwen3/llama 三大架构'
  - '附带 WeightMode 三模式（Quant/Fp32/Fp16）模型级基准对比，140+ 单元测试断言'
highlightsEn:
  - 'Zero third-party runtime dependency — only C++20 stdlib + POSIX, no Boost / Crow / cpp-httplib'
  - 'Full 13 GGML quantization formats: F32/F16/Q4_0/Q4_1/Q5_0/Q5_1/Q8_0/Q8_1/Q2_K/Q3_K/Q4_K/Q5_K/Q6_K'
  - 'mmap zero-copy quantized inference — 0.5B Q4_K_M resident ~430MB (vs ~3GB dequant cache)'
  - 'OpenAI-compatible HTTP + SSE streaming + single-file Web UI, qwen2 / qwen3 / llama support'
  - 'WeightMode tri-mode (Quant/Fp32/Fp16) model-level benchmark, 140+ unit-test assertions'
featured: true
order: 6
---

cllm_inference 是"AI 系统软件底层"代表作——把"用过 vLLM / Llama.cpp"的库使用经验，升级为"从 0 写过 LLM 推理引擎"的工程产出。

**关键取舍**（面试可讲）：

- **自研 vs Fork llama.cpp**：选自研。理由是**理解 LLM 推理必须从 0 写一遍**，且零依赖让"嵌入私有流水线 / 离线 / 边缘"成为可能。代价是所有东西自己写（BPE 分词 / SSE 流式 HTTP / 线程池 / 量化反量化）。
- **零依赖 vs 用 Boost / Crow / cpp-httplib**：选零依赖——能跑在最小容器（甚至 `scratch` 镜像），真正的"系统软件级"。
- **NEON SDOT 整数点积 vs 加载期反量化**：选前者。Q4_0/Q5_0/Q8_0/Q4_K/Q5_K/Q6_K 六种走 NEON 快速路径，相对"反量化 + float matmul" 内核 3-7x 加速；端到端 Qwen3-0.6B-Q8_0 解码 10.3s → 2.5s（**4.1x**）。
- **mmap 零拷贝 vs 加载期反量化**：选前者。0.5B 模型从全量反量化常驻 ~3GB 降到 mmap 后 ~430MB（**7x 内存下降**），让"本地跑 7B 模型"在 16GB 笔记本上成为可行。
- **OpenAI 兼容 vs 自定义协议**：选 OpenAI 兼容——**复用现有客户端生态**，任何 OpenAI SDK 都能直接接入，demo 摩擦最小。
- **单文件 HTML 前端 vs React/Vue**：选单文件——零构建 → 克隆即跑 → README 一行命令演示全流程。Claude 风格 UI、Markdown/代码高亮、深浅主题一应俱全。

**真实成果边界**：star=1（外部 `gitdiagram` 已自动收录架构图），fork=0，无 external PR，无 telemetry。性能数字来自 `tests/bench.cpp` 与 `tests/model_bench.cpp`，是 Apple M4 / Linux x86 实测基准，非生产数据。fp16 反量化路径在 x86 上反而比 fp32 更慢（README 已显式提示，证明作者知道自己的局限）。
===
