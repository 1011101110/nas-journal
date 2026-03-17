"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const stages = [
  { id: "newborn", label: "Newborn", ageRange: "0–4 wks" },
  { id: "infant", label: "Infant", ageRange: "1–12 mo" },
  { id: "toddler-early", label: "Early Toddler", ageRange: "12–18 mo" },
  { id: "toddler-mid", label: "Mid Toddler", ageRange: "18–24 mo" },
  { id: "toddler-late", label: "Late Toddler", ageRange: "24–30 mo" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-sage-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-lg font-medium text-sage-100 hover:text-white transition-colors">
            NAS Journal
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            {stages.map((s) => (
              <Link
                key={s.id}
                href={`/stages/${s.id}`}
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname.startsWith(`/stages/${s.id}`)
                    ? "bg-sage-600 text-white"
                    : "text-sage-200 hover:bg-sage-700 hover:text-white"
                }`}
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/toolkit"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname.startsWith("/toolkit")
                  ? "bg-amber-600 text-white"
                  : "text-amber-200 hover:bg-sage-700 hover:text-white"
              }`}
            >
              ⚡ Toolkit
            </Link>
            <Link
              href="/research"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname.startsWith("/research")
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
          <div className="md:hidden pb-4 border-t border-sage-700 pt-4">
            <div className="text-xs text-sage-400 uppercase tracking-wide mb-2 px-3">By Age</div>
            {stages.map((s) => (
              <Link
                key={s.id}
                href={`/stages/${s.id}`}
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname.startsWith(`/stages/${s.id}`)
                    ? "bg-sage-600 text-white"
                    : "text-sage-200 hover:bg-sage-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {s.label} <span className="text-sage-400 text-xs">({s.ageRange})</span>
              </Link>
            ))}
            <div className="border-t border-sage-700 mt-3 pt-3">
              <Link
                href="/toolkit"
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname.startsWith("/toolkit")
                    ? "bg-amber-600 text-white"
                    : "text-amber-200 hover:bg-sage-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                ⚡ Toolkit — Quick Help
              </Link>
              <Link
                href="/research"
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname.startsWith("/research")
                    ? "bg-sage-600 text-white"
                    : "text-sage-200 hover:bg-sage-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Research
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname === "/about"
                    ? "bg-sage-600 text-white"
                    : "text-sage-200 hover:bg-sage-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
