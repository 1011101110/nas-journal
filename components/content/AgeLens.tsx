const ages = [
  { id: "0-6-months", label: "0–6 months" },
  { id: "6-12-months", label: "6–12 months" },
  { id: "1-3-years", label: "1–3 years" },
  { id: "3-5-years", label: "3–5 years" },
  { id: "school-age", label: "School age" },
];

export default function AgeLens() {
  return (
    <nav aria-label="Age-specific guidance" className="rounded-2xl border border-warm-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sage-700">Choose an age lens</p>
      <div className="flex flex-wrap gap-2">
        {ages.map((age) => (
          <a key={age.id} href={`#${age.id}`} className="rounded-full border border-sage-200 bg-sage-50 px-3 py-1.5 text-sm font-medium text-sage-800 hover:bg-sage-100">
            {age.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
