import { getResearchTopics } from "@/lib/content";
import SectionHero from "@/components/content/SectionHero";
import SectionCard from "@/components/content/SectionCard";

export default function CliniciansResearchersPage() {
  const topics = getResearchTopics();
  return (
    <div>
      <SectionHero
        eyebrow="Clinicians & researchers"
        title="A bridge across silos: medical, sensory, developmental, nutritional, behavioral, and family systems."
        description="The lived reality of prenatal exposure is integrated. This section gathers mechanisms, uncertainty, research gaps, and care-model ideas for professionals and deeply curious parents."
      />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard href="/stack" eyebrow="Care model" title="Integrated regulation stack" description="A practical model for thinking across environment, therapy, movement, nutrition, sleep, and caregiver support." accent="blue" />
          {topics.map((topic) => (
            <SectionCard key={topic.slug} href={`/research/${topic.slug}`} eyebrow="Research" title={topic.title} description={topic.summary || "Mechanisms, evidence boundaries, and questions worth studying."} accent="sage" />
          ))}
        </div>
      </section>
    </div>
  );
}
