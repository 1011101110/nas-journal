import Link from "next/link";
import { getSymptoms } from "@/lib/content";

export default function SymptomsPage() {
  const symptoms = getSymptoms();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-gray-800 mb-3">By Symptom</h1>
      <p className="text-gray-600 mb-2 text-lg">
        Fast access to what&apos;s happening right now.
      </p>
      <p className="text-sm text-gray-500 mb-10">
        Each page: why it happens in NAS kids → what to do right now → what to build long-term.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {symptoms.map((symptom) => (
          <Link
            key={symptom.slug}
            href={`/symptoms/${symptom.slug}`}
            className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-amber-400 hover:shadow-sm transition-all group"
          >
            <h2 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
              {symptom.title}
            </h2>
            {symptom.summary && (
              <p className="text-gray-500 text-sm mt-1.5 leading-snug">{symptom.summary}</p>
            )}
            {symptom.relatedInterventions?.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {symptom.relatedInterventions.slice(0, 3).map((i) => (
                  <span
                    key={i}
                    className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full"
                  >
                    {i}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
