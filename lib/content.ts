import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  stage?: string;
  ageRange?: string;
  order?: number;
  content: string;
  [key: string]: unknown;
}

function getContentFromDir(dir: string): ContentItem[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug, content, ...data } as ContentItem;
  });
}

export function getStages(): { id: string; label: string; ageRange: string; order: number }[] {
  return [
    { id: 'newborn', label: 'Newborn', ageRange: '0–4 weeks', order: 1 },
    { id: 'infant', label: 'Infant', ageRange: '1–12 months', order: 2 },
    { id: 'toddler-early', label: 'Early Toddler', ageRange: '12–18 months', order: 3 },
    { id: 'toddler-mid', label: 'Mid Toddler', ageRange: '18–24 months', order: 4 },
    { id: 'toddler-late', label: 'Late Toddler', ageRange: '24–30 months', order: 5 },
  ];
}

export function getTopicsByStage(stageId: string): ContentItem[] {
  const dir = path.join(contentDirectory, 'stages', stageId);
  return getContentFromDir(dir).sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getTopic(stageId: string, slug: string): ContentItem | null {
  const dir = path.join(contentDirectory, 'stages', stageId);
  const filePath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, content, ...data } as ContentItem;
}

export function getToolkitTopics(): ContentItem[] {
  const dir = path.join(contentDirectory, 'toolkit');
  return getContentFromDir(dir).sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getToolkitTopic(slug: string): ContentItem | null {
  const dir = path.join(contentDirectory, 'toolkit');
  const filePath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, content, ...data } as ContentItem;
}

export function getResearchTopics(): ContentItem[] {
  const dir = path.join(contentDirectory, 'research');
  return getContentFromDir(dir).sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getResearchTopic(slug: string): ContentItem | null {
  const dir = path.join(contentDirectory, 'research');
  const filePath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, content, ...data } as ContentItem;
}
