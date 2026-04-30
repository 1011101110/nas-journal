interface EvidenceBadgeProps {
  level: "Stronger evidence" | "Emerging evidence" | "Plausible mechanism" | "Research gap" | "Use with clinician";
}

const classes = {
  "Stronger evidence": "bg-green-100 text-green-800",
  "Emerging evidence": "bg-blue-100 text-blue-800",
  "Plausible mechanism": "bg-sage-100 text-sage-800",
  "Research gap": "bg-amber-100 text-amber-800",
  "Use with clinician": "bg-rose-100 text-rose-800",
};

export default function EvidenceBadge({ level }: EvidenceBadgeProps) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${classes[level]}`}>{level}</span>;
}
