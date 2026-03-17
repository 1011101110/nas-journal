import Link from "next/link";
import { getToolkitTopics } from "@/lib/content";

export default function ToolkitPage() {
  const topics = getToolkitTopics();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sage-600 hover:underline text-sm font-sans">← Back to Journal</Link>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">⚡</span>
          <h1 className="font-serif text-4xl text-warm-800">Quick Toolkit</h1>
        </div>
        <p className="text-warm-600 text-lg max-w-2xl">
          Organized by symptom and behavior, not by age. For when you need answers right now —
          2 AM, in the thick of it, no time to browse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/toolkit/${topic.slug}`}
            className="block p-6 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 hover:border-amber-300 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{topic.icon as string}</span>
              <h2 className="font-serif text-xl text-warm-800 group-hover:text-sage-700 transition-colors">
                {topic.title}
              </h2>
            </div>
            {topic.description && (
              <p className="text-warm-600 text-sm">{topic.description as string}</p>
            )}
            <p className="text-amber-600 text-sm mt-3 font-sans">Read → Try This Right Now ⚡</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-warm-100 border border-warm-200 rounded-xl text-sm text-warm-600 font-sans">
        <strong>Note:</strong> Everything here is drawn from our personal experience and what worked for us.
        This is not medical advice. For medical concerns, contact your pediatrician or developmental specialist.
      </div>
    </div>
  );
}
