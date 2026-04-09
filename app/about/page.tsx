import Link from "next/link";
import { getAbout, markdownToHtml } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function AboutPage() {
  const page = getAbout();
  if (!page) notFound();

  const html = await markdownToHtml(page.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        {" → "}
        <span className="text-gray-700">About</span>
      </div>

      <article
        className="prose prose-sage max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
