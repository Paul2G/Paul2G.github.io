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
}

export interface Project {
  title: string;
  image?: string;
  description: string;
  technologies: Array<Technology>;
  repository?: string;
  liveDemo?: string;
}

export interface Social {
  name: string;
  url: string | URL;
  // Phosphor icon xd
  icon: string;
}
