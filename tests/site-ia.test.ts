import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { ageNavigation, challengeNavigation, primaryNavigation, professionalNavigation, secondaryNavigation, stackNavigation, topLevelHubs } from "../lib/site-ia";

const appDir = path.join(process.cwd(), "app");
const contentDir = path.join(process.cwd(), "content");

function routeExists(href: string) {
  if (href === "/") return true;
  const parts = href.split("/").filter(Boolean);
  const staticPage = path.join(appDir, ...parts, "page.tsx");
  if (fs.existsSync(staticPage)) return true;
  if (parts[0] === "age") return fs.existsSync(path.join(contentDir, "age", `${parts[1]}.md`));
  if (parts[0] === "symptoms") return fs.existsSync(path.join(contentDir, "symptoms", `${parts[1]}.md`));
  if (parts[0] === "interventions") return fs.existsSync(path.join(contentDir, "interventions", `${parts[1]}.md`));
  if (parts[0] === "research") return !parts[1] || fs.existsSync(path.join(contentDir, "research", `${parts[1]}.md`));
  return false;
}

describe("site IA", () => {
  it("keeps all top-level redesign hubs represented", () => {
    expect(topLevelHubs).toEqual(["/start-here", "/age", "/challenges", "/stack", "/troubleshooting", "/clinicians-researchers"]);
  });

  it("does not point navigation at missing routes/content", () => {
    const links = [...primaryNavigation, ...ageNavigation, ...challengeNavigation, ...stackNavigation, ...professionalNavigation, ...secondaryNavigation];
    const missing = links.map((link) => link.href).filter((href) => !routeExists(href));
    expect(missing).toEqual([]);
  });
});
