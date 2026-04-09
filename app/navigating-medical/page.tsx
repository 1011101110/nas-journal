import Link from "next/link";
import { getNavigatingMedical, markdownToHtml } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Navigating the Medical System | A Parent's Journal: Prenatal Opioid Exposure",
  description: "What you need to know about scrutiny, advocacy, early intervention, and Medicaid navigation when your child has prenatal opioid exposure.",
};

export default async function NavigatingMedicalPage() {
  const page = getNavigatingMedical();
  if (!page) notFound();

  const html = await markdownToHtml(page.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <span className="text-gray-700">Medical System</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-3">Navigating the Medical System</h1>
        <p className="text-gray-500 text-base">
          Advocacy, scrutiny, early intervention, and Medicaid navigation for parents of children with prenatal opioid exposure.
        </p>
      </div>

      {/* Quick nav */}
      <div className="bg-warm-50 border border-warm-200 rounded-xl p-4 mb-10">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">On This Page</div>
        <div className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
          {[
            { href: "#the-scrutiny-dynamic", label: "The Scrutiny Dynamic" },
            { href: "#social-capital-in-medical-advocacy", label: "Social Capital in Advocacy" },
            { href: "#advocating-for-early-intervention", label: "Advocating for Early Intervention" },
            { href: "#what-to-raise-at-every-appointment", label: "What to Raise at Appointments" },
            { href: "#medicaid-and-insurance-navigation", label: "Medicaid & Insurance" },
            { href: "#finding-poe-aware-providers", label: "Finding POE-Aware Providers" },
            { href: "#language-that-helps", label: "Language That Helps" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-sage-600 hover:text-sage-800 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
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
            { href: "/timeline", label: "Our Journey", desc: "Real chronological account from NICU to now" },
            { href: "/research/xylazine-polysubstance", label: "Xylazine & Polysubstance", desc: "The research gap parents need to know about" },
            { href: "/interventions", label: "Intervention System", desc: "What to implement and why" },
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
