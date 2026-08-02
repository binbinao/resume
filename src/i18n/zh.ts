/**
 * 中文 UI 文案（站点主语言）
 * 隐私：所有字段均为可公开 / 必要求职信息。不放手机号、不放公众号、不放内部文件路径。
 */
export const zh = {
  meta: {
    title: 'Robin Ji · 纪多斌 — 工业 AI 基础设施架构师',
    description:
      'Industrial AI Infrastructure Architect — 18+ 年工业软件 → 云计算 → AI 基础设施路径，从西门子到云厂商，跨越 CAD/CAE/MES/PLM/数字主线/CAX on Cloud 五个时代。',
  },
  nav: {
    about: '关于',
    experience: '经历',
    projects: '项目',
    highlights: '亮点',
    skills: '技能',
    contact: '联系',
    switchLang: 'EN',
  },
  hero: {
    eyebrow: 'Industrial AI Infrastructure Architect',
    name: 'Robin Ji',
    nameCN: '纪多斌',
    tagline:
      '把工程师的工艺痛点翻译成可落地的技术系统。跨越工业软件、云计算、AI 基础设施三个时代。',
    location: 'Shanghai, China',
    ctaPrimary: '看项目',
    ctaSecondary: '联系我',
  },
  about: {
    title: '关于',
    headline: '翻译者，不是旁观者。',
    body: [
      '18+ 年时间，我沿着工业软件价值链走了一遍：CAD/CAE 工具厂商 → PLM 平台 → 车间 MES → 数字主线 → CAE 大客户经理 → 汽车全栈数字化 → 云与 AI 基础设施。',
      '我的核心能力是把工程问题翻成可扩展的技术系统 —— 风机的结构问题、电池包的质量焦虑、GPU 集群的算力缺口，我用架构去解。',
      '现在主攻工业 AI 基础设施：仿真上云、AI for Engineering、Agent × CAE 编排 —— Ansys SimAI™、Siemens Xcelerator AI、Dassault 3DEXPERIENCE AI 是这个赛道的标的。',
    ],
  },
  highlights: {
    title: '亮点',
    items: [
      {
        metric: '44★',
        label: 'GitHub 出圈项目',
        sub: '`document-superpowers`：为 AI 编程工具设计的 4 阶段文档写作技能集（Brainstorm → Plan → Execute → Review），Cursor / CodeBuddy / Claude Code 多平台兼容。',
      },
      {
        metric: '18+ 年',
        label: '工业软件 → 云计算 → AI 基础设施',
        sub: '西门子 → GE → Ansys → JLR → TE → Carestream → 头部云厂商，全程实战、非旁观。',
      },
      {
        metric: '7 版本',
        label: 'CloudSim 仿真云从 0 到 1',
        sub: '负责交付给 20+ 企业客户（南方电网、上交高金院、商飞上海航研院等），覆盖 CFD / 结构 / STA / DRC / SI-PI / EMI-EMC / 金融计算。',
      },
      {
        metric: '93 视频',
        label: 'YouTube NX CAD/CAM/CAE 实操录屏',
        sub: '@binbinao · 234 订阅 · ~5.5 万次观看 · 5 年长青流量（5 轴加工、DMU 运动仿真、模具设计）。',
      },
    ],
  },
  experience: {
    title: '经历',
    sections: [
      {
        period: '2020 — 现在',
        company: '头部云厂商',
        role: '计算架构负责人 / 仿真云产品负责人',
        location: '上海',
        bullets: [
          '东区架构师团队 lead，负责 GPU / HPC 技术架构与重大企业客户服务',
          '主导 1,000 卡 GPU 集群方案（H800）用于金融 LLM 训练平台',
          'CloudSim 仿真云产品负责人（v1.0 → v1.7），覆盖 CFD / 结构 / 电磁 / 金融计算',
          '交付 Bosch 自动驾驶训练平台、ARM 中国 EDA 调度、Novita.ai 弹性推理等关键场景',
        ],
      },
      {
        period: '2018 — 2020',
        company: '捷豹路虎 (Chery Jaguar Land Rover)',
        role: '企业架构与工程数字化总监',
        location: '上海',
        bullets: [
          '管理 6 人架构团队 + 工程与质量 IT 团队',
          '主导 NEV 全栈数字化（4 大平台、20+ 系统）：Teamcenter PLM、CAE 仿真、OTA 整车、3 电质量追溯',
          'TOGAF ADM 企业架构蓝图，覆盖基础设施 / 数据 / 系统 / 应用四域',
          'PD 部门 Tableau BI 驾驶舱：项目进度、成本、ROI、预算超支',
        ],
      },
      {
        period: '2018',
        company: 'ANSYS (现 Synopsys)',
        role: '高级技术客户经理 (Enterprise Accounts)',
        location: '上海',
        bullets: [
          '管理 GE、Honeywell、ABB、Continental、UAES、Ericsson、Bosch 等大客户技术合作',
          'ABB 干式变压器 2D/3D 热-结构仿真平台（基于 ANSYS Mechanical）',
          'Continental IGBT 热流仿真平台（ANSYS Icepak + CFD）',
          '桥接工业 CAE 实践与高校算法研究',
        ],
      },
      {
        period: '2016 — 2017',
        company: 'GE 中国全球研究中心 (GRC)',
        role: '高级技术产品经理 · 数字主线',
        location: '上海',
        bullets: [
          '主导数字主线规划与「数字工程 → 数字制造」技术矩阵',
          '煤电数字工厂：仿真数据管线 + 自动化报告，调试周期 45 → 15 天',
          '风机数字验证：ANSYS Mechanical 一站式结构仿真，全系统仿真周期 75 → 15 天',
          'VR 数字放射影像设备 PoC（HTC Vive 医院放射科布局仿真）',
          '7 人数字产品团队',
        ],
      },
      {
        period: '2014 — 2016',
        company: 'TE Connectivity',
        role: 'IT 项目经理 · 智能制造',
        location: '上海',
        bullets: [
          '带领 20+ 人 MES 实施团队，部署注塑 / 冲压 / 电镀 / 组装车间（约 200 台设备）',
          '家电点火 MES：能耗监控 ±5%，冲压 OEE +35%，电镀合规 100%',
          '汽车 Hydra MES（18 个月）：SCADA 秒级采集，生产异常响应 15 分钟',
          '设计工具迁移：2D AutoCAD → 3D NX，参数化模板库，设计复用 +30%',
          '40+ 技术培训，10+ 认证工程师',
        ],
      },
      {
        period: '2011 — 2014',
        company: 'Carestream Health',
        role: 'PLM 方案负责人 / 研发效能技术总监',
        location: '上海',
        bullets: [
          '独立主导 Aras PLM 在中 / 美 / 法三地部署；16 大模块，3 年内下线 10 个遗留系统',
          '变更流程 14 天 → 72 小时；设计发布效率 +40%',
          '每年节省遗留系统维护成本 $2M+',
        ],
      },
      {
        period: '2007 — 2011',
        company: 'Siemens PLM Software',
        role: '高级应用工程师 · NX CAD/CAM/CAE 与 Teamcenter',
        location: '上海 / 大中华区',
        bullets: [
          'NX CAD/CAM/CAE + Teamcenter 大中华区技术支持与应用推广',
          '设计 Teamcenter 多版本用户测试系统，建立需求漏斗对接全球产品经理',
        ],
      },
    ],
  },
  projects: {
    title: '项目',
    subtitle: '从工业软件到 AI Agent —— 选 4 个代表作。',
    viewMore: '查看全部',
    viewDetail: '详情',
    visitRepo: '访问仓库',
  },
  skills: {
    title: '技能',
    groups: [
      {
        heading: '工程翻译',
        items: [
          '把工程 / 制造 / 研发痛点翻译成可执行技术方案，覆盖 7 个行业',
          '业务沟通 → 架构选型 → 落地的全链路推动',
        ],
      },
      {
        heading: '工业软件栈',
        items: [
          'CAE：ANSYS Mechanical / Fluent / LS-DYNA / Icepak',
          'PLM：Teamcenter / Aras',
          'MES：Hydra / Ignition',
          'CAD/CAM：Siemens NX 全模块',
          '数字主线 / 数字孪生',
        ],
      },
      {
        heading: 'AI & 加速',
        items: [
          'LLM 训练（H800, 1,000 卡集群）与推理（H20）',
          'Agent 编排（Multi-Agent / MCP / LangGraph）',
          'AI for Engineering（Ansys SimAI™ 2026 实战）',
          'AI 辅助开发：vLLM / RAGflow / LangChain',
        ],
      },
      {
        heading: '云与基础设施',
        items: [
          'GPU / HPC 集群设计与调优',
          '裸金属与虚拟化',
          'CI/CD、DevOps（CloudSim v1.0 → v1.7 七代演进）',
        ],
      },
      {
        heading: '交付与领导力',
        items: [
          '5–20+ 人跨职能团队',
          '项目管理 / TOGAF ADM 企业架构',
          '40+ 技术培训，10+ 认证工程师',
        ],
      },
    ],
  },
  education: {
    title: '教育',
    items: [
      {
        school: '同济大学',
        degree: '机械工程硕士',
      },
      {
        school: '上海理工大学',
        degree: '机械工程学士',
      },
    ],
  },
  languages: {
    title: '语言',
    items: [
      { name: '中文（普通话）', level: '母语' },
      { name: 'English', level: '专业工作水平（CET-6 / TOEFL）' },
      { name: 'German', level: 'CGT-4，工作文档阅读' },
    ],
  },
  contact: {
    title: '联系',
    body: '合作、面试、咨询，欢迎邮件。',
    emailLabel: '邮箱',
    channels: [
      { label: 'GitHub', url: 'https://github.com/binbinao', handle: 'binbinao' },
      { label: 'YouTube', url: 'https://www.youtube.com/@binbinao', handle: '@binbinao' },
    ],
    note: '简历站为公开版。详细项目卡、STAR 叙述、薪酬讨论请走邮件。',
  },
  footer: {
    copy: '本站不挂任何追踪脚本。开源代码，按需自取。',
  },
} as const;

export type I18nSchema = typeof zh;