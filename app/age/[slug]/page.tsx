import { notFound } from "next/navigation";
import Link from "next/link";
import { getAgeStage, getAgeStages, markdownToHtml, AGE_STAGE_IDS } from "@/lib/content";

export async function generateStaticParams() {
  return AGE_STAGE_IDS.map((slug) => ({ slug }));
}

export default async function AgeStage({ params }: { params: { slug: string } }) {
  const stage = getAgeStage(params.slug);
  if (!stage) notFound();

  const html = await markdownToHtml(stage.content);
  const allStages = getAgeStages();
  const currentIdx = allStages.findIndex((s) => s.slug === params.slug);
  const prev = currentIdx > 0 ? allStages[currentIdx - 1] : null;
  const next = currentIdx < allStages.length - 1 ? allStages[currentIdx + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <Link href="/age" className="hover:text-sage-600">By Age</Link>
        {" → "}
        <span className="text-gray-700">{stage.title}</span>
      </div>

      {/* Age badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="inline-block bg-sage-100 text-sage-700 text-xs font-semibold px-3 py-1 rounded-full">
          {stage.ageRange}
        </div>
        {Boolean(stage.current) && (
          <div className="inline-flex items-center gap-1.5 bg-sage-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <span>📍</span>
            <span>We Are Here</span>
          </div>
        )}
      </div>

      {/* Stage nav */}
      <div className="flex gap-2 flex-wrap mb-8">
        {allStages.map((s) => (
          <Link
            key={s.slug}
            href={`/age/${s.slug}`}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 ${
              s.slug === params.slug
                ? "bg-sage-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-sage-100 hover:text-sage-700"
            }`}
          >
            {s.title}
            {Boolean(s.current) && <span title="Current stage">📍</span>}
          </Link>
        ))}
      </div>

      {/* Content */}
      <article
        className="prose prose-sage max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Prev/Next */}
      <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
        {prev ? (
          <Link
            href={`/age/${prev.slug}`}
            className="text-sage-600 hover:text-sage-800 text-sm font-medium"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/age/${next.slug}`}
            className="text-sage-600 hover:text-sage-800 text-sm font-medium"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
