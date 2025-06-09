import { AstroComponentInstance } from "astro/runtime/server";

export interface Company {
  name: string;
  website: string | URL;
}

export interface ExperienceEvent {
  title: string;
  description: string;
  bullets: Array<string>;
  company: Company;
  startDate: Date;
  endDate: Date;
}

export interface Technology {
  name: string;
  icon?: AstroComponentInstance;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Languages"
    | "Other";
}

export interface Project {
  title: string;
  image?: string;
  description: string;
  technologies: Array<Technology>;
  repository?: string;
  liveDemo?: string;
}

export interface Education {
  degree: string;
  school: string;
  startDate: Date;
  endDate: Date;
  description: string;
  achievements: Array<string>;
}

export interface Social {
  name: string;
  url: string | URL;
  label: string;
  icon: string;
}
