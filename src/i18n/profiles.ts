/**
 * CIO / CAIO 简历站内容覆盖层（profiles）
 * 设计：在基础 i18n 字典之上做 deep-merge 覆盖，只动 hero / about / highlights /
 * experience / skills 这五个"受众相关"的区块；projects / education / languages /
 * contact / footer 与主站共享，保持事实一致。
 *
 * 定位依据（来自 career_path 战略主轴）：
 *  - CIO：甲方工业集团 CIO / 数字化负责人。最难技术 50%（工程 IT：PLM/MES/数字工程/HPC）
 *          已在捷豹路虎 + GE 完整操盘，后端全盘 IT 可迁移补齐。
 *  - CAIO：工业 AI 首席官。工程 AI（CAE/数字孪生/Ansys SimAI）+ Agentic AI（Multi-Agent/MCP/LangGraph）
 *          双线稀缺组合，对齐 2026 甲方 CAIO JD 明写的 "agentic AI 规划"。
 */
import type { I18nSchema } from './zh';

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends Array<infer U>
        ? Array<Widen<U>>
        : T extends object
          ? { [K in keyof T]: Widen<T[K]> }
          : T;

export type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

type BaseProfile = DeepPartial<Widen<I18nSchema>>;

export type Profile = BaseProfile & {
  hero?: BaseProfile['hero'] & {
    pathSteps?: Array<{ index: string; title: string; sub: string }>;
  };
  about?: BaseProfile['about'] & { eyebrow?: string };
  highlights?: BaseProfile['highlights'] & { tagline?: string };
};

