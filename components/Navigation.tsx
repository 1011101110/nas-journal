"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ageStages = [
  { slug: "newborn", label: "Newborn", ageRange: "0–4 wks" },
  { slug: "infant", label: "Infant", ageRange: "1–12 mo" },
  { slug: "early-toddler", label: "Early Toddler", ageRange: "12–18 mo" },
  { slug: "toddler", label: "Toddler", ageRange: "18–24 mo" },
  { slug: "older-toddler", label: "Older Toddler", ageRange: "24–36 mo" },
];

const symptoms = [
  { slug: "screaming", label: "Screaming" },
  { slug: "sleep", label: "Sleep" },
  { slug: "transitions", label: "Transitions" },
  { slug: "tantrums", label: "Tantrums" },
  { slug: "sensory-overload", label: "Sensory Overload" },
  { slug: "feeding", label: "Feeding" },
  { slug: "overstimulation", label: "Overstimulation" },
];

const interventions = [
  { slug: "pcit", label: "PCIT" },
  { slug: "co-regulation", label: "Co-Regulation" },
  { slug: "routines-predictability", label: "Routines" },
  { slug: "screen-time-reduction", label: "Screen Time" },
  { slug: "probiotics-gut-health", label: "Probiotics" },
  { slug: "omega-3s", label: "Omega-3s" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const isActive = (prefix: string) => pathname.startsWith(prefix);

  return (
    <nav className="bg-sage-800 text-white shadow-md relative z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg font-medium text-sage-100 hover:text-white transition-colors"
          >
            NAS Journal
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            {/* By Age */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("age")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive("/age")
                    ? "bg-sage-600 text-white"
                    : "text-sage-200 hover:bg-sage-700 hover:text-white"
                }`}
              >
                By Age ▾
              </button>
              {dropdown === "age" && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg py-2 min-w-48 border border-gray-100">
                  {ageStages.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/age/${s.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-sage-50 hover:text-sage-700"
                    >
                      {s.label}{" "}
                      <span className="text-gray-400 text-xs">({s.ageRange})</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* By Symptom */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("symptoms")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive("/symptoms")
                    ? "bg-amber-600 text-white"
                    : "text-amber-200 hover:bg-sage-700 hover:text-white"
                }`}
              >
                ⚡ By Symptom ▾
              </button>
              {dropdown === "symptoms" && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg py-2 min-w-44 border border-gray-100">
                  {symptoms.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/symptoms/${s.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-sage-50 hover:text-sage-700"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Interventions */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("interventions")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive("/interventions")
                    ? "bg-sage-600 text-white"
                    : "text-sage-200 hover:bg-sage-700 hover:text-white"
                }`}
              >
                Interventions ▾
              </button>
              {dropdown === "interventions" && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg py-2 min-w-44 border border-gray-100">
                  {interventions.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/interventions/${i.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-sage-50 hover:text-sage-700"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/not-pursuing"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === "/not-pursuing"
                  ? "bg-sage-600 text-white"
                  : "text-sage-200 hover:bg-sage-700 hover:text-white"
              }`}
            >
              Not Pursuing
            </Link>
            <Link
              href="/research"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/research")
                  ? "bg-sage-600 text-white"
                  : "text-sage-200 hover:bg-sage-700 hover:text-white"
              }`}
            >
              Research
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === "/about"
                  ? "bg-sage-600 text-white"
                  : "text-sage-200 hover:bg-sage-700 hover:text-white"
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-sage-200 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-sage-700 pt-4 space-y-1">
            <div className="text-xs text-sage-400 uppercase tracking-wide mb-1 px-3">By Age</div>
            {ageStages.map((s) => (
              <Link
                key={s.slug}
                href={`/age/${s.slug}`}
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive(`/age/${s.slug}`)
                    ? "bg-sage-600 text-white"
                    : "text-sage-200 hover:bg-sage-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {s.label} <span className="text-sage-400 text-xs">({s.ageRange})</span>
              </Link>
            ))}

            <div className="border-t border-sage-700 pt-3 mt-2">
              <div className="text-xs text-sage-400 uppercase tracking-wide mb-1 px-3">By Symptom</div>
              {symptoms.map((s) => (
                <Link
                  key={s.slug}
                  href={`/symptoms/${s.slug}`}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive(`/symptoms/${s.slug}`)
                      ? "bg-amber-600 text-white"
                      : "text-amber-200 hover:bg-sage-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-sage-700 pt-3 mt-2">
              <div className="text-xs text-sage-400 uppercase tracking-wide mb-1 px-3">Interventions</div>
              {interventions.map((i) => (
                <Link
                  key={i.slug}
                  href={`/interventions/${i.slug}`}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive(`/interventions/${i.slug}`)
                      ? "bg-sage-600 text-white"
                      : "text-sage-200 hover:bg-sage-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-sage-700 pt-3 mt-2">
              {[
                { href: "/not-pursuing", label: "Not Pursuing" },
                { href: "/research", label: "Research" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    pathname === link.href || isActive(link.href)
                      ? "bg-sage-600 text-white"
                      : "text-sage-200 hover:bg-sage-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
