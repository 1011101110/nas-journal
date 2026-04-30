import { getSymptoms } from "@/lib/content";
import SectionHero from "@/components/content/SectionHero";
import SectionCard from "@/components/content/SectionCard";

const challengeCopy: Record<string, string> = {
  sleep: "Sleep, early waking, settling, night waking, and why sleep advice may need stacking around it.",
  feeding: "Feeding, GI discomfort, nutrition patterns, and body-level barriers to regulation.",
  overstimulation: "When ordinary environments become too much, and how to reduce load without oversimplifying sensory needs.",
  "sensory-overload": "Sensory overload, shutdowns, seeking/avoidance patterns, and matching support to the child.",
  screaming: "Screaming as a dysregulation signal, not just a behavior to stop.",
  tantrums: "Meltdowns, tantrums, repair, and what to do before behavior strategies can work.",
  transitions: "Why transitions can be hard and how predictability, pacing, and environment can help.",
};

export default function ChallengesPage() {
  const symptoms = getSymptoms();
  return (
    <div>
      <SectionHero
        eyebrow="By challenge"
        title="Start with the problem you are seeing today."
        description="Challenge pages are practical entry points. Each one should eventually include what it looks like, how it changes by age, what to try first, what to stack around it, and what to do when the first plan fails."
      />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {symptoms.map((symptom) => (
            <SectionCard
              key={symptom.slug}
              href={`/symptoms/${symptom.slug}`}
              eyebrow="Challenge"
              title={symptom.title}
              description={challengeCopy[symptom.slug] || symptom.summary || "Practical guidance with regulation, age, stack, and troubleshooting context."}
              accent="amber"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