const cioProfile: Profile = {
  meta: {
    title: 'Robin Ji · 纪多斌 — 工业集团 CIO / 数字化负责人',
    description:
      '甲方工业集团 CIO / 数字化负责人候选人 —— 18+ 年工业软件 → 工程 IT → 集团企业架构路径，从西门子、GE、Ansys、捷豹路虎到头部云厂商，操盘 PLM / MES / 数字主线 / HPC 与 TOGAF 企业架构。',
  },
  hero: {
    eyebrow: '工业集团 · 甲方 CIO / 数字化负责人',
    name: 'Robin Ji',
    nameCN: '纪多斌',
    tagline: '18 年 · 7 家工业巨头 · 从工程 IT 到集团架构',
    location: 'Shanghai, China',
    ctaPrimary: '看项目',
    ctaSecondary: '联系我',
    pathSteps: [
      { index: '01', title: '工程 IT 操盘', sub: 'PLM · MES · 数字主线 · HPC' },
      { index: '02', title: '集团企业架构', sub: 'TOGAF ADM · Infra → Apps' },
      { index: '03', title: '甲方 CIO', sub: '数字化负责人 · 独立运营底座' },
    ],
  },
  about: {
    eyebrow: 'Engineering IT → Enterprise Architecture → CIO',
    headline: '最难的技术 50%，<br />我已经操盘过',
    body: [
      '18+ 年，我走过工业集团数字化的完整链路：CAD/CAE 工具厂商 → PLM 平台 → 车间 MES → 数字主线 → 汽车全栈数字化 → 云与 AI 基础设施。其中在捷豹路虎与 GE，我以甲方身份直接操盘工程 IT 与集团企业架构。',
      '制造业 CIO 最难的那一半——工程 IT（PLM / MES / 数字工程 / HPC）——我已经在奇瑞捷豹路虎任工程 IT 总监、在 GE 任数字主线负责人时完整交付。后端全盘 IT（ERP / CRM / 财务 IT / 安全组织）是可迁移补齐的部分。',
      '我的价值是把"工程 / 制造痛点"翻译成可运营的 IT 系统：18 个月新建 5 大系统、构建"中方可独立运营"的 IT 底座、用 TOGAF ADM 拉通基础设施 / 数据 / 系统 / 应用四域，支撑管理层月度经营评审。',
    ],
  },
  highlights: {
    title: '亮点',
    headline: '用数字说话',
    tagline: 'Evidence over adjectives',
    items: [
      {
        metric: '12 人',
        label: '工程 IT + 架构团队（捷豹路虎）',
        sub: '管理 6 人架构 + 工程质量 IT 团队（合计 12 人），为合资公司构建"中方可独立运营"的 IT 能力底座。',
      },
      {
        metric: '5 大系统',
        label: '18 个月内新建',
        sub: 'Teamcenter (PLM) / OTA / HPC 集群 / 三电追溯 / 合规与 SAP 集成，支撑新能源车 BEV 在中国落地。',
      },
      {
        metric: 'TOGAF',
        label: '集团企业架构蓝图',
        sub: '覆盖 Infra → ESB → 4 大 Capability Pillar，为集团数字化转型提供统一技术语言。',
      },
      {
        metric: '$6M+',
        label: '3 年遗留系统节省（Carestream）',
        sub: 'Aras PLM 中美法三地部署，16 模块、3 年下线 10 个遗留系统，年省 $2M+ 维护成本。',
      },
    ],
  },
  experience: {
    title: '经历',
    headline: '在工程 IT 与集团架构之间',
    sections: [
      {
        period: '2020 — 现在',
        company: '头部云厂商',
        role: '计算架构负责人 / 仿真云产品负责人',
        location: '上海',
        bullets: [
          '把 GPU / HPC 基础设施产品化，赋能政企 IT：以上海电气风电 HPC 上云为起点验证算力上云可行性，并沉淀为可复制的仿真云产品（CloudSim v1.0 → v1.7，共 7 版本）',
          '主导政企 GPU 算力场景化落地方法论：客户关注"用 GPU 解决什么问题"而非硬件参数，形成面向业务的算力运营视角——这是 CIO 视角的 IT 资产化能力',
          '跨全栈 AI 技术栈认知（训练 / 推理 / 应用），为工业集团 AI 基础设施规划提供端到端判断力',
        ],
      },
      {
        period: '2018 — 2020',
        company: '捷豹路虎 (Chery Jaguar Land Rover)',
        role: '企业架构与工程数字化总监',
        location: '上海',
        bullets: [
          '任工程 IT 总监，管理 6 人架构 + 工程质量 IT 团队（合计 12 人）；主导工程能力从英方引入，支撑新能源车 BEV 在中国落地（路虎极光 / 发现神行）',
          '18 个月内新建 5 大系统：Teamcenter (PLM) / OTA / HPC 集群 / 三电追溯 / 合规与 SAP 集成',
          '转岗企业架构总监，建立整体 IT 架构蓝图：Infra → ESB → 4 大 Capability Pillar（工程 IT / 制造 IT / 企业运营 / 销售市场 DMS）；构建"中方可独立运营"的 IT 底座',
          '设计 TOGAF ADM 企业架构蓝图，覆盖基础设施 / 数据 / 系统 / 应用四域；搭建 PD 部门 Tableau BI 驾驶舱（进度 / 成本 / ROI / 预算超支），支撑管理层月度评审',
        ],
      },
      {
        period: '2018',
        company: 'ANSYS (现 Synopsys)',
        role: '高级技术客户经理 (Enterprise Accounts)',
        location: '上海',
        bullets: [
          '管理 ABB / 博世汽车电子 / 大陆汽车电子 等 7+ 头部跨国企业数字孪生项目，输出企业级数字化转型方案',
          '主导 ABB 干式变压器自动设计耦合系统，缩短产品研发周期 50%；主导大陆 IGBT 盒子数字孪生仿真，设计周期缩短 30%+',
          '桥接工业 CAE 实战与上海交大 / 同济算法研究，推动本地化——具备把前沿工程能力转译为业务系统的经验',
        ],
      },
      {
        period: '2016 — 2017',
        company: 'GE 中国全球研究中心 (GRC)',
        role: '高级技术产品经理 · 数字主线',
        location: '上海',
        bullets: [
          '主导数字主线（Digital Thread）战略规划，构建「数字工程 → 数字制造」技术矩阵，为煤电 + 风电业务线提供统一数字底座',
          '风电数字化验证平台（最值钱产出）：全系统仿真周期 75 → 15 天（↓80%）；煤电数字工厂调试周期 45 → 15 天（↓67%）',
          '带领 7 人数字产品团队（仿真工程师 + 数据科学家 + 全栈开发），建立跨职能交付机制',
        ],
      },
      {
        period: '2014 — 2016',
        company: 'TE Connectivity',
        role: 'IT 项目经理 · 智能制造',
        location: '上海',
        bullets: [
          '带领 20+ 人 MES 实施团队，24 个月内完成 4 车间 200+ 台设备 MES 部署（注塑 / 冲压 / 电镀 / 组装）',
          '家电点火 MES：能耗监控精度 ±5%，冲压 OEE +35%，电镀合规率 100%；年节省能源成本 ¥500 万',
          '汽车 Hydra MES（18 个月）：SCADA 秒级采集，生产异常响应 15 分钟（传统 MES 通常 60+ 分钟）',
        ],
      },
      {
        period: '2011 — 2014',
        company: 'Carestream Health',
        role: 'PLM 方案负责人 / 研发效能技术总监',
        location: '上海',
        bullets: [
          '独立主导 Aras PLM 在中 / 美 / 法三地部署：16 大模块，3 年内下线 10 个遗留系统',
          '创新"上线第一周全程现场敏捷支持"，跨时区 / 跨文化落地新系统，避免用户因工单流程产生抵触',
          '变更流程 14 天 → 72 小时（↓79%），设计发布效率 +40%；每年节省遗留系统维护成本 $2M+（3 年累计 $6M+ ROI）',
        ],
      },
      {
        period: '2007 — 2011',
        company: 'Siemens PLM Software',
        role: '高级应用工程师 · NX CAD/CAM/CAE 与 Teamcenter',
        location: '上海 / 大中华区',
        bullets: [
          'NX CAD/CAM/CAE + Teamcenter 大中华区技术支持与应用推广：覆盖 100+ 客户（含富士康 / 比亚迪等），年度培训 20+ 场',
          '设计 Teamcenter 多版本用户测试系统，建立需求漏斗对接全球产品团队；该机制被 Teamcenter 全球产品线采用——具备把一线需求转化为产品标准的能力',
        ],
      },
    ],
  },
  skills: {
    title: '技能',
    headline: '五种能力，一条主线',
    groups: [
      {
        heading: '工程 IT 操盘',
        items: [
          'PLM（Teamcenter / Aras）：产品数据 → 数字主线',
          'MES（Hydra / Ignition）：车间数字化与 OEE 提升',
          '数字工程 / HPC：仿真上云与算力运营',
          '制造业 CIO 最难技术 50% 已具备，后端 IT 可迁移补齐',
        ],
      },
      {
        heading: '集团企业架构',
        items: [
          'TOGAF ADM：Infra / 数据 / 系统 / 应用 四域蓝图',
          'ESB 与 4 大 Capability Pillar 规划',
          '数字化战略 → 路线图 → 落地治理',
          '统一技术语言，对齐业务与 IT',
        ],
      },
      {
        heading: 'IT 治理与交付',
        items: [
          '12–20+ 人跨职能团队（架构 / 工程 IT / 数据 / 全栈）',
          '项目管理 / 经营评审 BI 驾驶舱',
          '跨时区跨文化落地（中 / 美 / 法三地）',
          '遗留系统下线与服务化改造',
        ],
      },
      {
        heading: '云与基础设施',
        items: [
          'GPU / HPC 集群设计与调优',
          '裸金属与虚拟化',
          'CI/CD、DevOps（CloudSim 七代演进）',
          '算力资产化与场景化运营',
        ],
      },
      {
        heading: '业务翻译',
        items: [
          '把工程 / 制造 / 研发痛点翻译成 IT 系统',
          '业务沟通 → 架构选型 → 落地全链路',
          '覆盖 7 个行业的工业语境',
          '中方可独立运营的 IT 底座建设',
        ],
      },
    ],
  },
};

