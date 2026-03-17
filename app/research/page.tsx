import Link from "next/link";
import { getResearchTopics } from "@/lib/content";

export default function ResearchPage() {
  const topics = getResearchTopics();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sage-600 hover:underline text-sm font-sans">← Back to Journal</Link>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🔬</span>
          <h1 className="font-serif text-4xl text-sage-800">Research</h1>
        </div>
        <p className="text-warm-600 text-lg max-w-2xl">
          Deep dives into the science behind NAS — written for parents, not academics.
          Journal voice, real citations, honest summaries of what the studies actually say.
        </p>
      </div>

      <div className="space-y-5">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/research/${topic.slug}`}
            className="block p-6 bg-sage-50 border border-sage-200 rounded-xl hover:bg-sage-100 hover:border-sage-300 transition-all group"
          >
            <h2 className="font-serif text-xl text-sage-800 group-hover:text-sage-600 transition-colors mb-2">
              {topic.title}
            </h2>
            {topic.description && (
              <p className="text-warm-600 text-sm">{topic.description as string}</p>
            )}
            <p className="text-sage-500 text-sm mt-3 font-sans">Read research deep dive →</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-warm-100 border border-warm-200 rounded-xl text-sm text-warm-600 font-sans">
        <strong>Note:</strong> Research summaries include citations to peer-reviewed studies.
        I've tried to represent findings accurately, but I'm a parent, not a scientist.
        For clinical decisions, consult your medical team.
      </div>
    </div>
  );
}
