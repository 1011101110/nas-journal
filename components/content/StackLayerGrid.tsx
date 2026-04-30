const layers = [
  ["Environment", "light, sound, routine, transitions"],
  ["Co-regulation", "safety cues, repair, calm adult support"],
  ["Sleep", "timing, settling, waking, sleep debt"],
  ["Movement", "heavy work, outdoor play, sensory input"],
  ["Nutrition/GI", "hunger, reflux, constipation, blood sugar"],
  ["Therapy", "OT, PCIT, feeding/speech, school support"],
];

export default function StackLayerGrid() {
  return (
    <section className="rounded-3xl border border-sage-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-700">What to stack around it</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {layers.map(([title, detail]) => (
          <div key={title} className="rounded-2xl border border-sage-100 bg-sage-50 p-4">
            <h3 className="font-semibold text-sage-900">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
