import type {
  Project,
  ExperienceEntry,
  EducationEntry,
  Course,
  Certification,
  Skill,
  ContactInfo,
} from "../types/portfolio";
import { projects } from "./data/projects";
import { experience } from "./data/experience";
import { education } from "./data/education";
import { courses } from "./data/courses";
import { certifications } from "./data/certifications";
import { skills } from "./data/skills";
import { contact } from "./data/contact";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProjects(): Promise<Project[]> {
  await delay(60);
  return projects;
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  await delay(30);
  return projects.find((p) => p.slug === slug);
}

export async function getExperience(): Promise<ExperienceEntry[]> {
  await delay(45);
  return experience;
}

export async function getEducation(): Promise<EducationEntry[]> {
  await delay(40);
  return education;
}

export async function getCourses(): Promise<Course[]> {
  await delay(35);
  return courses;
}

export async function getCertifications(): Promise<Certification[]> {
  await delay(30);
  return certifications;
}

export async function getSkills(): Promise<Skill[]> {
  await delay(40);
  return skills;
}

export async function getContactInfo(): Promise<ContactInfo> {
  await delay(25);
  return contact;
}
