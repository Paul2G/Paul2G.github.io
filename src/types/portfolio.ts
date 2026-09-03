export interface ProjectReadme {
  /** Which source supplies the readme content. */
  source: "local" | "url";
  /** Filename of a locally saved markdown file (relative to the readmes dir, e.g. "resumaker.md"). */
  localFile?: string;
  /** Raw markdown URL to fetch and render at build time (e.g. a GitHub raw README). */
  url?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  organization: string;
  stack: string[];
  startDate: string;
  endDate: string | null;
  link?: string;
  repository?: string;
  links?: { label: string; url: string }[];
  images?: string[];
  /** Optional README rendered on the project detail page. Either a local markdown file or a markdown URL. */
  readme?: ProjectReadme;
  featured: boolean;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrentlyWorkingHere: boolean;
  description: string[];
  visible: boolean;
}

export interface EducationEntry {
  id: string;
  title: string;
  organization: string;
  location: string;
  completionDate: string;
  startDate: string;
  endDate: string | null;
  description: string[];
}

export interface Course {
  name: string;
  provider: string;
  completedDate: string;
  url?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string[];
}

export interface ContactInfo {
  fullName: string;
  email: string;
  location: string;
  linkedin: string;
  socials: { label: string; url: string }[];
}

export interface SummaryInfo {
  summary: string;
}
