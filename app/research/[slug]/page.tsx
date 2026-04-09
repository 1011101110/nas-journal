import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchTopic, getResearchTopics, markdownToHtml, RESEARCH_SLUGS } from "@/lib/content";

export async function generateStaticParams() {
  return RESEARCH_SLUGS.map((slug) => ({ slug }));
}

export default async function ResearchTopicPage({ params }: { params: { slug: string } }) {
  const topic = getResearchTopic(params.slug);
  if (!topic) notFound();

  const html = await markdownToHtml(topic.content);
  const allTopics = getResearchTopics();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <Link href="/research" className="hover:text-sage-600">Research</Link>
        {" → "}
        <span className="text-gray-700">{topic.title}</span>
      </div>

      {/* Research nav */}
      <div className="flex gap-2 flex-wrap mb-8">
        {allTopics.map((t) => (
          <Link
            key={t.slug}
            href={`/research/${t.slug}`}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              t.slug === params.slug
                ? "bg-sage-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-sage-100 hover:text-sage-700"
            }`}
          >
            {t.title}
          </Link>
        ))}
      </div>

      <article
        className="prose prose-sage max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
