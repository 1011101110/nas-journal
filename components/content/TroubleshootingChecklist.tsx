const checks = [
  ["Development", "Is the goal realistic for this age and stage?"],
  ["Body", "Could hunger, reflux, constipation, pain, allergies, illness, or sleep debt be interfering?"],
  ["Sensory", "Is the child seeking input, avoiding input, overloaded, or under-stimulated?"],
  ["Environment", "Are light, noise, temperature, transitions, or unpredictability working against the plan?"],
  ["Sequence", "Does another layer need support before this intervention can work?"],
  ["Caregiver capacity", "Is the plan possible to repeat consistently for the adults involved?"],
];

export default function TroubleshootingChecklist() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800">Troubleshooting frame</p>
      <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900">When the plan is not working, check the stack.</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {checks.map(([label, text]) => (
          <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900">{label}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
