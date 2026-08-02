// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages 个人站点子路径部署：
// 用户主页 https://binbinao.github.io/resume/
// 注：若未来切到独立自定义域名，把 base 改成 '/' 即可。
export default defineConfig({
  site: 'https://binbinao.github.io',
  base: '/resume',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});