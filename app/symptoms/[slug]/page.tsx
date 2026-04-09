import { notFound } from "next/navigation";
import Link from "next/link";
import { getSymptom, getIntervention, markdownToHtml, SYMPTOM_SLUGS } from "@/lib/content";

export async function generateStaticParams() {
  return SYMPTOM_SLUGS.map((slug) => ({ slug }));
}

export default async function SymptomPage({ params }: { params: { slug: string } }) {
  const symptom = getSymptom(params.slug);
  if (!symptom) notFound();

  const html = await markdownToHtml(symptom.content);

  const relatedInterventions = (symptom.relatedInterventions || []).map((slug: string) =>
    getIntervention(slug)
  ).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <Link href="/symptoms" className="hover:text-sage-600">By Symptom</Link>
        {" → "}
        <span className="text-gray-700">{symptom.title}</span>
      </div>

      {/* Intervention chips */}
      {relatedInterventions.length > 0 && (
        <div className="bg-sage-50 border border-sage-200 rounded-xl p-4 mb-8">
          <p className="text-xs font-semibold text-sage-600 uppercase tracking-wide mb-2">
            Interventions that help here
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedInterventions.map((intervention) => intervention && (
              <Link
                key={intervention.slug}
                href={`/interventions/${intervention.slug}`}
                className="inline-flex items-center gap-1.5 bg-white border border-sage-300 text-sage-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-sage-100 transition-colors"
              >
                <span className="text-sage-400">↗</span>
                {intervention.title}
                <span className="text-gray-400 text-[10px] ml-0.5">({intervention.timeHorizon})</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <article
        className="prose prose-sage max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Related symptoms */}
      {symptom.relatedSymptoms?.length > 0 && (
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Related Symptoms
          </h3>
          <div className="flex flex-wrap gap-2">
            {symptom.relatedSymptoms.map((slug: string) => (
              <Link
                key={slug}
                href={`/symptoms/${slug}`}
                className="bg-amber-50 border border-amber-200 text-amber-700 text-sm px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors"
              >
                {slug.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
