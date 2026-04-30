import { notFound } from "next/navigation";
import Link from "next/link";
import { getSymptom, getIntervention, markdownToHtml, SYMPTOM_SLUGS } from "@/lib/content";
import AgeLens from "@/components/content/AgeLens";
import AudienceNote from "@/components/content/AudienceNote";
import StackLayerGrid from "@/components/content/StackLayerGrid";
import TroubleshootingChecklist from "@/components/content/TroubleshootingChecklist";

export async function generateStaticParams() {
  return SYMPTOM_SLUGS.map((slug) => ({ slug }));
}

export default async function SymptomPage({ params }: { params: { slug: string } }) {
  const symptom = getSymptom(params.slug);
  if (!symptom) notFound();

  const html = await markdownToHtml(symptom.content);
  const isSleepPrototype = params.slug === "sleep";

  const relatedInterventions = (symptom.relatedInterventions || []).map((slug: string) =>
    getIntervention(slug)
  ).filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <Link href="/challenges" className="hover:text-sage-600">By Challenge</Link>
        {" → "}
        <span className="text-gray-700">{symptom.title}</span>
      </div>

      {isSleepPrototype ? (
        <div className="mb-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800">Flagship prototype</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-gray-900">Sleep & early waking</h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-700">
            This page demonstrates the redesign pattern: parent-first summary, age lens, troubleshooting,
            stack interactions, and clinician/research notes.
          </p>
        </div>
      ) : (
        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">Challenge</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-gray-900">{symptom.title}</h1>
          {symptom.summary && <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">{symptom.summary}</p>}
        </header>
      )}

      {isSleepPrototype && <div className="mb-8"><AgeLens /></div>}

      {relatedInterventions.length > 0 && (
        <div className="mb-8 rounded-xl border border-sage-200 bg-sage-50 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sage-600">
            Stack layers and interventions connected here
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedInterventions.map((intervention) => intervention && (
              <Link
                key={intervention.slug}
                href={`/interventions/${intervention.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-sage-300 bg-white px-3 py-1.5 text-xs font-medium text-sage-700 transition-colors hover:bg-sage-100"
              >
                <span className="text-sage-400">↗</span>
                {intervention.title}
                <span className="ml-0.5 text-[10px] text-gray-400">({intervention.timeHorizon})</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isSleepPrototype && (
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <AudienceNote audience="Parent" title="What this page is trying to do">
            Make sleep less mysterious and less blame-heavy by showing what else may be blocking the plan.
          </AudienceNote>
          <AudienceNote audience="Clinician" title="Clinical use">
            Treat persistent sleep failure as a cross-domain regulation problem, not only a compliance issue.
          </AudienceNote>
          <AudienceNote audience="Researcher" title="Research use">
            Sleep shows why stacked interventions may explain outcomes better than single-variable advice.
          </AudienceNote>
        </div>
      )}

      <article className="prose prose-sage max-w-none" dangerouslySetInnerHTML={{ __html: html }} />

      {isSleepPrototype && (
        <div className="mt-10 space-y-8">
          <TroubleshootingChecklist />
          <StackLayerGrid />
        </div>
      )}

      {symptom.relatedSymptoms?.length > 0 && (
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-600">
            Related Challenges
          </h3>
          <div className="flex flex-wrap gap-2">
            {symptom.relatedSymptoms.map((slug: string) => (
              <Link
                key={slug}
                href={`/symptoms/${slug}`}
                className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm text-amber-700 transition-colors hover:bg-amber-100"
              >
                {slug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
