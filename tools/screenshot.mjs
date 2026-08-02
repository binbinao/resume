// Local screenshot helper. Usage: node tools/screenshot.mjs <url> <out.png> [width] [fullPage]
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';

const url = process.argv[2];
const outFile = process.argv[3] || '/tmp/snap.png';
const width = Number(process.argv[4] || 1440);
const fullPage = (process.argv[5] || 'true') !== 'false';

if (!url) {
  console.error('usage: node tools/screenshot.mjs <url> <out.png> [width] [fullPage]');
  process.exit(1);
}

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
const page = await context.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
const buffer = await page.screenshot({ fullPage, type: 'png' });
writeFileSync(outFile, buffer);
await browser.close();
console.log(`saved ${buffer.length} bytes -> ${outFile}`);
