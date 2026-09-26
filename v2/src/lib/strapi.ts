import { execSync } from 'child_process';

export interface StrapiPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  title_en: string;
  excerpt_en: string;
  content_en: string;
  category: string;
  publishedAt: string;
  createdAt: string;
}

const SCRIPT = '/home/oc/projects/amdcpr-website/v2/scripts/strapi-read-posts.py';

export function getPublishedPosts(): StrapiPost[] {
  try {
    const out = execSync(`python3 ${SCRIPT}`, { timeout: 5000, encoding: 'utf-8' });
    return JSON.parse(out.trim());
  } catch (e) {
    console.warn(`Strapi: ${e}`);
    return [];
  }
}

export function getPostBySlug(slug: string): StrapiPost | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}
