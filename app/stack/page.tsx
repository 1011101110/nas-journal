import SectionHero from "@/components/content/SectionHero";
import SectionCard from "@/components/content/SectionCard";

const layers = [
  ["/interventions/routines-predictability", "Environment", "Predictability, sensory load, transitions, routines, and spaces that reduce unnecessary stress."],
  ["/interventions/co-regulation", "Co-regulation", "The caregiver relationship as infrastructure for safety, repair, and nervous-system support."],
  ["/symptoms/sleep", "Sleep", "A multiplier for regulation and caregiver capacity — but often one of the hardest layers to stabilize."],
  ["/symptoms/sensory-overload", "Movement & sensory input", "Heavy work, proprioception, vestibular input, outdoor play, rhythm, and exercise as regulation."],
  ["/symptoms/feeding", "Nutrition & physiology", "GI comfort, blood sugar stability, feeding, micronutrients, and body-level barriers."],
  ["/interventions/pcit", "Therapy & skill-building", "How therapy fits into the home stack instead of existing as a silo."],
];

export default function StackPage() {
  return (
    <div>
      <SectionHero
        eyebrow="Build the stack"
        title="Progress often comes from layered support, not one perfect intervention."
        description="The regulation stack explains how environment, co-regulation, sleep, movement, nutrition, therapy, and medical care can support — or undermine — each other."
      />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8 rounded-3xl border border-sage-200 bg-white p-6 shadow-sm">
          <p className="text-lg font-semibold text-gray-800">Core question</p>
          <p className="mt-2 text-gray-600 leading-relaxed">For prenatal exposure, the question is often not “which intervention works?” but “what conditions does this child need before the intervention can work?”</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {layers.map(([href, title, description]) => (
            <SectionCard key={href} href={href} eyebrow="Stack layer" title={title} description={description} accent="blue" />
          ))}
        </div>
      </section>
    </div>
  );
}
