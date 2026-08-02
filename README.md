# binbinao/resume — Robin Ji 个人简历站

> 公开版个人简历 · 部署在 `binbinao.github.io/resume/`
> 隐私分层、静态站、零追踪。

---

## 🎯 这是什么

Robin Ji（纪多斌）的公开版个人简历站点。Astro + Tailwind 静态输出，部署到 GitHub Pages。

**核心约束**：只放必要的可公开信息，**不泄露**手机号、邮箱明文、当前具体公司+部门、招聘进度、内部决策文件路径、教育起止年份等。

---

## 🛠 技术栈

| 项 | 选择 | 理由 |
|---|---|---|
| 框架 | Astro 5 | 内容驱动 + 组件复用 + SSG，GitHub Pages 零配置 |
| 样式 | Tailwind CSS 3 | 原子化 utility，构建产物自动 purge |
| 类型 | TypeScript（strict） | 字段校验、i18n schema 兜底 |
| 部署 | GitHub Pages（独立 repo） | 与 `career_path` 私人管理 repo 解耦 |

**不接**：Google Analytics / Plausible / Umami / Microsoft Clarity / Hotjar —— 零追踪。

---

## 📁 目录结构

```
binbinao-resume/
├── astro.config.mjs              # base='/resume'，static output
├── tailwind.config.mjs           # 暗色 / 亮色 + accent 蓝
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── components/               # Hero / About / Highlights / Timeline / ...
    ├── content/
    │   ├── config.ts             # zod schema
    │   └── projects/             # 4 个项目 MD（DeepDraw / LIMS / ...）
    ├── i18n/
    │   ├── zh.ts                 # 中文文案（主）
    │   ├── en.ts                 # 英文文案（BMW / 外企 track）
    │   └── index.ts              # pickDict()
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro           # 中文主页
    │   ├── en/index.astro        # 英文主页
    │   └── projects/[slug].astro # 项目详情
    └── styles/
        └── global.css
```

---

## 💻 本地开发

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # 产出 dist/
npm run preview      # 本地预览 build 产物
```

需要 Node 18.17+ / 20+ / 22+。

---

## 🚀 部署到 GitHub Pages

**首次部署**（一次性）：

```bash
# 1. 在 GitHub 上新建公开 repo：binbinao/resume
#    （不勾选 README、.gitignore、license，自己建）

# 2. 本地首次推送
git init
git add -A
git commit -m "chore: initial resume site"
git branch -M main
git remote add origin git@github.com:binbinao/resume.git
git push -u origin main

# 3. GitHub repo → Settings → Pages
#    Source: GitHub Actions（Astro 官方 workflow）
#    或 Build branch: main / root: /
#    （如需 root 部署，把 astro.config.mjs 的 base 改成 '/'）
```

**持续部署**：

```bash
git add -A
git commit -m "feat: ..."
git push origin main
```

---

## 🌐 域名

- 默认：`https://binbinao.github.io/resume/`
- 中文主页：`/resume/`
- 英文主页：`/resume/en/`
- 项目详情：`/resume/projects/{slug}/`

切换自定义域名：把 `astro.config.mjs` 的 `base: '/resume'` 改成 `base: '/'`，并加 `site: 'https://yourdomain.com'`。

---

## 📝 内容维护

| 想改什么 | 改哪里 |
|---|---|
| Hero 文案 / Highlights 数字 | `src/i18n/{zh,en}.ts` |
| 经历时间线 | `src/i18n/{zh,en}.ts` → `experience.sections` |
| 技能分组 | `src/i18n/{zh,en}.ts` → `skills.groups` |
| 新增项目卡 | `src/content/projects/{name}.md` + frontmatter |
| 项目详情页正文 | `src/content/projects/{name}.md` body |

**隐私红线**：见下方 § 隐私红线清单。所有改动后请跑 `tools/privacy_scan.py`。

---

## 🔒 隐私红线清单（明确**不放**的字段）

> 这是默认行为。任何贡献者在改内容前必须读这一节。

### ❌ 绝不放

| 字段 | 理由 |
|---|---|
| 个人手机号 | 直接联系方式 → 爬虫骚扰 + 社工 |
| 邮箱明文 | JS 混淆即可，源码 grep 不到 |
| 微信号 / 公众号名 | 与求职进度组合可精确锁定身份 |
| LinkedIn 完整 URL | 占位符无意义，公开反暴露人脉 |
| 当前公司精确名 + 具体部门 | 同事 / 猎头 5 秒锁定本人 |
| 招聘进度（SHIDC 面试中 / BMW 准备投递 / NVIDIA） | 谈判被动 |
| 期望薪资 / 谈判区间 | 谈判被动 |
| 内部决策文件路径（`00_recruitment_expert_review_*.md` 等） | 暴露内部流程 |
| 身份证 / 护照 / 银行卡 | 法律红线 |
| 公司内部 JD / 面试笔记 | 商业秘密 |
| 教育起止精确年份 | 推断出生年 → 年龄歧视风险 |
| 工作起止精确月份 | 同上 |

### ✅ 放

- 名字（公开身份）
- 城市（Shanghai, China）—— 粒度 OK
- GitHub / YouTube 公开账号
- 历史大公司名（Siemens / GE / Ansys / JLR / TE / Carestream）—— 大公司，写了不会暴露内部信息
- 学校 + 学位 + 方向（**不写起止年份**）
- 项目 repo 链接（公开 GitHub repo）
- 所有技术栈与项目亮点

### ⚠️ 模糊化处理

- 当前公司 → "头部云厂商 / leading Chinese cloud vendor"
- 内部部门 / 团队规模 → 泛化或删除
- 时间精度 → **只到年**（不写月）

---

## 🛡 隐私扫描

构建后跑一次自动扫描，确保没漏：

```bash
python3 tools/privacy_scan.py dist/
```

扫描项：
- 中国大陆手机号（11 位 `1[3-9]\d{9}`）
- 邮箱明文（`@outlook.com` / `@qq.com` 等）
- 身份证号（18 位）
- 内部文件路径关键词（`knowledge_graph.md` / `01_resumes/` / `03_applications/` / `04_jds/` 等）
- 内部公司 + 部门（`Tencent Cloud Computing Shanghai` / `Tencent East China` / `腾讯东区`）
- 招聘状态关键词（`SHIDC R2` / `面试中` / `准备投递` 等）
- 薪资关键词（`150-300 万` / `¥` / `总包` 等）
- 公众号名（`逾泽荣涂鸦的地方`）

**任何命中 = 必须修复**。

---

## 📜 许可证

MIT。Fork 自由，保留署名即可。

---

*最后更新：2026-08-02*