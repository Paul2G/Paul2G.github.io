export interface SkillItem {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface SkillGroup {
  label: string;
  skills: SkillItem[];
}

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Remix", level: 4 },
      { name: "TypeScript", level: 5 },
      { name: "TailwindCSS", level: 5 },
      { name: "ShadCN UI", level: 4 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "ASP.NET Core", level: 4 },
      { name: "C#", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "GraphQL", level: 3 },
    ],
  },
  {
    label: "Data & Cloud",
    skills: [
      { name: "SQL Server", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Entity Framework Core", level: 4 },
      { name: "AWS", level: 3 },
      { name: "Docker", level: 3 },
      { name: "GitHub Actions", level: 4 },
    ],
  },
  {
    label: "Platforms & Tools",
    skills: [
      { name: "Shopify (Hydrogen/Liquid)", level: 4 },
      { name: "Git", level: 5 },
      { name: "Agile/Scrum", level: 4 },
      { name: "GitHub Copilot", level: 4 },
      { name: "Claude AI", level: 4 },
    ],
  },
];
