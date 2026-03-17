import Link from "next/link";
import { notFound } from "next/navigation";
import { getToolkitTopics, getToolkitTopic } from "@/lib/content";
import { remark } from "remark";
import html from "remark-html";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const topics = getToolkitTopics();
  return topics.map((t) => ({ slug: t.slug }));
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

function extractQuickRef(contentHtml: string): { quickRef: string; rest: string } {
  // Extract the "Try This Right Now" section (h2 + ol/ul until the next h2)
  const marker = '<h2>⚡ Try This Right Now</h2>';
  const idx = contentHtml.indexOf(marker);
  if (idx === -1) return { quickRef: "", rest: contentHtml };

  const afterMarker = contentHtml.slice(idx + marker.length);
  // Find next h2
  const nextH2 = afterMarker.indexOf('<h2>');
  const quickRefContent = nextH2 !== -1 ? afterMarker.slice(0, nextH2) : afterMarker;
  const restContent = nextH2 !== -1 ? afterMarker.slice(nextH2) : "";

  return {
    quickRef: quickRefContent,
    rest: restContent,
  };
}

export default async function ToolkitTopicPage({ params }: Props) {
  const topic = getToolkitTopic(params.slug);
  if (!topic) notFound();

  const contentHtml = await markdownToHtml(topic.content);
  const { quickRef, rest } = extractQuickRef(contentHtml);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8 flex gap-4">
        <Link href="/toolkit" className="text-sage-600 hover:underline text-sm font-sans">
          ← Toolkit
        </Link>
        <Link href="/" className="text-warm-400 hover:underline text-sm font-sans">
          Home
        </Link>
      </div>

      <header className="mb-8 pb-6 border-b border-warm-200">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{topic.icon as string}</span>
          <h1 className="font-serif text-4xl text-warm-800">{topic.title}</h1>
        </div>
        {topic.description && (
          <p className="text-lg text-warm-500 italic">{topic.description as string}</p>
        )}
      </header>

      {quickRef && (
        <div className="quick-ref-box mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">⚡</span>
            <h2 className="font-serif text-xl font-semibold text-amber-800">Try This Right Now</h2>
          </div>
          <div
            className="prose prose-sm max-w-none prose-ol:text-warm-800 prose-li:my-1 prose-strong:text-warm-900"
            dangerouslySetInnerHTML={{ __html: quickRef }}
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