const caioProfile: Profile = {
  meta: {
    title: 'Robin Ji · 纪多斌 — 工业 AI 首席官 (CAIO) / AI 基础设施负责人',
    description:
      '工业 AI 首席官 (CAIO) 候选人 —— 工程 AI + Agentic AI 双线稀缺组合：18+ 年工业软件 → AI for Engineering → Agent 编排，从西门子、GE、Ansys、捷豹路虎到头部云厂商，操盘 GPU/HPC 与 Agentic AI 规划。',
  },
  hero: {
    eyebrow: '工业 AI · 首席 AI 官 (CAIO) / AI 基础设施负责人',
    name: 'Robin Ji',
    nameCN: '纪多斌',
    tagline: '18 年 · 工程 AI 双线 · Agentic AI 规划',
    location: 'Shanghai, China',
    ctaPrimary: '看项目',
    ctaSecondary: '联系我',
    pathSteps: [
      { index: '01', title: '工程 AI', sub: 'CAE · 数字孪生 · AI for Engineering' },
      { index: '02', title: 'Agentic AI', sub: 'Multi-Agent · MCP · LangGraph' },
      { index: '03', title: '工业 CAIO', sub: 'AI 战略 · 组织 · 落地治理' },
    ],
  },
  about: {
    eyebrow: 'Engineering AI → Agentic AI → CAIO',
    headline: '工程 AI 与 Agentic AI，<br />一条稀缺的双线',
    body: [
      '18+ 年，我沿着工业软件价值链走遍：CAD/CAE 工具厂商 → PLM 平台 → 车间 MES → 数字主线 → 汽车全栈数字化 → 云与 AI 基础设施。今天我把它收敛成一条清晰的线——工程 AI。',
      '制造业甲方最稀缺的 CAIO，是把"工程问题"和"AI 能力"两头都懂的人。我一端是工程 AI（CAE / 数字孪生 / AI for Engineering，Ansys SimAI™ 2026 实战），另一端是 Agentic AI 编排（Multi-Agent / MCP / LangGraph，hermes / WorkBuddy / A3 自研）。',
      '我用架构解工程的算力缺口：H800 千卡训练、H20 推理、GPU/HPC 基础设施，加上把工程痛点翻译成可落地 AI 系统的端到端经验——这正是 2026 年工业 CAIO JD 里明写的"agentic AI 规划"能力。',
    ],
  },
  highlights: {
    title: '亮点',
    headline: '用数字说话',
    tagline: 'Evidence over adjectives',
    items: [
      {
        metric: '1000 卡',
        label: 'H800 训练 / H20 推理集群',
        sub: '端到端 AI 技术栈认知（训练 / 推理 / 应用），从政企 GPU 落地实践形成，是工业 AI 基础设施的核心基础。',
      },
      {
        metric: 'Agentic',
        label: 'Multi-Agent / MCP / LangGraph',
        sub: '自研 hermes（技能架构 Agent 框架）/ WorkBuddy / A3（PBOM → 作业指导书）编排，工程 AI 落地的方法论底座。',
      },
      {
        metric: 'Ansys SimAI™',
        label: '2026 AI for Engineering 实战',
        sub: '从 CAE 工具厂商到数字孪生，把仿真与 AI 耦合，缩短产品研发周期 30%–50%。',
      },
      {
        metric: '↓80%',
        label: '风电仿真周期（GE 数字工程）',
        sub: '全系统仿真 75 → 15 天，为中国风电抢装场景赢得时间优势，大面积用于 GE 风场投标。',
      },
    ],
  },
  experience: {
    title: '经历',
    headline: '在工程 AI 与 Agentic AI 之间',
    sections: [
      {
        period: '2020 — 现在',
        company: '头部云厂商',
        role: '计算架构负责人 / 仿真云产品负责人',
        location: '上海',
        bullets: [
          '主导政企 GPU 算力场景化落地：Bosch 自动驾驶训练 / ARM 中国 EDA 调度 / Novita.ai 弹性推理——把"用 GPU 解决什么问题"作为 AI 基础设施规划起点',
          'CloudSim 仿真云 v1.0 → v1.7（共 7 版本），覆盖金融 / 教育 / 汽车 / 工业，沉淀可复制的 AI / HPC 基础设施交付体系',
          '跨全栈 AI 技术栈认知（训练 / 推理 / 应用），为工业集团 AI 战略提供端到端判断力',
        ],
      },
      {
        period: '2018 — 2020',
        company: '捷豹路虎 (Chery Jaguar Land Rover)',
        role: '企业架构与工程数字化总监',
        location: '上海',
        bullets: [
          '工程 IT 总监任内，把 PLM / HPC / 数字工程能力引入中国，支撑新能源车 BEV 研发——这是工程 AI 的甲方落地底座',
          '18 个月新建 5 大系统（Teamcenter / OTA / HPC 集群 / 三电追溯 / SAP 集成），其中 HPC 集群直接服务工程仿真与 AI 训练',
          '企业架构总监任内建立数字化蓝图，为后续 AI 能力嵌入预留 Infra / 数据 / 系统接口',
        ],
      },
      {
        period: '2018',
        company: 'ANSYS (现 Synopsys)',
        role: '高级技术客户经理 (Enterprise Accounts)',
        location: '上海',
        bullets: [
          '管理 ABB / 博世 / 大陆 等 7+ 跨国企业数字孪生项目，把仿真与 AI 耦合：ABB 自动设计缩短研发周期 50%，大陆 IGBT 数字孪生缩短 30%+',
          '推动 ANSYS 中国本地化，桥接工业 CAE 实战与高校算法研究——工程 AI 落地的典型范式',
        ],
      },
      {
        period: '2016 — 2017',
        company: 'GE 中国全球研究中心 (GRC)',
        role: '高级技术产品经理 · 数字主线',
        location: '上海',
        bullets: [
          '风电数字化验证平台（最值钱产出）：基于 Ansys 构建，全系统仿真 75 → 15 天（↓80%），大面积用于 GE 风场投标',
          '主导数字主线战略规划，构建「数字工程 → 数字制造」技术矩阵；煤电数字工厂调试 45 → 15 天（↓67%）',
          '带领 7 人数字产品团队（仿真 + 数据科学 + 全栈），建立 AI / 数据驱动的交付机制',
        ],
      },
      {
        period: '2014 — 2016',
        company: 'TE Connectivity',
        role: 'IT 项目经理 · 智能制造',
        location: '上海',
        bullets: [
          'MES 部署（4 车间 200+ 设备）中引入数据驱动：冲压 OEE +35%、电镀合规率 100%、年省能源 ¥500 万',
          'SCADA 秒级采集把生产异常响应压到 15 分钟——制造数据底座为后续 AI 质检 / 预测性维护铺路',
        ],
      },
      {
        period: '2011 — 2014',
        company: 'Carestream Health',
        role: 'PLM 方案负责人 / 研发效能技术总监',
        location: '上海',
        bullets: [
          'Aras PLM 中 / 美 / 法三地部署（16 模块），建立产品数据单一真相源——数字主线 / AI 训练的数据基础',
          '变更流程 14 天 → 72 小时（↓79%），设计发布效率 +40%',
        ],
      },
      {
        period: '2007 — 2011',
        company: 'Siemens PLM Software',
        role: '高级应用工程师 · NX CAD/CAM/CAE 与 Teamcenter',
        location: '上海 / 大中华区',
        bullets: [
          'NX CAD/CAM/CAE + Teamcenter 大中华区推广，覆盖 100+ 客户（富士康 / 比亚迪等）',
          '设计 Teamcenter 多版本用户测试系统，需求漏斗对接全球产品团队——把一线工程需求转译为产品标准的能力',
        ],
      },
    ],
  },
  skills: {
    title: '技能',
    headline: '五种能力，一条主线',
    groups: [
      {
        heading: 'Agentic AI 编排',
        items: [
          'Multi-Agent / MCP / LangGraph 编排',
          '自研 hermes（技能架构 Agent 框架）/ WorkBuddy / A3',
          '工程任务分解 → 自博弈反思 → 校验闭环',
          '技能化、可复用的 Agent 方法论',
        ],
      },
      {
        heading: 'AI for Engineering',
        items: [
          'CAE（ANSYS Mechanical / Fluent / LS-DYNA / Icepak）',
          '数字孪生 / 数字主线',
          'Ansys SimAI™ 2026 实战',
          '仿真 + AI 耦合缩短研发周期 30%–50%',
        ],
      },
      {
        heading: 'AI 基础设施',
        items: [
          'GPU / HPC 集群设计调优（H800 / H20）',
          '训练 / 推理 / 应用全栈',
          '算力场景化运营（Bosch / ARM / Novita）',
          'CloudSim 七代演进的 AI / HPC 交付体系',
        ],
      },
      {
        heading: '工程翻译',
        items: [
          '工程 / 制造痛点 → 可落地 AI 系统',
          '业务沟通 → 架构选型 → 落地',
          '覆盖 7 个行业的工业语境',
          '工程 AI 与 Agentic AI 双线打通',
        ],
      },
      {
        heading: 'AI 组织与治理',
        items: [
          '5–20+ 人跨职能 AI 团队',
          'AI 战略 / 路线图 / 落地治理',
          'AI 能力嵌入现企架构的接口预留',
          '透明、可审计的 AI 交付',
        ],
      },
    ],
  },
};

export const profiles: Record<'cio' | 'caio', Profile> = { cio: cioProfile, caio: caioProfile };
