import Link from "next/link";
import { getAgeStages } from "@/lib/content";

export default function AgePage() {
  const stages = getAgeStages();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-gray-800 mb-3">The Journey by Age</h1>
      <p className="text-gray-600 mb-10 text-lg">
        What to expect at each stage — and what to prioritize.
      </p>

      <div className="space-y-4">
        {stages.map((stage) => (
          <Link
            key={stage.slug}
            href={`/age/${stage.slug}`}
            className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-sage-400 hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-serif text-xl font-semibold text-gray-800 group-hover:text-sage-700 transition-colors">
                  {stage.title}
                </h2>
                <p className="text-sm text-sage-600 font-medium mt-0.5">{stage.ageRange}</p>
                {stage.summary && (
                  <p className="text-gray-600 mt-2 text-sm">{stage.summary}</p>
                )}
              </div>
              <span className="text-sage-400 text-xl ml-4">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
