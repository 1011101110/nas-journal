import Link from "next/link";
import { notFound } from "next/navigation";
import { getStages, getTopicsByStage, getTopic } from "@/lib/content";
import { remark } from "remark";
import html from "remark-html";

interface Props {
  params: { stageId: string; slug: string };
}

export async function generateStaticParams() {
  const stages = getStages();
  const params: { stageId: string; slug: string }[] = [];
  for (const stage of stages) {
    const topics = getTopicsByStage(stage.id);
    for (const topic of topics) {
      params.push({ stageId: stage.id, slug: topic.slug });
    }
  }
  return params;
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function TopicPage({ params }: Props) {
  const stages = getStages();
  const stage = stages.find((s) => s.id === params.stageId);
  if (!stage) notFound();

  const topic = getTopic(params.stageId, params.slug);
  if (!topic) notFound();

  const contentHtml = await markdownToHtml(topic.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8 flex gap-4">
        <Link href={`/stages/${params.stageId}`} className="text-sage-600 hover:underline text-sm font-sans">
          ← {stage.label}
        </Link>
      </div>

      <article>
        <header className="mb-8 pb-6 border-b border-warm-200">
          <p className="text-sm text-warm-400 font-sans uppercase tracking-wide mb-2">{stage.label} · {stage.ageRange}</p>
          <h1 className="font-serif text-4xl text-sage-800 mb-3">{topic.title}</h1>
          {topic.description && (
            <p className="text-lg text-warm-600 italic">{topic.description as string}</p>
          )}
        </header>

        <div
          className="prose-journal"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
