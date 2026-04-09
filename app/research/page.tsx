import Link from "next/link";
import { getResearchTopics } from "@/lib/content";

export default function ResearchPage() {
  const topics = getResearchTopics();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-gray-800 mb-3">Research Deep Dives</h1>
      <p className="text-gray-600 mb-10 text-lg">
        The science behind NAS — what it does neurologically and what the outcome data shows.
      </p>

      <div className="space-y-4">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/research/${topic.slug}`}
            className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-sage-400 hover:shadow-sm transition-all group"
          >
            <h2 className="font-serif text-xl font-semibold text-gray-800 group-hover:text-sage-700 transition-colors">
              {topic.title}
            </h2>
            {topic.summary && (
              <p className="text-gray-500 mt-2 text-sm leading-snug">{topic.summary}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
