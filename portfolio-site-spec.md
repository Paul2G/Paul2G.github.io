# Project Specification: Software Engineer Portfolio Site

## 1. Overview

Build a web portfolio for a software engineer. It is structured like a CV/résumé but is **project-showcase first**: the index page presents all portfolio information (projects, experience, education, courses, certifications, skills), and each project can be opened in its own route for full detail.

Visual style: **Neubrutalist web design** — geometric blocks, clashing color palettes, grotesque/uppercase typography, hard 45º angled shadows, dark outlines, pseudo-3D objects, and Y2K/Memphis Design nostalgia touches, deliberately defying conventional "polished" design norms while staying accessible. Fully responsive.

The app must be deployable as a **static site to GitHub Pages**.

All content in this build is **placeholder data**: Lorem Ipsum text, made-up names/dates/contact info. No real personal data.

---

## 2. Tech Stack (fixed — do not substitute)

- **Astro** (static output, `output: 'static'`)
- **TypeScript**, strict mode, used consistently across the entire codebase (no `any`, no implicit untyped data)
- **TailwindCSS** for all styling
- Deployment target: **GitHub Pages** (project must build with a configurable `base` path)

No UI framework (React/Vue/Svelte) is required — use plain Astro components unless interactivity genuinely requires client-side JS, in which case use minimal vanilla TS in a `<script>` tag or an Astro island.

---

## 3. Data Architecture

### 3.1 Principle

All portfolio content must be retrieved through an **async mock web API layer**, so it can later be swapped for a real CMS/backend with changes isolated to one module. Pages/components must never import the raw data files directly — they call the mock API functions.

### 3.2 Domains to model

- Projects
- Professional Experience
- Education
- Courses
- Certifications
- Skills
- Contact Info (for header/footer/hero)

### 3.3 Types (`src/types/portfolio.ts`)

Define and export strict interfaces for every domain. Minimum required shape:

```ts
export interface Project {
  slug: string;               // unique, URL-safe, used for routing
  title: string;
  summary: string;            // short, used on index page cards
  description: string;        // long-form, used on detail route
  role: string;
  stack: string[];
  startDate: string;          // ISO 8601 date
  endDate: string | null;     // null = ongoing
  links?: { label: string; url: string }[];
  images?: string[];          // paths under /public
  featured: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  stack?: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
}

export interface Course {
  name: string;
  provider: string;
  completedDate: string;
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
}

export type SkillCategory = "language" | "framework" | "tool" | "other";

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface ContactInfo {
  email: string;
  location: string;
  socials: { label: string; url: string }[];
}
```

Adjust/extend fields as needed for the design, but keep every field typed — no untyped `object` or `any` anywhere in the data path.

### 3.4 Mock data files (`src/api/data/*.ts`)

One file per domain (`projects.ts`, `experience.ts`, `education.ts`, `courses.ts`, `certifications.ts`, `skills.ts`, `contact.ts`), each exporting a single `const` array (or object for contact) typed against the interfaces above.

Requirements for the seed content:
- Lorem Ipsum for all descriptive text (summary, description, bios).
- At least 6 projects, with a mix of `featured: true/false` and at least one with `endDate: null`.
- At least 3 experience entries, 1–2 education entries, 3–4 courses, 2–3 certifications, and a broad skills list covering all four `SkillCategory` values.
- Dates: plausible, internally consistent, made-up (no real employer/school names — invent generic-but-realistic-sounding ones).
- Contact info: fake email, fake location, 2–3 fake social links.

### 3.5 Mock API layer (`src/api/mockApi.ts`)

Export one async function per domain, e.g.:

```ts
export async function getProjects(): Promise<Project[]>;
export async function getProjectBySlug(slug: string): Promise<Project | undefined>;
export async function getExperience(): Promise<ExperienceEntry[]>;
export async function getEducation(): Promise<EducationEntry[]>;
export async function getCourses(): Promise<Course[]>;
export async function getCertifications(): Promise<Certification[]>;
export async function getSkills(): Promise<Skill[]>;
export async function getContactInfo(): Promise<ContactInfo>;
```

Each function should `await` a small artificial delay before returning, to genuinely exercise the async path (this simulates a real network/CMS call and ensures the calling code is already written correctly for that case). Implementation detail is up to the agent, but the delay must be real (e.g. a `setTimeout`-based promise), not a no-op.

---

## 4. Routing & Pages

- **`/` (index)**: renders every domain in its own section — hero/contact, projects grid, experience timeline, education, courses, certifications, skills. All sections populated via the mock API calls in the page frontmatter.
- **`/projects/[slug]`**: one static page per project, generated via `getStaticPaths()` sourced from `getProjects()`. Shows the full `Project.description`, stack, dates, links, images. Includes a way to navigate back to the index (e.g. back link or logo).
- 404 page in keeping with the site's design.

All data fetching happens at build time (Astro frontmatter / `getStaticPaths`), consistent with static output for GitHub Pages — no client-side fetching of the mock API.

---

## 5. Visual Design — Neubrutalist Aesthetic

Implement via Tailwind theme configuration + reusable component classes (not one-off inline styles scattered everywhere). Neubrutalism deliberately defies conventional "good design" polish while still staying accessible and functional — it is not the same as plain/architectural Brutalism. Required characteristics:

