import Link from "next/link";
import { getAgeStages, getSymptoms, getInterventions } from "@/lib/content";

const symptomIcons: Record<string, string> = {
  screaming: "🔊",
  sleep: "😴",
  transitions: "🔄",
  tantrums: "⚡",
  "sensory-overload": "🌊",
  feeding: "🍽️",
  overstimulation: "📡",
};

export default function Home() {
  const stages = getAgeStages();
  const symptoms = getSymptoms();
  const interventions = getInterventions().filter((i) => i.priority === "core");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-warm-50 border-b border-warm-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-5 leading-tight">
            A Parent&apos;s Journal: Prenatal Opioid Exposure
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl leading-relaxed">
            A practical resource for parents and caregivers of children with prenatal opioid exposure (POE).
          </p>
          <p className="text-base text-gray-500 max-w-2xl">
            Every behavioral challenge in children with prenatal opioid exposure traces back to a dysregulated stress response
            system — a nervous system wired differently from birth. This site explains the
            mechanisms and what to do about them.
          </p>
        </div>
      </section>

      {/* Dual entry */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Age journey entry */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📅</span>
              <h2 className="font-serif text-2xl font-bold text-gray-800">The Journey by Age</h2>
            </div>
            <p className="text-gray-500 text-sm mb-5">
              What to expect at each stage and what to prioritize. Start here if you want context.
            </p>
            <div className="space-y-2">
              {stages.map((stage) => (
                <Link
                  key={stage.slug}
                  href={`/age/${stage.slug}`}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-sage-400 hover:shadow-sm transition-all group"
                >
                  <div>
                    <span className="font-medium text-gray-800 group-hover:text-sage-700 text-sm transition-colors">
                      {stage.title}
                    </span>
                    <span className="text-gray-400 text-xs ml-2">{stage.ageRange}</span>
                  </div>
                  <span className="text-sage-400 text-sm">→</span>
                </Link>
              ))}
            </div>
            <Link
              href="/age"
              className="inline-block mt-4 text-sage-600 hover:text-sage-800 text-sm font-medium"
            >
              All age stages →
            </Link>
          </div>

          {/* Symptom toolkit entry */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <h2 className="font-serif text-2xl font-bold text-gray-800">By Symptom</h2>
            </div>
            <p className="text-gray-500 text-sm mb-5">
              Fast access to what&apos;s happening right now. What to do, why it&apos;s happening,
              what to build long-term.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {symptoms.map((symptom) => (
                <Link
                  key={symptom.slug}
                  href={`/symptoms/${symptom.slug}`}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-3 hover:border-amber-400 hover:shadow-sm transition-all group"
                >
                  <span className="text-lg">{symptomIcons[symptom.slug] || "•"}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700 transition-colors leading-tight">
                    {symptom.title}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/symptoms"
              className="inline-block mt-4 text-amber-600 hover:text-amber-800 text-sm font-medium"
            >
              All symptoms →
            </Link>
          </div>
        </div>
      </section>

      {/* Intervention system teaser */}
      <section className="bg-sage-50 border-t border-b border-sage-200 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2">The System</h2>
            <p className="text-gray-600 text-sm max-w-2xl">
              These interventions cut across multiple symptoms simultaneously. They&apos;re not
              isolated tips — they&apos;re a coordinated approach to the underlying dysregulation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {interventions.map((intervention) => (
              <Link
                key={intervention.slug}
                href={`/interventions/${intervention.slug}`}
                className="bg-white border border-sage-200 rounded-xl p-4 hover:border-sage-400 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm group-hover:text-sage-700 transition-colors">
                      {intervention.title}
                    </h3>
                    {intervention.summary && (
                      <p className="text-gray-500 text-xs mt-1 leading-snug">
                        {intervention.summary}
                      </p>
                    )}
                  </div>
                  <span className="text-sage-400 text-sm shrink-0">→</span>
                </div>
                {intervention.crossCuts?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {intervention.crossCuts.slice(0, 3).map((s: string) => (
                      <span key={s} className="text-[10px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded-full">
                        {s.replace(/-/g, ' ')}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/interventions"
            className="inline-block bg-sage-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-sage-800 transition-colors"
          >
            See all interventions →
          </Link>
        </div>
      </section>

      {/* Bottom nav strip */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/not-pursuing"
            className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all group text-center"
          >
            <div className="text-2xl mb-1">🚫</div>
            <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Not Pursuing</div>
            <div className="text-xs text-gray-400 mt-0.5">Honest deprioritization</div>
          </Link>
          <Link
            href="/research"
            className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all group text-center"
          >
            <div className="text-2xl mb-1">🔬</div>
            <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Research</div>
            <div className="text-xs text-gray-400 mt-0.5">The science</div>
          </Link>
          <Link
            href="/about"
            className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all group text-center"
          >
            <div className="text-2xl mb-1">👤</div>
            <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">About</div>
            <div className="text-xs text-gray-400 mt-0.5">Who built this</div>
          </Link>
          <Link
            href="/interventions"
            className="bg-sage-700 text-white rounded-xl p-4 hover:bg-sage-800 transition-all group text-center"
          >
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-sm font-semibold">Interventions</div>
            <div className="text-xs text-sage-200 mt-0.5">Start here</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
