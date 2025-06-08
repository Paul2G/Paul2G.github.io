import type { Technology } from "@/types";
import * as icons from "@/components/icons";

export const technology: Record<string, Technology> = {
  Astro: {
    name: "Astro",
    icon: icons.AstroIcon,
  },
  C: {
    name: "C",
    icon: icons.CLangIcon,
  },
  CSS: {
    name: "CSS",
    icon: icons.CssIcon,
  },
  CSharp: {
    name: "C#",
    icon: icons.CSharpIcon,
  },
  Docker: {
    name: "Docker",
    icon: icons.DockerIcon,
  },
  DotNet: {
    name: ".NET",
    icon: icons.DotNetIcon,
  },
  EntityFramework: {
    name: "Entity Framework",
  },
  Espressif: {
    name: "Espressif",
    icon: icons.EspressifIcon,
  },
  Git: {
    name: "Git",
    icon: icons.GitIcon,
  },
  HTML: {
    name: "HTML",
    icon: icons.HtmlIcon,
  },
  Java: {
    name: "Java",
    icon: icons.JavaIcon,
  },
  JavaScript: {
    name: "JavaScript",
    icon: icons.JavaScriptIcon,
  },
  React: {
    name: "React",
    icon: icons.ReactIcon,
  },
  Remix: {
    name: "Remix",
    icon: icons.RemixIcon,
  },
  SQLServer: {
    name: "SQL Server",
    icon: icons.SQLServerIcon,
  },
  TailwindCSS: {
    name: "TailwindCSS",
    icon: icons.TailwindCssIcon,
  },
  TypeScript: {
    name: "TypeScript",
    icon: icons.TypeScriptIcon,
  },
  Vite: {
    name: "Vite",
    icon: icons.ViteIcon,
  },
  Vue: {
    name: "Vue",
    icon: icons.VueIcon,
  },
};

export const myTechnologies: Array<Technology> = [
  technology.Git,
  technology.React,
  technology.Remix,
  technology.Vue,
  technology.Astro,
  technology.JavaScript,
  technology.TypeScript,
  technology.TailwindCSS,
  technology.CSS,
  technology.HTML,
  technology.C,
  technology.Espressif,
  technology.Java,
  technology.CSharp,
];
