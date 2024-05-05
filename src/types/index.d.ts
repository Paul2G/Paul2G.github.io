export type TechName =
  | "Astro"
  | "C"
  | "CSharp"
  | "CSS"
  | "Espressif"
  | "Git"
  | "HTML"
  | "Java"
  | "JavaScript"
  | "React"
  | "Remix"
  | "TailwindCSS"
  | "TypeScript"
  | "Vite"
  | "Vue";

export interface ICompany {
  name: string;
  website: string | URL;
}

export interface IExperienceEvent {
  title: string;
  description: string;
  company: ICompany;
  startDate: Date;
  endDate: Date;
}

export interface ITechnology {
  name: TechName;
  docsUrl: string;
  color: string;
}

export interface IProject {
  title: string;
  imageSrc?: string;
  description: string;
  technologies: Array<ITechnology>;
}

export interface ISocial {
  name: string;
  url: string | URL;
  // Phosphor icon xd
  icon: string;
}
