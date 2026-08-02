/**
 * English UI strings — secondary track for BMW / overseas roles.
 * Mirrors src/i18n/zh.ts structure. Privacy: no phone, no WeChat, no internal paths.
 */
import type { I18nSchema } from './zh';

export const en: I18nSchema = {
  meta: {
    title: 'Robin Ji — Industrial AI Infrastructure Architect',
    description:
      'Industrial AI Infrastructure Architect — 18+ years across industrial software, cloud, and AI infrastructure. Siemens → GE → Ansys → JLR → TE → Carestream → leading Chinese cloud vendor.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    highlights: 'Highlights',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    switchLang: '中文',
  },
  hero: {
    eyebrow: 'Industrial AI Infrastructure Architect',
    name: 'Robin Ji',
    nameCN: '纪多斌',
    tagline: '18 years. 7 industries. One thread.',
    location: 'Shanghai, China',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Contact',
  },
  about: {
    title: 'About',
    headline: 'A translator,<br />not a bystander',
    body: [
      '18+ years walking the industrial-software value chain: CAD/CAE tools vendor → PLM platform → shop-floor MES → digital thread → CAE enterprise account management → automotive full-stack digitalization → cloud + AI infrastructure.',
      'My core skill is converting engineering problems into systems that scale — wind-turbine structural issues, battery-pack quality concerns, GPU cluster capacity — solved through architecture.',
      'Now focused on industrial AI infrastructure: CAE-on-cloud, AI for Engineering, Agent × CAE orchestration — Ansys SimAI™, Siemens Xcelerator AI, Dassault 3DEXPERIENCE AI.',
    ],
  },
  highlights: {
    title: 'Highlights',
    headline: 'By the numbers',
    items: [
      {
        metric: '44★',
        label: 'GitHub flagship project',
        sub: '`document-superpowers` — 4-stage AI writing skillset (Brainstorm → Plan → Execute → Review) for Cursor / CodeBuddy / Claude Code.',
      },
      {
        metric: '18+ yrs',
        label: 'Industrial software → cloud → AI infra',
        sub: 'Siemens → GE → Ansys → JLR → TE → Carestream → leading Chinese cloud vendor. Hands-on, not bystander.',
      },
      {
        metric: '7 releases',
        label: 'CloudSim simulation cloud 0→1',
        sub: 'Delivered to 20+ enterprise clients (CSG, SJTU AERI, COMAC Shanghai Aircraft Design Institute) — CFD / structural / STA / DRC / SI-PI / EMI-EMC / financial compute.',
      },
      {
        metric: '93 videos',
        label: 'YouTube NX CAD/CAM/CAE tutorials',
        sub: '@binbinao · 234 subscribers · ~55K views · 5-year evergreen on 5-axis machining, DMU kinematics, mold design.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    headline: 'Across three eras:<br />industrial software, cloud, and AI',
    sections: [
      {
        period: '2020 — Now',
        company: 'Leading Chinese Cloud Vendor',
        role: 'Head of Computing Architecture / Simulation Cloud Product Owner',
        location: 'Shanghai',
        bullets: [
          'Led Shanghai Electric Wind Power HPC cloud migration in 2020, using it as a springboard to transition from architect to Simulation Cloud PM; validated HPC-cloud feasibility with one flagship customer.',
          'Owned CloudSim simulation cloud 7-release iteration (v1.0 → v1.7, 2021–2022) across financial / education / automotive / industrial sectors; customers include CSG, COMAC Shanghai Aircraft Design Institute, and SJTU AERI.',
          'Serving government & enterprise clients since 2022, led GPU-compute scenario rollouts. Customer focus is "what GPU can solve", not hardware specs. Notable cases: Bosch autonomous-driving training / ARM China EDA scheduling / Novita.ai elastic inference.',
          'Full-stack AI expertise: end-to-end understanding (training / inference / application) developed through hands-on GPU deployment for gov/enterprise clients — the foundation for industrial AI and AI for Engineering.',
        ],
      },
      {
        period: '2018 — 2020',
        company: 'Chery Jaguar Land Rover',
        role: 'Director, Enterprise Architecture & Engineering Digitalization',
        location: 'Shanghai',
        bullets: [
          'Engineering IT Director: managed 6 architects + Engineering & Quality IT (12 total). Led engineering capability import from UK side, supporting NEV BEV launch in China — flagship models: Range Rover Evoque / Discovery Sport. Built/imported 5 systems: Teamcenter (PLM) / OTA / HPC cluster / 3-electric traceability / compliance-SAP integration — completed within 18 months.',
          'Promoted to Enterprise Architecture Director: built Chery Jaguar Land Rover IT architecture blueprint covering Infra → ESB → 4 Capability Pillars (Engineering IT / Manufacturing IT / Corporate Operation / Sales & Marketing DMS); constructed the "China-side independently operable" IT capability foundation for the JV.',
          'Designed TOGAF ADM enterprise-architecture blueprint across infra / data / system / app domains; gave the group a unified technical vocabulary for digital transformation.',
          'Built PD-department Tableau BI cockpit: 4-dimensional visualization (project progress, cost, ROI, budget overrun); supports monthly management reviews.',
        ],
      },
      {
        period: '2018',
        company: 'ANSYS (now Synopsys)',
        role: 'Senior Technical Account Manager (Enterprise)',
        location: 'Shanghai',
        bullets: [
          'Owned digital-twin engagements with ABB / Bosch Automotive Electronics / Continental Automotive Electronics — 7+ Fortune-500 enterprises under mixed strategic-cooperation and standard-service models. ABB / Continental / Bosch were flagship digital-twin accounts.',
          'Led ABB dry-type transformer auto-design coupling system (ANSYS product ecosystem): thermo-structural coupled simulation completed in one pass during early design; shortened product-development cycle by 50%.',
          'Led Continental Automotive IGBT-box digital-twin simulation (ANSYS Icepak + CFD): well-designed Ansys tool flow enabled early-stage electrothermal simulation; design cycle shortened by 30%+.',
          'Bridged industrial CAE practice with academic research at SJTU / Tongji; drove ANSYS China localization.',
        ],
      },
      {
        period: '2016 — 2017',
        company: 'GE China Global Research Center',
        role: 'Senior Technical PM · Digital Thread',
        location: 'Shanghai',
        bullets: [
          'Wind-power digital verification platform (highest-value deliverable): built on Ansys simulation tools; full-system simulation cycle 75 → 15 days (↓80%); won time advantage during China\'s wind-power installation rush; widely applied to GE wind-farm bidding.',
          'Led Digital Thread strategic planning, built the "Digital Engineering → Digital Manufacturing" technology matrix; provided a unified digital foundation for GE China\'s coal-power and wind-power business lines.',
          'Coal-power digital factory: simulation pipeline + automated reporting cut ramp-up from 45 → 15 days (↓67%).',
          'VR digital radiology PoC (HTC Vive hospital radiology layout simulation), in collaboration with GE Healthcare.',
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
          'Tool migration: 2D AutoCAD → 3D NX + parametric template library; design reuse +30%; certified 50+ engineers on NX.',
          'Delivered 40+ technical trainings, including 10+ advanced NX certifications.',
        ],
      },
      {
        period: '2011 — 2014',
        company: 'Carestream Health',
        role: 'PLM Solution Lead / R&D Effectiveness Director',
        location: 'Shanghai',
        bullets: [
          'Independently led Aras PLM (internally "PLI" — Product Level Information) deployment across China / US / France: 16 modules, 10 legacy systems retired in 3 years.',
          'Innovated "Week-1 Onsite Agile Support" service: under cross-timezone / cross-cultural challenges, sat side-by-side with customers for the entire first week after go-live, avoiding friction with internal ticket-based support systems; helped customers ramp up quickly.',
          'Change cycle 14 days → 72 hours (↓79%), design release efficiency +40%.',
          'Saved $2M+/yr in legacy maintenance ($6M+ cumulative 3-year ROI).',
        ],
      },
      {
        period: '2007 — 2011',
        company: 'Siemens PLM Software',
        role: 'Senior Application Engineer · NX CAD/CAM/CAE & Teamcenter',
        location: 'Greater China',
        bullets: [
          'NX CAD/CAM/CAE + Teamcenter technical support and promotion across Greater China: 100+ enterprise customers (including Foxconn / BYD), 20+ trainings/yr.',
          'Trained large customer base on NX CAD/CAM/CAE. Most memorable: a military customer in Chengdu — CAM software solved critical-part machining challenges.',
          'Designed Teamcenter multi-version user-testing system; built requirement funnel connecting field feedback with global PMs; mechanism adopted by Teamcenter global product line.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'From industrial software to AI agents — 5 picks',
    viewMore: 'View all',
    viewDetail: 'Detail',
    visitRepo: 'Visit repo',
  },
  skills: {
    title: 'Skills',
    headline: 'Five capabilities, one thread',
    groups: [
      {
        heading: 'Business Translation',
        items: [
          'Convert engineering / manufacturing / R&D pain points into executable systems — across 7 industries.',
          'Full-chain driver: business communication → architecture → delivery.',
        ],
      },
      {
        heading: 'Industrial Software Stack',
        items: [
          'CAE: ANSYS Mechanical / Fluent / LS-DYNA / Icepak.',
          'PLM: Teamcenter / Aras.',
          'MES: Hydra / Ignition.',
          'CAD/CAM: Siemens NX full suite.',
          'Digital Thread / Digital Twin.',
        ],
      },
      {
        heading: 'AI & Acceleration',
        items: [
          'LLM training (H800, 1,000-card clusters) & inference (H20).',
          'Agent orchestration (Multi-Agent / MCP / LangGraph).',
          'AI for Engineering (Ansys SimAI™ 2026 hands-on).',
          'AI-assisted dev: vLLM / RAGflow / LangChain.',
        ],
      },
      {
        heading: 'Cloud & Infrastructure',
        items: [
          'GPU / HPC cluster design & tuning.',
          'Bare-metal & virtualization.',
          'CI/CD, DevOps (CloudSim v1.0 → v1.7 across 7 releases).',
        ],
      },
      {
        heading: 'Delivery & Leadership',
        items: [
          '5–20+ cross-functional teams.',
          'Program management / TOGAF ADM enterprise architecture.',
          '40+ technical trainings, 10+ certified engineers.',
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    headline: 'Master of Mechanical Engineering',
    items: [
      { school: 'Tongji University', degree: 'Master of Mechanical Engineering' },
      { school: 'University of Shanghai for Science and Technology', degree: 'Bachelor of Mechanical Engineering' },
    ],
  },
  languages: {
    title: 'Languages',
    headline: 'Three working languages',
    items: [
      { name: 'Mandarin Chinese', level: 'Native' },
      { name: 'English', level: 'Professional Working (CET-6 / TOEFL)' },
      { name: 'German', level: 'CGT-4, work document reading' },
    ],
  },
  contact: {
    title: 'Contact',
    headline: 'Send a message',
    body: 'Open to conversations on collaboration, interviews, consulting.',
    emailLabel: 'Email',
    obfuscationNote: 'Obfuscated by JS — not crawlable',
    channels: [
      { label: 'GitHub', url: 'https://github.com/binbinao', handle: 'binbinao' },
      { label: 'YouTube', url: 'https://www.youtube.com/@binbinao', handle: '@binbinao' },
    ],
    note: 'Public profile. Detailed project cards, STAR narratives, and compensation discussion via email.',
  },
  footer: {
    copy: 'No tracking scripts. Open source, fork freely.',
    homePath: '/',
    enPath: '/en/',
  },
};