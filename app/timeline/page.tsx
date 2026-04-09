import Link from "next/link";
import { getTimeline, markdownToHtml } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Our Journey | A Parent's Journal: Prenatal Opioid Exposure",
  description: "A chronological account of what happened and what was learned at each stage — NICU through 2.5 years.",
};

export default async function TimelinePage() {
  const page = getTimeline();
  if (!page) notFound();

  const html = await markdownToHtml(page.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <span className="text-gray-700">Our Journey</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-3">Our Journey</h1>
        <p className="text-gray-500 text-base">
          A chronological account — not a story, but a factual record of what happened and what was learned at each stage.
          The child is currently 2.5 years old.
        </p>
      </div>

      {/* We Are Here banner */}
      <div className="bg-sage-50 border border-sage-300 rounded-xl px-5 py-4 mb-10 flex items-center gap-3">
        <span className="text-2xl">📍</span>
        <div>
          <div className="font-semibold text-sage-800 text-sm">We Are Here</div>
          <div className="text-sage-600 text-xs mt-0.5">Current stage: Older Toddler (2.5 years)</div>
        </div>
      </div>

      {/* Timeline stages quick nav */}
      <div className="flex flex-wrap gap-2 mb-10">
        {[
          { label: "NICU", href: "#nicu" },
          { label: "8wk–3mo", href: "#home" },
          { label: "3–6 months", href: "#early-intervention" },
          { label: "6–12 months", href: "#infant" },
          { label: "12–18 months", href: "#early-toddler" },
          { label: "📍 2.5 years", href: "#we-are-here", current: true },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              s.current
                ? "bg-sage-700 text-white border-sage-700 font-semibold"
                : "bg-white text-gray-600 border-gray-200 hover:border-sage-400 hover:text-sage-700"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>

      <article
        className="prose prose-sage max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Related links */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="font-serif text-lg font-semibold text-gray-800 mb-4">Related</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: "/navigating-medical", label: "Medical System Guide", desc: "Advocacy, scrutiny, and early intervention" },
            { href: "/research/xylazine-polysubstance", label: "Xylazine & Polysubstance Exposure", desc: "The research gap on Philadelphia's drug supply" },
            { href: "/interventions/theraplay", label: "Theraplay", desc: "Attachment-focused therapy just beginning" },
            { href: "/interventions/child-directed-therapy", label: "Child-Directed Therapy", desc: "Building internal locus of control" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sage-400 hover:shadow-sm transition-all group"
            >
              <div className="font-medium text-gray-800 text-sm group-hover:text-sage-700 transition-colors">
                {link.label}
              </div>
              <div className="text-gray-500 text-xs mt-1">{link.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
