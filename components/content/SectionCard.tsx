import Link from "next/link";

interface SectionCardProps {
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
  accent?: "sage" | "amber" | "blue" | "rose";
}

const accentClasses = {
  sage: "hover:border-sage-400 text-sage-700 bg-sage-50",
  amber: "hover:border-amber-400 text-amber-700 bg-amber-50",
  blue: "hover:border-blue-400 text-blue-700 bg-blue-50",
  rose: "hover:border-rose-400 text-rose-700 bg-rose-50",
};

export default function SectionCard({ href, eyebrow, title, description, accent = "sage" }: SectionCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md group"
    >
      {eyebrow && (
        <div className={`mb-3 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${accentClasses[accent]}`}>
          {eyebrow}
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-sage-800">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
        <span className="text-sage-400 transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
