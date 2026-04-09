import { notFound } from "next/navigation";
import Link from "next/link";
import { getIntervention, getSymptom, markdownToHtml, INTERVENTION_SLUGS } from "@/lib/content";

export async function generateStaticParams() {
  return INTERVENTION_SLUGS.map((slug) => ({ slug }));
}

const horizonLabel: Record<string, string> = {
  immediate: "⚡ Immediate",
  weeks: "🏗️ 3–8 weeks",
  months: "🔬 3–6 months",
};

const priorityLabel: Record<string, string> = {
  core: "Core strategy",
  secondary: "Secondary",
};

export default async function InterventionPage({ params }: { params: { slug: string } }) {
  const intervention = getIntervention(params.slug);
  if (!intervention) notFound();

  const html = await markdownToHtml(intervention.content);

  const crossCutsData = (intervention.crossCuts || []).map((slug: string) =>
    getSymptom(slug)
  ).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <Link href="/interventions" className="hover:text-sage-600">Interventions</Link>
        {" → "}
        <span className="text-gray-700">{intervention.title}</span>
      </div>

      {/* Meta bar */}
      <div className="bg-sage-50 border border-sage-200 rounded-xl p-4 mb-8">
        <div className="flex flex-wrap gap-4 text-sm">
          <div>
            <span className="text-xs font-semibold text-sage-500 uppercase tracking-wide block mb-0.5">Time Horizon</span>
            <span className="text-gray-700 font-medium">
              {horizonLabel[intervention.timeHorizon] || intervention.timeHorizon}
            </span>
          </div>
          <div>
            <span className="text-xs font-semibold text-sage-500 uppercase tracking-wide block mb-0.5">Priority</span>
            <span className="text-gray-700 font-medium">
              {priorityLabel[intervention.priority] || intervention.priority}
            </span>
          </div>
        </div>

        {/* Symptoms it addresses */}
        {crossCutsData.length > 0 && (
          <div className="mt-4 pt-4 border-t border-sage-200">
            <p className="text-xs font-semibold text-sage-500 uppercase tracking-wide mb-2">
              Addresses these symptoms
            </p>
            <div className="flex flex-wrap gap-2">
              {crossCutsData.map((symptom) => symptom && (
                <Link
                  key={symptom.slug}
                  href={`/symptoms/${symptom.slug}`}
                  className="bg-white border border-amber-200 text-amber-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50 transition-colors"
                >
                  {symptom.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <article
        className="prose prose-sage max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Back to interventions */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <Link href="/interventions" className="text-sage-600 hover:text-sage-800 text-sm font-medium">
          ← All Interventions
        </Link>
      </div>
    </div>
  );
}
