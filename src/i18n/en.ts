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
    switchLang: '中文',
  },
  hero: {
    eyebrow: 'Industrial AI Infrastructure Architect',
    name: 'Robin Ji',
    nameCN: '纪多斌',
    tagline:
      'Translating engineering pain points into executable technical systems — across industrial software, cloud, and AI infrastructure.',
    location: 'Shanghai, China',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Contact',
  },
  about: {
    title: 'About',
    headline: 'A translator, not a bystander.',
    body: [
      '18+ years walking the industrial-software value chain: CAD/CAE tools vendor → PLM platform → shop-floor MES → digital thread → CAE enterprise account management → automotive full-stack digitalization → cloud + AI infrastructure.',
      'My core skill is converting engineering problems into systems that scale — wind-turbine structural issues, battery-pack quality concerns, GPU cluster capacity — solved through architecture.',
      'Now focused on industrial AI infrastructure: CAE-on-cloud, AI for Engineering, Agent × CAE orchestration — Ansys SimAI™, Siemens Xcelerator AI, Dassault 3DEXPERIENCE AI.',
    ],
  },
  highlights: {
    title: 'Highlights',
    headline: 'By the numbers.',
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
    headline: 'From vendor to cloud architect — 7 years per leap.',
    sections: [
      {
        period: '2020 — Now',
        company: 'Leading Chinese Cloud Vendor',
        role: 'Head of Computing Architecture / Simulation Cloud Product Owner',
        location: 'Shanghai',
        bullets: [
          'Lead architect team in East China, GPU/HPC technical ownership for enterprise clients.',
          'Designed 1,000-card GPU cluster (H800) for financial LLM training platform.',
          'Founded CloudSim simulation cloud (v1.0 → v1.7): CFD, structural, STA, DRC, SI-PI, EMI-EMC, financial compute.',
          'Delivered Bosch autonomous-driving training, ARM China EDA scheduling, Novita.ai elastic inference.',
        ],
      },
      {
        period: '2018 — 2020',
        company: 'Chery Jaguar Land Rover',
        role: 'Director, Enterprise Architecture & Engineering Digitalization',
        location: 'Shanghai',
        bullets: [
          'Managed 6-member architect team + Engineering & Quality IT.',
          'NEV full-stack digitalization: Teamcenter PLM, CAE sim, OTA connected vehicle, 3-electric quality traceability.',
          'TOGAF ADM enterprise architecture blueprint across infra / data / system / app.',
          'Tableau BI cockpit for PD: project progress, cost, ROI, budget overrun.',
        ],
      },
      {
        period: '2018',
        company: 'ANSYS (now Synopsys)',
        role: 'Senior Technical Account Manager (Enterprise)',
        location: 'Shanghai',
        bullets: [
          'Technical partnerships with GE, Honeywell, ABB, Continental, UAES, Ericsson, Bosch across China.',
          'ABB dry-type transformer 2D/3D thermo-structural platform (ANSYS Mechanical).',
          'Continental IGBT thermal-fluid platform (ANSYS Icepak + CFD).',
          'Bridged industrial CAE practice with academic research.',
        ],
      },
      {
        period: '2016 — 2017',
        company: 'GE China Global Research Center',
        role: 'Senior Technical PM · Digital Thread',
        location: 'Shanghai',
        bullets: [
          'Digital thread planning + "Digital Engineering → Digital Manufacturing" matrix.',
          'Coal power digital factory: sim pipeline + automated reporting — ramp-up 45 → 15 days.',
          'Wind turbine digital verification: full-system simulation 75 → 15 days.',
          'VR digital radiology PoC (HTC Vive hospital layout sim).',
          'Led 7-person digital product team.',
        ],
      },
      {
        period: '2014 — 2016',
        company: 'TE Connectivity',
        role: 'IT Program Manager, Smart Manufacturing',
        location: 'Shanghai',
        bullets: [
          '20+ member MES team; deployed across injection / stamping / electroplating / assembly (~200 machines).',
          'Appliance ignition MES: energy monitoring ±5%, stamping OEE +35%, electroplating compliance 100%.',
          'Automotive Hydra MES (18 months): SCADA second-level collection, anomaly response 15 min.',
          '2D AutoCAD → 3D NX tool migration, parametric templates, design reuse +30%.',
          '40+ technical trainings, 10+ certified engineers.',
        ],
      },
      {
        period: '2011 — 2014',
        company: 'Carestream Health',
        role: 'PLM Solution Lead / R&D Effectiveness Director',
        location: 'Shanghai',
        bullets: [
          'Led Aras PLM deployment across China / US / France; 16 modules, 10 legacy systems retired in 3 years.',
          'Change cycle 14 days → 72 hours; design release efficiency +40%.',
          'Saved $2M+/yr in legacy maintenance.',
        ],
      },
      {
        period: '2007 — 2011',
        company: 'Siemens PLM Software',
        role: 'Senior Application Engineer · NX CAD/CAM/CAE & Teamcenter',
        location: 'Greater China',
        bullets: [
          'NX CAD/CAM/CAE + Teamcenter technical support and promotion across Greater China.',
          'Designed Teamcenter multi-version user testing system; built requirement funnel for global PMs.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'From industrial software to AI agents — 5 picks.',
    viewMore: 'View all',
    viewDetail: 'Detail',
    visitRepo: 'Visit repo',
  },
  skills: {
    title: 'Skills',
    headline: 'Five capabilities, one thread.',
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
    headline: 'Master of Mechanical Engineering.',
    items: [
      { school: 'Tongji University', degree: 'Master of Mechanical Engineering' },
    ],
  },
  languages: {
    title: 'Languages',
    headline: 'Three working languages.',
    items: [
      { name: 'Mandarin Chinese', level: 'Native' },
      { name: 'English', level: 'Professional Working (CET-6 / TOEFL)' },
      { name: 'German', level: 'CGT-4, work document reading' },
    ],
  },
  contact: {
    title: 'Contact',
    headline: 'Send a message.',
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
  },
};