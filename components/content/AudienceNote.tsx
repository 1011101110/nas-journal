interface AudienceNoteProps {
  audience: "Parent" | "Clinician" | "Researcher";
  title: string;
  children: React.ReactNode;
}

const styles = {
  Parent: "border-sage-200 bg-sage-50 text-sage-800",
  Clinician: "border-blue-200 bg-blue-50 text-blue-800",
  Researcher: "border-amber-200 bg-amber-50 text-amber-800",
};

export default function AudienceNote({ audience, title, children }: AudienceNoteProps) {
  return (
    <aside className={`rounded-2xl border p-5 ${styles[audience]}`}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-75">{audience} lens</p>
      <h3 className="mt-2 font-serif text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-gray-700">{children}</div>
    </aside>
  );
}
