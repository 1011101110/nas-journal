"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ageStages = [
  { href: "/age/newborn", label: "Newborn", detail: "0–4 wks" },
  { href: "/age/infant", label: "Infant", detail: "1–12 mo" },
  { href: "/age/early-toddler", label: "Early Toddler", detail: "12–18 mo" },
  { href: "/age/toddler", label: "Toddler", detail: "18–24 mo" },
  { href: "/age/older-toddler", label: "Older Toddler", detail: "24–36 mo" },
];

const challenges = [
  { href: "/symptoms/sleep", label: "Sleep" },
  { href: "/symptoms/feeding", label: "Feeding / GI" },
  { href: "/symptoms/sensory-overload", label: "Sensory Overload" },
  { href: "/symptoms/overstimulation", label: "Overstimulation" },
  { href: "/symptoms/tantrums", label: "Meltdowns" },
  { href: "/symptoms/transitions", label: "Transitions" },
];

const stackLinks = [
  { href: "/stack", label: "The Regulation Stack" },
  { href: "/interventions/routines-predictability", label: "Environment" },
  { href: "/interventions/co-regulation", label: "Co-regulation" },
  { href: "/symptoms/sleep", label: "Sleep" },
  { href: "/symptoms/sensory-overload", label: "Movement / Sensory" },
  { href: "/symptoms/feeding", label: "Nutrition / Physiology" },
  { href: "/interventions/pcit", label: "Therapy" },
];

const professionalLinks = [
  { href: "/clinicians-researchers", label: "Professional Hub" },
  { href: "/research/nas-brain", label: "Mechanisms" },
  { href: "/research/epigenetics", label: "Epigenetics" },
  { href: "/research/xylazine-polysubstance", label: "Xylazine Uncertainty" },
  { href: "/research", label: "Research Library" },
];

const secondaryLinks = [
  { href: "/timeline", label: "Parent Journey" },
  { href: "/navigating-medical", label: "Medical System" },
  { href: "/not-pursuing", label: "Not Pursuing" },
  { href: "/about", label: "About" },
];

function Dropdown({
  id,
  label,
  items,
  activePrefix,
  dropdown,
  setDropdown,
}: {
  id: string;
  label: string;
  items: { href: string; label: string; detail?: string }[];
  activePrefix: string;
  dropdown: string | null;
  setDropdown: (id: string | null) => void;
}) {
  const pathname = usePathname();
  const active = pathname.startsWith(activePrefix) || items.some((item) => pathname === item.href);
  return (
    <div className="relative" onMouseEnter={() => setDropdown(id)} onMouseLeave={() => setDropdown(null)}>
      <button
        className={`rounded-md px-3 py-2 transition-colors ${
          active ? "bg-sage-600 text-white" : "text-sage-100 hover:bg-sage-700 hover:text-white"
        }`}
      >
        {label} ▾
      </button>
      {dropdown === id && (
        <div className="absolute left-0 top-full min-w-56 rounded-md border border-gray-100 bg-white py-2 text-gray-800 shadow-lg">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm hover:bg-sage-50 hover:text-sage-700">
              {item.label} {item.detail && <span className="text-xs text-gray-400">({item.detail})</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const primaryLinks = [
    { href: "/start-here", label: "Start Here" },
    { href: "/challenges", label: "By Challenge" },
    { href: "/troubleshooting", label: "When It’s Not Working" },
  ];

  return (
    <nav className="relative z-50 bg-sage-800 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-lg font-medium text-sage-100 transition-colors hover:text-white">
            POE Support
          </Link>

          <div className="hidden items-center gap-1 text-sm lg:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 transition-colors ${
                  isActive(link.href) ? "bg-sage-600 text-white" : "text-sage-100 hover:bg-sage-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Dropdown id="age" label="By Age" items={ageStages} activePrefix="/age" dropdown={dropdown} setDropdown={setDropdown} />
            <Dropdown id="stack" label="Build the Stack" items={stackLinks} activePrefix="/stack" dropdown={dropdown} setDropdown={setDropdown} />
            <Dropdown id="professional" label="Clinicians & Researchers" items={professionalLinks} activePrefix="/clinicians-researchers" dropdown={dropdown} setDropdown={setDropdown} />
            <Dropdown id="more" label="More" items={secondaryLinks} activePrefix="/about" dropdown={dropdown} setDropdown={setDropdown} />
          </div>

          <button
            className="p-2 text-sage-100 hover:text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="space-y-4 border-t border-sage-700 py-4 lg:hidden">
            <div className="space-y-1">
              {[...primaryLinks, { href: "/age", label: "By Age" }, { href: "/stack", label: "Build the Stack" }, { href: "/clinicians-researchers", label: "Clinicians & Researchers" }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive(link.href) ? "bg-sage-600 text-white" : "text-sage-100 hover:bg-sage-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-sage-700 pt-3">
              <div className="mb-1 px-3 text-xs uppercase tracking-wide text-sage-300">Top challenges</div>
              {challenges.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-amber-100 transition-colors hover:bg-sage-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-sage-700 pt-3">
              <div className="mb-1 px-3 text-xs uppercase tracking-wide text-sage-300">More</div>
              {secondaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-sage-100 transition-colors hover:bg-sage-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
