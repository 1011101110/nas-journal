import Link from "next/link";
import { notFound } from "next/navigation";
import { getStages, getTopicsByStage } from "@/lib/content";

interface Props {
  params: { stageId: string };
}

export async function generateStaticParams() {
  const stages = getStages();
  return stages.map((s) => ({ stageId: s.id }));
}

export default function StagePage({ params }: Props) {
  const stages = getStages();
  const stage = stages.find((s) => s.id === params.stageId);
  if (!stage) notFound();

  const topics = getTopicsByStage(params.stageId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sage-600 hover:underline text-sm font-sans">
          ← Back to Journal
        </Link>
      </div>

      <div className="mb-10">
        <h1 className="font-serif text-4xl text-sage-800 mb-2">{stage.label}</h1>
        <p className="text-warm-500 font-sans">{stage.ageRange}</p>
      </div>

      {topics.length === 0 ? (
        <p className="text-warm-500 italic">No entries yet for this stage.</p>
      ) : (
        <div className="space-y-4">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/stages/${params.stageId}/${topic.slug}`}
              className="block p-6 bg-white border border-warm-200 rounded-xl hover:border-sage-300 hover:shadow-sm transition-all group"
            >
              <h2 className="font-serif text-xl text-sage-800 group-hover:text-sage-600 transition-colors mb-1">
                {topic.title}
              </h2>
              {topic.description && (
                <p className="text-warm-600 text-sm">{topic.description as string}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
