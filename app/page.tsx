import Link from "next/link";
import SectionCard from "@/components/content/SectionCard";
import StackLayerGrid from "@/components/content/StackLayerGrid";
import TroubleshootingChecklist from "@/components/content/TroubleshootingChecklist";
import SearchPrompt from "@/components/content/SearchPrompt";
import { ageNavigation, challengeNavigation } from "@/lib/site-ia";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-warm-200 bg-gradient-to-b from-warm-50 to-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sage-700">
              Prenatal Opioid Exposure (POE) support · Parent-built · research-informed · clinically useful
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Prenatal opioid exposure is complex. Support has to be layered.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              A practical guide for families, clinicians, and researchers navigating Prenatal Opioid Exposure (POE) — focused on stacking environment,
              therapy, movement, sleep, nutrition, and caregiver support, then troubleshooting what to do when
              standard interventions do not work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/start-here" className="rounded-xl bg-sage-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sage-800">
                Start here
              </Link>
              <Link href="/challenges" className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-800 hover:bg-amber-100">
                Find help by challenge
              </Link>
              <Link href="/troubleshooting" className="rounded-xl border border-rose-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:border-rose-300 hover:bg-rose-50">
                When it’s not working
              </Link>
            </div>
            <SearchPrompt />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-sage-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage-700">Why I built this</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900">I’m writing from inside this, not from a distance.</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-gray-600">
                <p>
                  I’m the foster and adoptive father of a 2.5-year-old son with prenatal exposure. This site is my journal of what I’ve learned while trying to understand what happened, what helped, what failed, and what standard advice missed.
                </p>
                <p>
                  Things are not perfect. Far from it. We struggle every single day, and this is the hardest thing I’ve ever done in my life. I’m sharing this because other parents, clinicians, and researchers need more practical bridges between lived experience and the science.
                </p>
              </div>
              <Link href="/about" className="mt-5 inline-flex rounded-xl bg-sage-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-800">
                Read the fuller story →
              </Link>
            </div>
            <div className="rounded-2xl bg-sage-50 p-5 text-sm leading-relaxed text-sage-900">
              <p className="font-semibold">How I approached the work</p>
              <p className="mt-2">
                In my day job, I’m a senior tech worker at Google. I’ve approached my son’s care the same way I approach complex systems at work: gather evidence, identify failure points, test carefully, track what changes, and stay honest about uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">The core problem</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900">Sometimes the right advice still falls apart.</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Sleep routines, behavior plans, sensory strategies, nutrition changes, and therapy can all be valid — and
            still fail if the child’s body, developmental stage, environment, sensory needs, or caregiver capacity are
            overloaded. This site treats intervention failure as information, not blame.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <SectionCard href="/troubleshooting" eyebrow="1 · Troubleshoot" title="What to do when it’s not working" description="Check development, body signals, sensory profile, environment, sequence, and caregiver capacity." accent="rose" />
          <SectionCard href="/stack" eyebrow="2 · Stack" title="Build conditions for change" description="See how different supports interact instead of treating each intervention as a silo." accent="blue" />
          <SectionCard href="/clinicians-researchers" eyebrow="3 · Bridge" title="Connect parents, clinicians, and researchers" description="Bring home observations, mechanisms, evidence boundaries, and research gaps into one framework." />
        </div>
      </section>

      <section className="border-y border-sage-200 bg-sage-50 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage-700">The regulation stack</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900">One layer changes how the others work.</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              OT may work better when sleep improves. Sleep may improve when sensory needs are met. Behavior strategies
              may only become accessible after the child’s nervous system is less overloaded.
            </p>
          </div>
          <StackLayerGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Choose your path</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900">Enter by the question you have today.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SectionCard href="/start-here" eyebrow="New here" title="Understand the big picture" description="What Prenatal Opioid Exposure can mean, why regulation matters, and how to use the site." />
          <SectionCard href="/challenges" eyebrow="Urgent question" title="Find help by challenge" description="Sleep, sensory needs, feeding/GI, meltdowns, transitions, school, and therapy." accent="amber" />
          <SectionCard href="/troubleshooting" eyebrow="Stuck" title="When advice is failing" description="Decide whether to persist, adapt, stack, pause, or escalate." accent="rose" />
          <SectionCard href="/age" eyebrow="Development" title="Browse by age" description="Interventions look different for a 6-month-old than a 2-year-old. Start with stage." accent="blue" />
          <SectionCard href="/stack" eyebrow="Integrated" title="Build the stack" description="Layer environment, co-regulation, sleep, movement, nutrition, therapy, and medical care." accent="blue" />
          <SectionCard href="/clinicians-researchers" eyebrow="Professional" title="For clinicians & researchers" description="Mechanisms, evidence gaps, xylazine-era uncertainty, and integrated care framing." />
        </div>
      </section>

      <section className="border-y border-warm-200 bg-white px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">Common challenges</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {challengeNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border border-gray-200 bg-warm-50 p-4 text-sm font-semibold text-gray-800 hover:border-amber-300 hover:bg-amber-50">
                  {item.label} <span className="text-amber-600">→</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">Age lenses</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {ageNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border border-gray-200 bg-warm-50 p-4 text-sm font-semibold text-gray-800 hover:border-sage-300 hover:bg-sage-50">
                  {item.label} <span className="text-xs text-gray-500">{item.detail}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <TroubleshootingChecklist />
      </section>
    </div>
  );
}
