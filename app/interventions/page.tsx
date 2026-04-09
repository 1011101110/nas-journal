import Link from "next/link";
import { getInterventions } from "@/lib/content";

const priorityBadge: Record<string, string> = {
  core: "bg-green-100 text-green-700",
  secondary: "bg-blue-100 text-blue-700",
};

const horizonLabel: Record<string, string> = {
  immediate: "⚡ Immediate",
  weeks: "🏗️ 3–8 weeks",
  months: "🔬 3–6 months",
};

export default function InterventionsPage() {
  const interventions = getInterventions();
  const core = interventions.filter((i) => i.priority === "core");
  const secondary = interventions.filter((i) => i.priority !== "core");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-gray-800 mb-3">The Intervention System</h1>
      <p className="text-gray-600 mb-10 text-lg">
        Cross-cutting strategies that address multiple symptoms simultaneously. These are not
        isolated tips — they&apos;re a system.
      </p>

      <h2 className="font-serif text-xl font-semibold text-gray-800 mb-4">Core Strategies</h2>
      <div className="space-y-4 mb-10">
        {core.map((intervention) => (
          <Link
            key={intervention.slug}
            href={`/interventions/${intervention.slug}`}
            className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-sage-400 hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-sage-700 transition-colors">
                    {intervention.title}
                  </h2>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityBadge["core"]}`}>
                    Core
                  </span>
                </div>
                {intervention.summary && (
                  <p className="text-gray-500 text-sm leading-snug">{intervention.summary}</p>
                )}
                {intervention.mechanism && (
                  <p className="text-gray-400 text-xs mt-1.5 italic">{intervention.mechanism}</p>
                )}
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-gray-400">
                  {horizonLabel[intervention.timeHorizon] || intervention.timeHorizon}
                </span>
              </div>
            </div>
            {intervention.crossCuts?.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {intervention.crossCuts.map((symptom: string) => (
                  <span key={symptom} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                    {symptom.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>

      {secondary.length > 0 && (
        <>
          <h2 className="font-serif text-xl font-semibold text-gray-800 mb-4">Secondary Strategies</h2>
          <div className="space-y-4">
            {secondary.map((intervention) => (
              <Link
                key={intervention.slug}
                href={`/interventions/${intervention.slug}`}
                className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-sage-400 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-sage-700 transition-colors">
                        {intervention.title}
                      </h2>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityBadge["secondary"]}`}>
                        Secondary
                      </span>
                    </div>
                    {intervention.summary && (
                      <p className="text-gray-500 text-sm leading-snug">{intervention.summary}</p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-gray-400">
                      {horizonLabel[intervention.timeHorizon] || intervention.timeHorizon}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