- **Geometric blocks**: sections and cards built from clearly-bounded rectangular/square blocks; layout reads as assembled shapes, not a soft continuous flow.
- **Contrasting, off-putting color palette**: loud, clashing combinations rather than a safe harmonized palette — pick 3–5 saturated colors that intentionally jar against each other (not just one accent on black/white).
- **Dark outlines**: every major element (cards, buttons, images, section blocks) gets a solid dark/black outline (e.g. `border-2` to `border-4 border-black`).
- **Hard 45º angled drop shadows**: offset shadows at a consistent 45º direction (e.g. `shadow-[6px_6px_0_0_#000]`), not soft/blurred box-shadows. Hover/active states should snap the shadow (e.g. shrink/move the offset) rather than fade.
- **No rounded corners, no gradients**: flat fills only, `rounded-none` as the default posture, no soft visual effects.
- **Grotesque/unusual typography**: an intentionally quirky, oversized, or stretched display typeface for headings — avoid safe, neutral system fonts for anything prominent. Use **uppercase lettering** for headings/labels/buttons as a recurring motif.
- **Oversized UI elements**: buttons, badges, and headline text pushed larger than a "normal" design system would use.
- **Pseudo-3D objects**: flat shapes given a fake sense of depth via stacked offset layers/outlines (not real gradients/blur) — e.g. a card that looks like it has a solid-color slab behind it, offset diagonally.
- **Deliberately inconsistent layout**: slight rotation on some cards/stickers, elements that overlap block boundaries, asymmetric spacing between sections — controlled "randomness" rather than a rigid uniform grid.
- **Y2K / Memphis Design / Webcore nostalgia touches**: options include zig-zag dividers, graph-paper/grid backgrounds, squiggles, starbursts, retro "window/tab" chrome framing a section (like an OS window titlebar), simple geometric confetti shapes (circles, triangles, zigzags) scattered as decoration.
- **Illustrations, where used**: flat, unshaded outline illustrations or simple geometric/cartoon-adjacent shapes rather than photographic realism — keep any illustration work lightweight (inline SVG) since this is a placeholder-data build.
- **Static, not smoothly animated**: motion (if any) should be abrupt/snappy (e.g. a sticker-style rotate-in or shadow-snap on hover), not eased/springy micro-interactions.

### Responsiveness

- Mobile-first Tailwind breakpoints.
- Project grid collapses to single column on small screens.
- Navigation (if a persistent nav/header exists) must have a usable mobile pattern (stacked links, hamburger, or simple wrap — agent's choice, but must remain usable at ~375px width).
- Timeline/list sections must reflow sensibly on narrow viewports (no horizontal scroll traps, no overlapping text).

---

## 6. Project Structure

```
src/
  api/
    mockApi.ts
    data/
      projects.ts
      experience.ts
      education.ts
      courses.ts
      certifications.ts
      skills.ts
      contact.ts
  types/
    portfolio.ts
  layouts/
    BaseLayout.astro
  components/
    sections/
      Hero.astro
      ProjectsGrid.astro
      ExperienceTimeline.astro
      EducationList.astro
      CoursesList.astro
      CertificationsList.astro
      SkillsGrid.astro
    ui/
      Card.astro
      Badge.astro
      Button.astro
  pages/
    index.astro
    projects/
      [slug].astro
    404.astro
  styles/
    global.css
public/
astro.config.mjs
tailwind.config.mjs
tsconfig.json
```

---

## 7. Deployment (GitHub Pages)

- `astro.config.mjs`: set `output: 'static'`, and set `site`/`base` to match `https://<user>.github.io/<repo>/` conventions (base should be configurable, not hardcoded to root, unless the repo is a user/organization root site).
- Add a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site (`astro build`) and publishes it to GitHub Pages on push to the main branch, using the official Astro GitHub Pages deploy action.
- Ensure all internal links/assets respect the configured `base` path (use Astro's `base`-aware helpers, not hardcoded absolute paths).

---

## 8. TypeScript Strictness

- `tsconfig.json` extends Astro's strict preset (`astro/tsconfigs/strict` or stricter).
- No implicit `any`.
- All component props typed via `interface Props { ... }` in Astro components.
- All mock API functions and data files fully typed against `src/types/portfolio.ts` — this is the single source of truth for shapes; do not redefine overlapping types elsewhere.

---

## 9. Acceptance Criteria

- [ ] `astro build` succeeds with zero TypeScript errors.
- [ ] Index page renders all seven data domains, each sourced via an `await` call to the mock API.
- [ ] Each project card on the index links to a working `/projects/[slug]` detail page.
- [ ] Site is usable and legible at mobile (~375px), tablet (~768px), and desktop (~1280px+) widths.
- [ ] No rounded corners, no gradients, no soft/blurred box-shadows anywhere in the default theme — shadows are hard 45º offsets.
- [ ] Headings/labels use uppercase, oversized, grotesque/stretched display type; every major block has a visible dark outline.
- [ ] All content is placeholder/Lorem Ipsum — no real personal data.
- [ ] GitHub Actions workflow builds and deploys to GitHub Pages successfully.
- [ ] No data file is imported directly by a page/component — all access goes through `src/api/mockApi.ts`.
