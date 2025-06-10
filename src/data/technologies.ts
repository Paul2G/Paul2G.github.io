import type { Technology } from "@/types";

import * as icons from "@/components/icons";

export const technology: Record<string, Technology> = {
  Astro: {
    name: "Astro",
    icon: icons.AstroIcon,
    category: "Frontend",
  },
  C: {
    name: "C",
    icon: icons.CLangIcon,
    category: "Languages",
  },
  CSS: {
    name: "CSS",
    icon: icons.CssIcon,
    category: "Languages",
  },
  CSharp: {
    name: "C#",
    icon: icons.CSharpIcon,
    category: "Languages",
  },
  Docker: {
    name: "Docker",
    icon: icons.DockerIcon,
    category: "DevOps",
  },
  DotNet: {
    name: ".NET Core",
    icon: icons.DotNetIcon,
    category: "Backend",
  },
  EntityFramework: {
    name: "Entity Framework",
    icon: icons.DotNetIcon,
    category: "Backend",
  },
  Espressif: {
    name: "Espressif",
    icon: icons.EspressifIcon,
    category: "Other",
  },
  Express: {
    name: "Express",
    icon: icons.ExpressIcon,
    category: "Backend",
  },
  Git: {
    name: "Git",
    icon: icons.GitIcon,
    category: "DevOps",
  },
  GitHub: {
    name: "GitHub",
    icon: icons.GithubIcon,
    category: "DevOps",
  },
  GitHubActions: {
    name: "GitHub Actions",
    icon: icons.GithubActionsIcon,
    category: "DevOps",
  },
  HTML: {
    name: "HTML",
    icon: icons.HtmlIcon,
    category: "Languages",
  },
  Java: {
    name: "Java",
    icon: icons.JavaIcon,
    category: "Languages",
  },
  JavaScript: {
    name: "JavaScript",
    icon: icons.JavaScriptIcon,
    category: "Languages",
  },
  Liquid: {
    name: "Liquid",
    icon: icons.ShopifyIcon,
    category: "Frontend",
  },
  Node: {
    name: "Node.js",
    icon: icons.NodeIcon,
    category: "Backend",
  },
  MySQL: {
    name: "MySQL",
    icon: icons.MySQLIcon,
    category: "Database",
  },
  React: {
    name: "React",
    icon: icons.ReactIcon,
    category: "Frontend",
  },
  Remix: {
    name: "Remix",
    icon: icons.RemixIcon,
    category: "Frontend",
  },
  SQLServer: {
    name: "SQLServer",
    icon: icons.SQLServerIcon,
    category: "Database",
  },
  Swing: {
    name: "Swing",
    category: "Other",
  },
  TailwindCSS: {
    name: "TailwindCSS",
    icon: icons.TailwindCssIcon,
    category: "Languages",
  },
  TypeScript: {
    name: "TypeScript",
    icon: icons.TypeScriptIcon,
    category: "Languages",
  },
  Vite: {
    name: "Vite",
    icon: icons.ViteIcon,
    category: "Frontend",
  },
  Vue: {
    name: "Vue",
    icon: icons.VueIcon,
    category: "Frontend",
  },
};

export const myTechnologies: Array<Technology> = Object.values(technology);
