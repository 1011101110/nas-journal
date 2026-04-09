import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

// ─── Base Types ──────────────────────────────────────────────────────────────

export interface BaseContent {
  slug: string;
  title: string;
  summary?: string;
  content: string;
  [key: string]: unknown;
}

export interface AgeStage extends BaseContent {
  ageRange: string;
  order: number;
}

export interface SymptomPage extends BaseContent {
  relatedInterventions: string[];
  relatedSymptoms: string[];
  ageRelevance: string[];
}

export interface InterventionPage extends BaseContent {
  timeHorizon: string;
  mechanism: string;
  crossCuts: string[];
  priority: string;
}

export interface ResearchPage extends BaseContent {
  order?: number;
}

// ─── Generic Loader ───────────────────────────────────────────────────────────

function loadMarkdown<T extends BaseContent>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const slug = path.basename(filePath, '.md');
  return { slug, content, ...data } as T;
}

function loadDirectory<T extends BaseContent>(dir: string): T[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => loadMarkdown<T>(path.join(dir, filename))!)
    .filter(Boolean);
}

// ─── Age Stages ───────────────────────────────────────────────────────────────

export function getAgeStages(): AgeStage[] {
  return loadDirectory<AgeStage>(path.join(contentDirectory, 'age')).sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );
}

export function getAgeStage(slug: string): AgeStage | null {
  return loadMarkdown<AgeStage>(path.join(contentDirectory, 'age', `${slug}.md`));
}

export const AGE_STAGE_IDS = ['newborn', 'infant', 'early-toddler', 'toddler', 'older-toddler'];

// ─── Symptoms ─────────────────────────────────────────────────────────────────

export function getSymptoms(): SymptomPage[] {
  return loadDirectory<SymptomPage>(path.join(contentDirectory, 'symptoms'));
}

export function getSymptom(slug: string): SymptomPage | null {
  return loadMarkdown<SymptomPage>(path.join(contentDirectory, 'symptoms', `${slug}.md`));
}

export const SYMPTOM_SLUGS = [
  'screaming',
  'sleep',
  'transitions',
  'tantrums',
  'sensory-overload',
  'feeding',
  'overstimulation',
];

// ─── Interventions ────────────────────────────────────────────────────────────

export function getInterventions(): InterventionPage[] {
  return loadDirectory<InterventionPage>(path.join(contentDirectory, 'interventions'));
}

export function getIntervention(slug: string): InterventionPage | null {
  return loadMarkdown<InterventionPage>(
    path.join(contentDirectory, 'interventions', `${slug}.md`)
  );
}

export const INTERVENTION_SLUGS = [
  'pcit',
  'co-regulation',
  'routines-predictability',
  'screen-time-reduction',
  'probiotics-gut-health',
  'omega-3s',
];

// ─── Not Pursuing ─────────────────────────────────────────────────────────────

export function getNotPursuing(): BaseContent | null {
  return loadMarkdown<BaseContent>(path.join(contentDirectory, 'not-pursuing.md'));
}

// ─── Research ─────────────────────────────────────────────────────────────────

export function getResearchTopics(): ResearchPage[] {
  return loadDirectory<ResearchPage>(path.join(contentDirectory, 'research')).sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );
}

export function getResearchTopic(slug: string): ResearchPage | null {
  return loadMarkdown<ResearchPage>(path.join(contentDirectory, 'research', `${slug}.md`));
}

export const RESEARCH_SLUGS = [
  'nas-brain',
  'long-term-outcomes',
  'nature-vs-nurture',
  'epigenetics',
];

// ─── About ────────────────────────────────────────────────────────────────────

export function getAbout(): BaseContent | null {
  return loadMarkdown<BaseContent>(path.join(contentDirectory, 'about.md'));
}

// ─── Markdown Renderer ────────────────────────────────────────────────────────

import { remark } from 'remark';
import remarkHtml from 'remark-html';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml, { sanitize: false }).process(markdown);
  return result.toString();
}

// ─── Legacy shims (for any old routes still in flight) ────────────────────────

export function getStages() {
  return getAgeStages().map((s) => ({
    id: s.slug,
    label: s.title,
    ageRange: s.ageRange,
    order: s.order,
  }));
}

export function getToolkitTopics() {
  return getSymptoms();
}

export function getToolkitTopic(slug: string) {
  return getSymptom(slug);
}
