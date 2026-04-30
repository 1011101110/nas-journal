import SectionHero from "@/components/content/SectionHero";
import SectionCard from "@/components/content/SectionCard";

export default function TroubleshootingPage() {
  return (
    <div>
      <SectionHero
        eyebrow="When it’s not working"
        title="If the right advice is falling apart, the failure is information."
        description="Prenatal exposure can make ordinary interventions less predictable. This section helps families and professionals troubleshoot the child’s developmental stage, body, sensory profile, environment, sequence, and caregiver capacity."
      />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard href="/symptoms/sleep" eyebrow="Prototype" title="When the sleep plan is failing" description="Early waking, settling, self-soothing, sensory input, GI discomfort, schedule, and co-regulation checks." accent="rose" />
          <SectionCard href="/symptoms/sensory-overload" eyebrow="Sensory" title="When sensory strategies backfire" description="Check whether the child is seeking, avoiding, overloaded, understimulated, or mismatched to the strategy." accent="amber" />
          <SectionCard href="/symptoms/tantrums" eyebrow="Behavior" title="When behavior plans make things worse" description="Behavior strategies may fail when the child is too dysregulated to access them." accent="rose" />
          <SectionCard href="/interventions/pcit" eyebrow="Therapy" title="When therapy does not translate home" description="Look at generalization, home environment, sleep debt, caregiver capacity, and sequence." accent="blue" />
        </div>
      </section>
    </div>
  );
}
