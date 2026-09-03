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
