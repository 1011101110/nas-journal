import SectionHero from "@/components/content/SectionHero";
import SectionCard from "@/components/content/SectionCard";

export default function StartHerePage() {
  return (
    <div>
      <SectionHero
        eyebrow="Start here"
        title="A plain-language front door to prenatal exposure, regulation, and layered support."
        description="Start with the big picture: why children with prenatal opioid exposure may need more support than standard advice assumes, how to use the site, and where to go next."
      />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard href="/research/what-happened-to-the-brain" eyebrow="Understand" title="What may be happening underneath behavior" description="A parent-friendly bridge into stress physiology, development, and why regulation can be harder." />
          <SectionCard href="/stack" eyebrow="Build" title="Learn the regulation stack" description="See how environment, co-regulation, sleep, movement, nutrition, therapy, and medical care interact." accent="blue" />
          <SectionCard href="/challenges" eyebrow="Solve" title="Find help by challenge" description="Sleep, sensory needs, feeding/GI, meltdowns, transitions, daycare, school, and therapy issues." accent="amber" />
          <SectionCard href="/troubleshooting" eyebrow="Adjust" title="What to do when it is not working" description="A framework for troubleshooting failed interventions without blaming the child or parent." accent="rose" />
        </div>
      </section>
    </div>
  );
}
