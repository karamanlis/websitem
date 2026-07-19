import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const categories = [
  "dijital-pazarlama",
  "meta-ads",
  "seo",
  "ai-sistemleri",
  "website-optimizasyonu",
  "donusum-optimizasyonu",
  "isletme-buyumesi",
] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(categories),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    client: z.string(),
    industry: z.string(),
    problem: z.string(),
    solution: z.string(),
    results: z.string(),
    isPlaceholder: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

export const collections = { blog, "case-studies": caseStudies };
export const categoryLabels: Record<(typeof categories)[number], string> = {
  "dijital-pazarlama": "Dijital Pazarlama",
  "meta-ads": "Meta Ads",
  seo: "SEO",
  "ai-sistemleri": "AI Sistemleri",
  "website-optimizasyonu": "Website Optimizasyonu",
  "donusum-optimizasyonu": "Dönüşüm Optimizasyonu",
  "isletme-buyumesi": "İşletme Büyümesi",
};
