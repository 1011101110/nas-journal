import Link from "next/link";

const stages = [
  {
    id: "newborn",
    label: "Newborn",
    ageRange: "0–4 weeks",
    description: "The NICU, the Finnegan scores, the first terrifying days.",
    emoji: "👶",
    color: "border-sage-300 bg-sage-50 hover:bg-sage-100",
    headerColor: "text-sage-700",
  },
  {
    id: "infant",
    label: "Infant",
    ageRange: "1–12 months",
    description: "Sleep deprivation, sensory sensitivities, and learning who he is.",
    emoji: "🌱",
    color: "border-warm-300 bg-warm-50 hover:bg-warm-100",
    headerColor: "text-warm-700",
  },
  {
    id: "toddler-early",
    label: "Early Toddler",
    ageRange: "12–18 months",
    description: "Walking, meltdowns, speech delays, and finding our footing.",
    emoji: "🐣",
    color: "border-sage-300 bg-sage-50 hover:bg-sage-100",
    headerColor: "text-sage-700",
  },
  {
    id: "toddler-mid",
    label: "Mid Toddler",
    ageRange: "18–24 months",
    description: "PCIT, feeding therapy, transitions — the full toolkit takes shape.",
    emoji: "🌿",
    color: "border-warm-300 bg-warm-50 hover:bg-warm-100",
    headerColor: "text-warm-700",
  },
  {
    id: "toddler-late",
    label: "Late Toddler",
    ageRange: "24–30 months",
    description: "Preschool prep, advocacy, and daring to look forward.",
    emoji: "🌳",
    color: "border-sage-300 bg-sage-50 hover:bg-sage-100",
    headerColor: "text-sage-700",
  },
];

const toolkitTopics = [
  { slug: "screaming", label: "Screaming & Crying", emoji: "😭", desc: "The NAS cry is different. Here's what helps." },
  { slug: "sleep", label: "Sleep", emoji: "😴", desc: "Swaddling, white noise, routines that actually work." },
  { slug: "sensory-overload", label: "Sensory Overload", emoji: "🌊", desc: "Recognizing the signs and getting to calm." },
  { slug: "feeding", label: "Feeding Difficulties", emoji: "🍽️", desc: "From NICU bottles to toddler food textures." },
  { slug: "tantrums", label: "Tantrums & Meltdowns", emoji: "🌋", desc: "PCIT, choices, staying calm yourself." },
  { slug: "transitions", label: "Transitions", emoji: "🔄", desc: "Countdowns, visual schedules, what helps." },
  { slug: "overstimulation", label: "Overstimulation", emoji: "⚡", desc: "Catching it early before meltdown." },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-sage-800 mb-4 leading-tight">
          A Parent's Journal Through NAS
        </h1>
        <p className="text-lg text-warm-600 max-w-2xl mx-auto leading-relaxed">
          I wrote this while living it — the NICU nights, the meltdowns, the therapy appointments, the small victories.
          This is for the parent who just got the diagnosis and doesn't know what comes next.
        </p>
        <p className="text-warm-500 text-sm mt-4 italic">
          Anonymous. Not medical advice. Real.
        </p>
      </div>

      {/* "I Need Help Now" Toolkit Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🆘</span>
          <h2 className="font-serif text-2xl text-warm-800">I Need Help Right Now</h2>
        </div>
        <p className="text-warm-600 mb-6">
          If you're in a hard moment and need immediate guidance, start here. These are cross-cutting topics organized by symptom or behavior — no need to know your child's age.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolkitTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/toolkit/${topic.slug}`}
              className="block p-4 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{topic.emoji}</span>
                <h3 className="font-serif text-warm-800 font-semibold group-hover:text-sage-700 transition-colors">
                  {topic.label}
                </h3>
              </div>
              <p className="text-sm text-warm-600">{topic.desc}</p>
            </Link>
          ))}
          <Link
            href="/toolkit"
            className="block p-4 bg-amber-100 border border-amber-300 rounded-xl hover:bg-amber-200 transition-colors text-center"
          >
            <span className="font-serif text-amber-800 font-semibold">View Full Toolkit →</span>
          </Link>
        </div>
      </div>

      {/* Browse by Age */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📖</span>
          <h2 className="font-serif text-2xl text-warm-800">Browse by Age</h2>
        </div>
        <p className="text-warm-600 mb-6">
          The full journal, organized as a journey. Start at the beginning or jump to where you are now.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage) => (
            <Link
              key={stage.id}
              href={`/stages/${stage.id}`}
              className={`block p-5 border rounded-xl transition-colors ${stage.color} group`}
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl">{stage.emoji}</span>
                <h3 className={`font-serif text-lg font-semibold ${stage.headerColor} group-hover:underline`}>
                  {stage.label}
                </h3>
              </div>
              <p className="text-sm text-warm-500 mb-2">{stage.ageRange}</p>
              <p className="text-warm-700 text-sm">{stage.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Research teaser */}
      <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🔬</span>
          <h2 className="font-serif text-xl text-sage-800">Want to Understand the Science?</h2>
        </div>
        <p className="text-warm-600 mb-4">
          Deep dives into the research — written for parents, not academics. Nature vs. nurture, epigenetics,
          long-term outcomes, and what the studies actually say.
        </p>
        <Link
          href="/research"
          className="inline-block bg-sage-700 text-white px-5 py-2 rounded-lg hover:bg-sage-800 transition-colors text-sm font-sans"
        >
          Explore Research →
        </Link>
      </div>
    </div>
  );
}
