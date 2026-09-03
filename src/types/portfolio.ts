export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  startDate: string;
  endDate: string | null;
  links?: { label: string; url: string }[];
  images?: string[];
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
