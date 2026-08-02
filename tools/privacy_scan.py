#!/usr/bin/env python3
"""
隐私红线扫描器 —— 简历站 build 产物走查。

用法：
    python3 tools/privacy_scan.py dist/

任何命中（exit code != 0）必须修复后再 push。

策略：纯字符串 substring 检查 + 简单 regex，避开 Python 正则引擎的字符类转义陷阱。
"""
import os
import re
import sys
from pathlib import Path

# ---- 关键词清单（直接 substring 扫描）---------------------------------
KEYWORDS: list[tuple[str, str, list[str]]] = [
    ('内部路径',   'career_path 内部',  [
        'career_path/', 'career_path\\', '01_resumes/', '01_resumes\\',
        '03_applications/', '04_jds/', '05_interviews/', '06_offers/',
        '07_reflections/', '08_market_research/', 'knowledge_graph.md',
        'tracking.md', 'recruitment_expert_review',
    ]),
    ('内部公司',   '当前公司具体名',   [
        'tencent cloud computing', 'tencent east china',
        '腾讯东区', '腾讯云', '腾讯云计算',
    ]),
    ('招聘状态',   '面试进度关键词',   [
        'SHIDC R1', 'SHIDC R2', 'SHIDC R3', 'SHIDC R4', 'SHIDC R5',
        'NVIDIA System Performance', '面试中', '准备投递',
        '背调', 'recruitment_expert_review_HR_executive',
    ]),
    ('薪资',       '期望/总包关键词',  [
        '150-300 万', '150—300 万', '150~300 万',
        '期望薪', '总包', '年薪 150', '年薪 200', '年薪 300',
    ]),
    ('公众号',     '公众号名',         [
        '逾泽荣涂鸦的地方',
    ]),
    ('LinkedIn',   'LinkedIn 完整 URL 占位', [
        'linkedin.com/in/ji-duobin-profile',
    ]),
]

# ---- 复杂正则（验证用）-----------------------------------------------
REGEXES: list[tuple[str, str, str]] = [
    ('手机号·CN',  '中国大陆手机号',  r'(?<!\d)1[3-9]\d{9}(?!\d)'),
    ('手机号·INT', '国际格式手机号',  r'\+86[\s-]?\d{2,3}[\s-]?\d{4}[\s-]?\d{4}'),
    ('证件',       '身份证号',         r'(?<!\d)\d{17}[\dXx](?!\d)'),
    ('证件',       '护照号',           r'(?<![A-Za-z0-9])[A-Z]\d{8}(?!\d)'),
    ('邮箱·明文',  '邮箱明文(@outlook/qq/163/gmail/...)',
        r'[A-Za-z0-9._%+-]+@(?:outlook|qq|163|gmail|foxmail|hotmail|sina|sohu|yeah)\.com'),
    # 工作经历起止年份是公开简历的必备信息，**不扫**。
    # 只扫英文月份精度（推断月份精度暴露年龄段的手段）。
    ('月份精度',   '英文月份精度',
        r'(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+20\d{2}\s*[-—~]\s*(?:Present|Now|20\d{2})'),
]

# ---- 容许项（误报豁免）-----------------------------------------------
ALLOWED_VALUES: set[str] = set()
# JS 混淆邮箱的 base64 字符串片段（混淆产物，不算明文）
# 注意：实际是 base64 后不等于明文，正则扫描已豁免

# ---- 文件过滤 ---------------------------------------------------------
TEXT_EXTS = {'.html', '.js', '.mjs', '.css', '.json', '.txt', '.xml', '.svg'}
IGNORE_PATHS = re.compile(r'[/\\](?:_astro|favicon\.ico|node_modules)[/\\]')


def walk_files(root: Path):
    for p in root.rglob('*'):
        if not p.is_file():
            continue
        if IGNORE_PATHS.search(str(p)):
            continue
        if p.suffix.lower() in TEXT_EXTS:
            yield p


def scan_keywords(text: str, file_hits: list):
    for cat, name, words in KEYWORDS:
        for w in words:
            if w in text:
                idx = text.find(w)
                snippet = text[max(0, idx - 20):idx + len(w) + 20].replace('\n', '⏎')
                file_hits.append((cat, name, w, snippet))


def scan_regex(text: str, file_hits: list):
    for cat, name, pat in REGEXES:
        for m in re.finditer(pat, text):
            match = m.group(0)
            if match in ALLOWED_VALUES:
                continue
            idx = m.start()
            snippet = text[max(0, idx - 20):idx + len(match) + 20].replace('\n', '⏎')
            file_hits.append((cat, name, match, snippet))


def scan_file(path: Path) -> list:
    try:
        text = path.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        return []
    hits: list = []
    scan_keywords(text, hits)
    scan_regex(text, hits)
    return hits


def main():
    if len(sys.argv) < 2:
        print('用法: python3 tools/privacy_scan.py <dist_dir>')
        sys.exit(2)
    root = Path(sys.argv[1]).resolve()
    if not root.exists():
        print(f'❌ 路径不存在: {root}')
        sys.exit(2)

    total_files = 0
    total_hits = 0
    by_cat: dict[str, int] = {}
    for f in walk_files(root):
        total_files += 1
        hits = scan_file(f)
        if hits:
            for cat, name, match, snippet in hits:
                total_hits += 1
                by_cat[cat] = by_cat.get(cat, 0) + 1
                rel = f.relative_to(root)
                print(f'\n🚨 [{cat}] {rel}')
                print(f'   命中: {match!r}')
                print(f'   上下文: …{snippet}…')

    print('\n' + '=' * 60)
    print(f'扫描文件: {total_files}')
    print(f'命中项数: {total_hits}')
    if by_cat:
        print('分类统计:')
        for c, n in sorted(by_cat.items(), key=lambda x: -x[1]):
            print(f'  · {c}: {n}')
        print('=' * 60)
        print('❌ 命中隐私红线，**必须修复后才能 push**。')
        sys.exit(1)
    else:
        print('✅ 隐私扫描通过，未发现红线字段。')


if __name__ == '__main__':
    main()