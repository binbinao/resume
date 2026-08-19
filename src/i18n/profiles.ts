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

/**
 * EN counterparts — same shape, IB / overseas HR framing.
 * Kept in a separate map so picking by (locale, profile) is symmetric.
 */
const cioEnProfile: Profile = {
  meta: {
    title: 'Robin Ji — Industrial Group CIO / Digital Transformation Head',
    description:
      'Industrial Group CIO / Digital Transformation Head — 18+ years across industrial software → engineering IT → enterprise architecture. Siemens, GE, Ansys, Chery Jaguar Land Rover, leading Chinese cloud. Hands-on PLM / MES / Digital Thread / HPC and TOGAF ADM.',
  },
  hero: {
    eyebrow: 'Industrial Group · CIO / Digital Transformation Head',
    name: 'Robin Ji',
    nameCN: '纪多斌',
    tagline: '18 years · 7 industrial giants · Engineering IT → Enterprise Architecture',
    location: 'Shanghai, China',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Contact',
    pathSteps: [
      { index: '01', title: 'Engineering IT', sub: 'PLM · MES · Digital Thread · HPC' },
      { index: '02', title: 'Enterprise Architecture', sub: 'TOGAF ADM · Infra → Apps' },
      { index: '03', title: 'Group CIO', sub: 'China-side independently operable IT' },
    ],
  },
  about: {
    eyebrow: 'Engineering IT → Enterprise Architecture → CIO',
    headline: 'The hardest 50% of<br />industrial IT — already shipped',
    body: [
      '18+ years across the industrial digitalization stack: CAD/CAE vendors → PLM platforms → shop-floor MES → digital thread → automotive full-stack digitalization → cloud & AI infrastructure. At Chery Jaguar Land Rover and GE I operated as the owner, not the consultant.',
      'The hardest half of a manufacturing CIO mandate — engineering IT (PLM / MES / digital engineering / HPC) — I delivered directly as Engineering IT Director at Chery Jaguar Land Rover and as Digital Thread lead at GE. The remaining IT estate (ERP / CRM / finance IT / security org) is a portable layer on top.',
      'My value: I translate engineering and manufacturing pain into operable IT systems. 18 months to stand up 5 new systems, build a "China-side independently operable" IT foundation, and lay down a TOGAF ADM blueprint across infra / data / system / app domains — surfaced through a management BI cockpit for monthly reviews.',
    ],
  },
  highlights: {
    title: 'Highlights',
    headline: 'By the numbers',
    tagline: 'Evidence over adjectives',
    items: [
      {
        metric: '12 ppl',
        label: 'Engineering IT + Architecture team (JLR)',
        sub: 'Led 6 architects + Engineering & Quality IT (12 total); built the "China-side independently operable" IT capability foundation for the JV.',
      },
      {
        metric: '5 systems',
        label: 'Newly built in 18 months',
        sub: 'Teamcenter (PLM) / OTA / HPC cluster / 3-electric traceability / compliance-SAP integration — supporting NEV BEV launch in China.',
      },
      {
        metric: 'TOGAF',
        label: 'Group enterprise architecture blueprint',
        sub: 'Infra → ESB → 4 Capability Pillars; a unified technical language for group-wide digital transformation.',
      },
      {
        metric: '$6M+',
        label: '3-year legacy savings (Carestream)',
        sub: 'Aras PLM deployed across China / US / France — 16 modules, 10 legacy systems retired in 3 years, $2M+/yr maintenance saved.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    headline: 'Between engineering IT and group architecture',
    sections: [
      {
        period: '2020 — Now',
        company: 'Leading Chinese Cloud Vendor',
        role: 'Head of Computing Architecture / Simulation Cloud Product Owner',
        location: 'Shanghai',
        bullets: [
          'Productized GPU / HPC infrastructure for enterprise IT: validated cloud-HPC feasibility via Shanghai Electric Wind Power, then crystallized it into a reusable simulation cloud product (CloudSim v1.0 → v1.7, 7 releases).',
          'Built a "GPU for the business problem" methodology for enterprise rollouts — IT-asset thinking that maps directly to a CIO view of compute as a managed capability.',
          'End-to-end AI stack understanding (training / inference / application) — judgement for industrial-AI infrastructure planning.',
        ],
      },
      {
        period: '2018 — 2020',
        company: 'Chery Jaguar Land Rover',
        role: 'Director, Enterprise Architecture & Engineering Digitalization',
        location: 'Shanghai',
        bullets: [
          'As Engineering IT Director: led 6 architects + Engineering & Quality IT (12 total); imported engineering capability from the UK side to support NEV BEV launch in China (Range Rover Evoque / Discovery Sport).',
          'Built 5 systems in 18 months: Teamcenter (PLM) / OTA / HPC cluster / 3-electric traceability / compliance-SAP integration.',
          'Promoted to Enterprise Architecture Director: blueprint covering Infra → ESB → 4 Capability Pillars (Engineering IT / Manufacturing IT / Corporate Operation / Sales & Marketing DMS); laid the "China-side independently operable" IT foundation.',
          'Designed TOGAF ADM blueprint across infra / data / system / app domains; built a PD Tableau BI cockpit (progress / cost / ROI / budget overrun) for monthly management reviews.',
        ],
      },
      {
        period: '2018',
        company: 'ANSYS (now Synopsys)',
        role: 'Senior Technical Account Manager (Enterprise)',
        location: 'Shanghai',
        bullets: [
          'Owned digital-twin engagements with ABB / Bosch Automotive Electronics / Continental Automotive Electronics — 7+ Fortune-500 enterprises under mixed strategic-cooperation and standard-service models.',
          'ABB dry-type transformer auto-design coupling system: shortened product-development cycle by 50%; Continental IGBT-box digital twin: design cycle shortened by 30%+.',
          'Bridged industrial CAE practice with SJTU / Tongji academic research; drove ANSYS China localization.',
        ],
      },
      {
        period: '2016 — 2017',
        company: 'GE China Global Research Center',
        role: 'Senior Technical PM · Digital Thread',
        location: 'Shanghai',
        bullets: [
          'Led Digital Thread strategic planning, built the "Digital Engineering → Digital Manufacturing" technology matrix — a unified digital foundation for GE China coal-power and wind-power business lines.',
          'Wind-power digital verification platform (highest-value deliverable): full-system simulation cycle 75 → 15 days (↓80%); coal-power digital factory ramp-up 45 → 15 days (↓67%).',
          'Led 7-person digital product team (simulation engineers + data scientists + full-stack developers).',
        ],
      },
      {
        period: '2014 — 2016',
        company: 'TE Connectivity',
        role: 'IT Program Manager, Smart Manufacturing',
        location: 'Shanghai',
        bullets: [
          'Led 20+ member MES team; completed MES rollout across 4 workshops / 200+ machines (injection / stamping / electroplating / assembly) within 24 months.',
          'Appliance ignition MES: ±5% energy monitoring, stamping OEE +35%, electroplating compliance 100%; saved ¥5M/yr in energy costs.',
          'Automotive Hydra MES (18 months): SCADA second-level collection, anomaly response 15 min (vs 60+ min in legacy MES).',
        ],
      },
      {
        period: '2011 — 2014',
        company: 'Carestream Health',
        role: 'PLM Solution Lead / R&D Effectiveness Director',
        location: 'Shanghai',
        bullets: [
          'Independently led Aras PLM deployment across China / US / France: 16 modules, 10 legacy systems retired in 3 years.',
          'Innovated "Week-1 Onsite Agile Support" — sat side-by-side with customers the entire first week to overcome cross-timezone / cross-cultural friction.',
          'Change cycle 14 days → 72 hours (↓79%), design release efficiency +40%; saved $2M+/yr in legacy maintenance ($6M+ cumulative 3-year ROI).',
        ],
      },
      {
        period: '2007 — 2011',
        company: 'Siemens PLM Software',
        role: 'Senior Application Engineer · NX CAD/CAM/CAE & Teamcenter',
        location: 'Greater China',
        bullets: [
          'NX CAD/CAM/CAE + Teamcenter technical support and promotion across Greater China: 100+ customers (Foxconn / BYD), 20+ trainings/yr.',
          'Designed Teamcenter multi-version user-testing system; built requirement funnel connecting field feedback with global PMs — mechanism adopted by Teamcenter global product line.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    headline: 'Five capabilities, one thread',
    groups: [
      {
        heading: 'Engineering IT',
        items: [
          'PLM (Teamcenter / Aras): product data → digital thread.',
          'MES (Hydra / Ignition): shop-floor digitalization and OEE uplift.',
          'Digital engineering / HPC: simulation on cloud and compute operations.',
          'The hardest 50% of manufacturing CIO already shipped; the rest is portable.',
        ],
      },
      {
        heading: 'Enterprise Architecture',
        items: [
          'TOGAF ADM: infra / data / system / app domains.',
          'ESB and 4 Capability Pillars planning.',
          'Digital strategy → roadmap → governance.',
          'Unified technical language across business and IT.',
        ],
      },
      {
        heading: 'IT Governance & Delivery',
        items: [
          '12–20+ cross-functional teams (architecture / engineering IT / data / full-stack).',
          'Program management / management-review BI cockpit.',
          'Cross-timezone, cross-cultural deployment (CN / US / FR).',
          'Legacy decommission and service-oriented refactoring.',
        ],
      },
      {
        heading: 'Cloud & Infrastructure',
        items: [
          'GPU / HPC cluster design & tuning.',
          'Bare-metal & virtualization.',
          'CI/CD, DevOps (CloudSim across 7 releases).',
          'Compute as a managed, scenario-driven asset.',
        ],
      },
      {
        heading: 'Business Translation',
        items: [
          'Convert engineering / manufacturing / R&D pain into operable IT systems.',
          'Business communication → architecture → delivery, end to end.',
          'Industrial context across 7 industries.',
          'Building IT foundations the China side can run independently.',
        ],
      },
    ],
  },
};

const caioEnProfile: Profile = {
  meta: {
    title: 'Robin Ji — Chief AI Officer (CAIO) / Industrial AI Infrastructure Lead',
    description:
      'Chief AI Officer (CAIO) candidate — engineering AI + agentic AI double thread: 18+ years across industrial software → AI for Engineering → agent orchestration. Siemens, GE, Ansys, Chery Jaguar Land Rover, leading Chinese cloud. Hands-on GPU/HPC and agentic AI planning.',
  },
  hero: {
    eyebrow: 'Industrial AI · Chief AI Officer (CAIO) / AI Infrastructure Lead',
    name: 'Robin Ji',
    nameCN: '纪多斌',
    tagline: '18 years · Engineering AI · Agentic AI planning',
    location: 'Shanghai, China',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Contact',
    pathSteps: [
      { index: '01', title: 'Engineering AI', sub: 'CAE · Digital Twin · AI for Engineering' },
      { index: '02', title: 'Agentic AI', sub: 'Multi-Agent · MCP · LangGraph' },
      { index: '03', title: 'Industrial CAIO', sub: 'AI strategy · Org · Governance' },
    ],
  },
  about: {
    eyebrow: 'Engineering AI → Agentic AI → CAIO',
    headline: 'Engineering AI plus agentic AI,<br />a rare double thread',
    body: [
      '18+ years across the industrial software value chain: CAD/CAE vendors → PLM platforms → shop-floor MES → digital thread → automotive full-stack digitalization → cloud & AI infrastructure. Today this converges into one line — engineering AI.',
      'The rarest CAIO in industrial organizations is the person who understands both ends: engineering problems and AI capability. One end is engineering AI (CAE / digital twin / AI for Engineering, hands-on with Ansys SimAI™ 2026). The other is agentic AI orchestration (Multi-Agent / MCP / LangGraph — including my own hermes / WorkBuddy / A3 builds).',
      'I solve engineering compute gaps with architecture: H800 1,000-card training, H20 inference, GPU/HPC infrastructure — plus the end-to-end ability to translate engineering pain into shipped AI systems. This is exactly what 2026 industrial CAIO JDs call "agentic AI planning".',
    ],
  },
  highlights: {
    title: 'Highlights',
    headline: 'By the numbers',
    tagline: 'Evidence over adjectives',
    items: [
      {
        metric: '1,000 cards',
        label: 'H800 training / H20 inference',
        sub: 'End-to-end AI stack understanding (training / inference / application) developed through enterprise GPU rollouts — the foundation for industrial AI infrastructure.',
      },
      {
        metric: 'Agentic',
        label: 'Multi-Agent / MCP / LangGraph',
        sub: 'Built hermes (skill-based agent framework) / WorkBuddy / A3 (PBOM → work instruction) — the methodology layer for engineering AI delivery.',
      },
      {
        metric: 'Ansys SimAI™',
        label: '2026 AI for Engineering hands-on',
        sub: 'From CAE vendor to digital twin: coupling simulation and AI to shorten product development cycles 30%–50%.',
      },
      {
        metric: '↓80%',
        label: 'Wind-power simulation cycle (GE Digital Engineering)',
        sub: 'Full-system simulation 75 → 15 days; widely applied to GE wind-farm bidding during China\'s installation rush.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    headline: 'Between engineering AI and agentic AI',
    sections: [
      {
        period: '2020 — Now',
        company: 'Leading Chinese Cloud Vendor',
        role: 'Head of Computing Architecture / Simulation Cloud Product Owner',
        location: 'Shanghai',
        bullets: [
          'Led enterprise GPU scenario rollouts: Bosch autonomous-driving training / ARM China EDA scheduling / Novita.ai elastic inference — starting AI-infrastructure planning from "what GPU can solve", not hardware specs.',
          'CloudSim simulation cloud v1.0 → v1.7 (7 releases) across finance / education / automotive / industrial — a repeatable AI / HPC infrastructure delivery system.',
          'End-to-end AI stack understanding (training / inference / application) — judgement for industrial AI strategy.',
        ],
      },
      {
        period: '2018 — 2020',
        company: 'Chery Jaguar Land Rover',
        role: 'Director, Enterprise Architecture & Engineering Digitalization',
        location: 'Shanghai',
        bullets: [
          'As Engineering IT Director: imported PLM / HPC / digital engineering capability to China, supporting NEV BEV R&D — the on-prem base for engineering AI.',
          'Built 5 systems in 18 months (Teamcenter / OTA / HPC cluster / 3-electric traceability / SAP integration); the HPC cluster directly serves engineering simulation and AI training.',
          'As Enterprise Architecture Director: blueprinted the data / system / infra interfaces that subsequent AI capabilities plug into.',
        ],
      },
      {
        period: '2018',
        company: 'ANSYS (now Synopsys)',
        role: 'Senior Technical Account Manager (Enterprise)',
        location: 'Shanghai',
        bullets: [
          'Owned digital-twin engagements with ABB / Bosch / Continental — coupling simulation with AI: ABB auto-design cut development cycle 50%, Continental IGBT digital twin cut 30%+.',
          'Drove ANSYS China localization; bridged industrial CAE practice with academic research — a template for engineering AI landing.',
        ],
      },
      {
        period: '2016 — 2017',
        company: 'GE China Global Research Center',
        role: 'Senior Technical PM · Digital Thread',
        location: 'Shanghai',
        bullets: [
          'Wind-power digital verification platform (highest-value deliverable): built on Ansys, full-system simulation 75 → 15 days (↓80%); widely applied to GE wind-farm bidding.',
          'Led Digital Thread strategy, built the "Digital Engineering → Digital Manufacturing" technology matrix; coal-power digital factory ramp-up 45 → 15 days (↓67%).',
          'Led 7-person digital product team (simulation + data science + full-stack) — an AI / data-driven delivery model.',
        ],
      },
      {
        period: '2014 — 2016',
        company: 'TE Connectivity',
        role: 'IT Program Manager, Smart Manufacturing',
        location: 'Shanghai',
        bullets: [
          'MES rollout (4 workshops / 200+ machines) brought data-driven manufacturing: stamping OEE +35%, electroplating compliance 100%, ¥5M/yr energy savings.',
          'SCADA second-level collection compressed production-anomaly response to 15 min — the manufacturing data foundation for AI quality / predictive maintenance.',
        ],
      },
      {
        period: '2011 — 2014',
        company: 'Carestream Health',
        role: 'PLM Solution Lead / R&D Effectiveness Director',
        location: 'Shanghai',
        bullets: [
          'Aras PLM deployed across China / US / France (16 modules) — single source of truth for product data, the data foundation for digital thread and AI training.',
          'Change cycle 14 days → 72 hours (↓79%), design release efficiency +40%.',
        ],
      },
      {
        period: '2007 — 2011',
        company: 'Siemens PLM Software',
        role: 'Senior Application Engineer · NX CAD/CAM/CAE & Teamcenter',
        location: 'Greater China',
        bullets: [
          'NX CAD/CAM/CAE + Teamcenter promotion across Greater China: 100+ customers (Foxconn / BYD).',
          'Designed Teamcenter multi-version user-testing system; built requirement funnel connecting field feedback with global PMs.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    headline: 'Five capabilities, one thread',
    groups: [
      {
        heading: 'Agentic AI Orchestration',
        items: [
          'Multi-Agent / MCP / LangGraph orchestration.',
          'Built hermes (skill-based agent framework) / WorkBuddy / A3.',
          'Engineering task decomposition → self-play reflection → verification loop.',
          'Skill-based, reusable agent methodology.',
        ],
      },
      {
        heading: 'AI for Engineering',
        items: [
          'CAE (ANSYS Mechanical / Fluent / LS-DYNA / Icepak).',
          'Digital twin / digital thread.',
          'Ansys SimAI™ 2026 hands-on.',
          'Simulation + AI coupling to shorten R&D cycles 30%–50%.',
        ],
      },
      {
        heading: 'AI Infrastructure',
        items: [
          'GPU / HPC cluster design & tuning (H800 / H20).',
          'Training / inference / application end-to-end.',
          'Scenario-driven compute operations (Bosch / ARM / Novita).',
          'CloudSim\'s 7-release AI / HPC delivery system.',
        ],
      },
      {
        heading: 'Business Translation',
        items: [
          'Engineering / manufacturing pain → shipped AI systems.',
          'Business communication → architecture → delivery.',
          'Industrial context across 7 industries.',
          'Bridging engineering AI and agentic AI in one person.',
        ],
      },
      {
        heading: 'AI Org & Governance',
        items: [
          '5–20+ cross-functional AI teams.',
          'AI strategy / roadmap / governance.',
          'Pre-wired interfaces for AI in the enterprise architecture.',
          'Transparent, auditable AI delivery.',
        ],
      },
    ],
  },
};

/**
 * Profile lookup map keyed by (profile, locale). The zh entries are the
 * original CIO/CAIO profiles; en entries are the English counterparts above.
 */
export const profilesByLocale: Record<'cio' | 'caio', Record<'zh' | 'en', Profile>> = {
  cio: { zh: cioProfile, en: cioEnProfile },
  caio: { zh: caioProfile, en: caioEnProfile },
};
