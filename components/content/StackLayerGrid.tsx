const layers = [
  ["Environment", "Light, sound, routine, transitions", "The base: reduce avoidable overload before asking for new skills."],
  ["Co-regulation", "Safety cues, repair, calm adult support", "The bridge: the adult nervous system becomes part of the intervention."],
  ["Sleep", "Timing, settling, waking, sleep debt", "The amplifier: tired brains have less access to everything else."],
  ["Movement", "Heavy work, outdoor play, sensory input", "The release valve: bodies often need regulation before words work."],
  ["Nutrition / GI", "Hunger, reflux, constipation, blood sugar", "The body layer: physiology can masquerade as behavior."],
  ["Therapy", "OT, PCIT, feeding/speech, school support", "The precision layer: targeted help works best when the lower layers hold."],
];

const widths = ["w-full", "w-full sm:w-[92%]", "w-full sm:w-[84%]", "w-full sm:w-[76%]", "w-full sm:w-[68%]", "w-full sm:w-[60%]"];

export default function StackLayerGrid() {
  return (
    <section className="rounded-3xl border border-sage-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-700">What to stack around it</p>
          <h3 className="mt-2 font-serif text-2xl font-bold text-gray-900">Think building blocks, not isolated fixes.</h3>
          <p className="mt-3 leading-relaxed text-gray-600">
            The goal is not to find one perfect intervention. It is to create enough support underneath the child that the next intervention has a fair chance to work.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sage-800">
            Start low in the stack when everything is falling apart. Move upward as the child has more capacity.
          </p>
        </div>

        <div className="flex flex-col-reverse items-center gap-2" aria-label="Layered regulation stack diagram">
          {layers.map(([title, detail, note], index) => (
            <div
              key={title}
              className={`${widths[index]} rounded-2xl border border-sage-200 bg-gradient-to-r from-sage-50 to-warm-50 p-4 shadow-sm`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-semibold text-sage-950">{title}</h4>
                <p className="text-sm text-sage-700">{detail}</p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
