import { defineCollection, z } from 'astro:content';

/**
 * 项目卡片集合
 * 字段保持最小化：name / tagline / repo / stack / highlights / metrics
 * 隐私红线：repo 字段必须在仓库级代码里手动维护，不引用 career_path 私人 repo 的任何路径
 */
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    taglineEn: z.string().optional(),
    role: z.string(),
    roleEn: z.string().optional(),
    period: z.string(),
    stack: z.array(z.string()),
    stackEn: z.array(z.string()).optional(),
    repo: z.string().url().optional(),
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .default([]),
    metricsEn: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .optional(),
    highlights: z.array(z.string()),
    highlightsEn: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects };