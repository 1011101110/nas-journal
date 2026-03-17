import Link from "next/link";
import { notFound } from "next/navigation";
import { getResearchTopics, getResearchTopic } from "@/lib/content";
import { remark } from "remark";
import html from "remark-html";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const topics = getResearchTopics();
  return topics.map((t) => ({ slug: t.slug }));
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

function extractKeyTakeaways(contentHtml: string): { keyTakeaways: string; rest: string } {
  const marker = '<h2>Key Takeaways</h2>';
  const idx = contentHtml.indexOf(marker);
  if (idx === -1) return { keyTakeaways: "", rest: contentHtml };

  const afterMarker = contentHtml.slice(idx + marker.length);
  const nextH2 = afterMarker.indexOf('<h2>');
  const keyTakeawaysContent = nextH2 !== -1 ? afterMarker.slice(0, nextH2) : afterMarker;
  const restContent = nextH2 !== -1 ? afterMarker.slice(nextH2) : "";

  return {
    keyTakeaways: keyTakeawaysContent,
    rest: restContent,
  };
}

export default async function ResearchTopicPage({ params }: Props) {
  const topic = getResearchTopic(params.slug);
  if (!topic) notFound();

  const contentHtml = await markdownToHtml(topic.content);
  const { keyTakeaways, rest } = extractKeyTakeaways(contentHtml);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8 flex gap-4">
        <Link href="/research" className="text-sage-600 hover:underline text-sm font-sans">
          ← Research
        </Link>
        <Link href="/" className="text-warm-400 hover:underline text-sm font-sans">
          Home
        </Link>
      </div>

      <header className="mb-8 pb-6 border-b border-warm-200">
        <p className="text-sm text-warm-400 font-sans uppercase tracking-wide mb-2">Research Deep Dive</p>
        <h1 className="font-serif text-4xl text-sage-800 mb-3">{topic.title}</h1>
        {topic.description && (
          <p className="text-lg text-warm-500 italic">{topic.description as string}</p>
        )}
      </header>

      {keyTakeaways && (
        <div className="key-takeaways-box mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🔑</span>
            <h2 className="font-serif text-xl font-semibold text-sage-800">Key Takeaways</h2>
          </div>
          <div
            className="prose prose-sm max-w-none prose-ul:text-warm-800 prose-li:my-2 prose-strong:text-warm-900"
            dangerouslySetInnerHTML={{ __html: keyTakeaways }}
          />
        </div>
      )}

      <div
        className="prose-journal"
        dangerouslySetInnerHTML={{ __html: rest }}
      />
    </div>
  );
}
