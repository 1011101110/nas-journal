"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const quickAnswers = [
  { href: "/symptoms/feeding", label: "Reflux, feeding, or constipation", keywords: "reflux feeding gi constipation hunger blood sugar" },
  { href: "/symptoms/sleep", label: "Sleep, waking, or settling", keywords: "sleep waking bedtime nap settling tired" },
  { href: "/symptoms/tantrums", label: "Hitting, meltdowns, or aggression", keywords: "hitting aggression tantrum meltdown rage biting kicking" },
  { href: "/symptoms/sensory-overload", label: "Sensory overload", keywords: "sensory overload noise light texture vestibular proprioception" },
  { href: "/symptoms/transitions", label: "Transitions and leaving the house", keywords: "transition leaving house car daycare school change" },
  { href: "/troubleshooting", label: "When the plan is not working", keywords: "not working failed stuck troubleshoot escalate pause adapt" },
  { href: "/stack", label: "Build the Regulation Stack", keywords: "stack regulation environment co-regulation movement nutrition therapy" },
  { href: "/clinicians-researchers", label: "Professional / clinical framing", keywords: "clinician doctor researcher xylazine evidence mechanism" },
];

export default function SearchPrompt() {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const matches = useMemo(() => {
    if (!normalized) return quickAnswers.slice(0, 4);
    return quickAnswers
      .filter((item) => `${item.label} ${item.keywords}`.toLowerCase().includes(normalized))
      .slice(0, 5);
  }, [normalized]);

  return (
    <div className="mt-8 max-w-3xl rounded-2xl border border-sage-200 bg-white/90 p-4 shadow-sm backdrop-blur">
      <label htmlFor="homepage-search" className="text-sm font-semibold text-sage-900">
        Need something fast? Search the practical starting points.
      </label>
      <input
        id="homepage-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder='Try “reflux”, “2 year old hitting”, “sleep”, or “transitions”'
        className="mt-3 w-full rounded-xl border border-warm-300 bg-warm-50 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-sage-500 focus:bg-white focus:ring-2 focus:ring-sage-200"
      />
      <div className="mt-3 flex flex-wrap gap-2" aria-live="polite">
        {matches.length > 0 ? (
          matches.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-sage-200 bg-sage-50 px-3 py-1.5 text-sm font-medium text-sage-800 hover:border-sage-400 hover:bg-sage-100"
            >
              {item.label} →
            </Link>
          ))
        ) : (
          <Link href="/challenges" className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800 hover:bg-amber-100">
            No exact match — browse all challenges →
          </Link>
        )}
      </div>
    </div>
  );
}
