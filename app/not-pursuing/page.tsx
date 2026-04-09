import Link from "next/link";
import { getNotPursuing, markdownToHtml } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function NotPursuingPage() {
  const page = getNotPursuing();
  if (!page) notFound();

  const html = await markdownToHtml(page.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <span className="text-gray-700">Not Pursuing</span>
      </div>

      {/* Context note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
        <strong>The frame:</strong> Given finite time, energy, and money, the question is always
        whether the evidence justifies the effort. These don&apos;t — right now.
      </div>

      {/* Content */}
      <article
        className="prose prose-sage max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* CTA to active interventions */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">What we are pursuing:</p>
        <Link
          href="/interventions"
          className="inline-block bg-sage-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-sage-800 transition-colors"
        >
          The Intervention System →
        </Link>
      </div>
    </div>
  );
}
