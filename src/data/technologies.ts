import type { ITechnology, TechName } from "../types/index.d.ts";

export const technologies: Record<TechName, ITechnology> = {
  Astro: {
    name: "Astro",
    docsUrl: "https://docs.astro.build/en/getting-started/",
    color: "",
  },
  C: {
    name: "C",
    docsUrl: "https://en.cppreference.com/w/c",
    color: "",
  },
  CSS: {
    name: "CSS",
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    color: "",
  },
  CSharp: {
    name: "CSharp",
    docsUrl: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    color: "",
  },
  Espressif: {
    name: "Espressif",
    docsUrl:
      "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/",
    color: "",
  },
  Git: {
    name: "Git",
    docsUrl: "https://git-scm.com/doc/",
    color: "",
  },
  HTML: {
    name: "HTML",
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: "",
  },
  Java: {
    name: "Java",
    docsUrl: "https://docs.oracle.com/en/java/",
    color: "",
  },
  JavaScript: {
    name: "JavaScript",
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    color: "",
  },
  React: {
    name: "React",
    docsUrl: "https://react.dev/learn",
    color: "",
  },
  Remix: {
    name: "Remix",
    docsUrl: "https://docs.remix.run/",
    color: "",
  },
  TailwindCSS: {
    name: "TailwindCSS",
    docsUrl: "https://tailwindcss.com/docs/installation",
    color: "",
  },
  TypeScript: {
    name: "TypeScript",
    docsUrl: "https://www.typescriptlang.org/docs/",
    color: "",
  },
  Vite: {
    name: "Vite",
    docsUrl: "https://vitejs.dev/guide/",
    color: "",
  },
  Vue: {
    name: "Vue",
    docsUrl: "https://vuejs.org/v2/guide/",
    color: "",
  },
};

export const myTechnologies: Array<ITechnology> = [
  technologies.Git,
  technologies.React,
  technologies.Remix,
  technologies.Vue,
  technologies.Astro,
  technologies.JavaScript,
  technologies.TypeScript,
  technologies.TailwindCSS,
  technologies.CSS,
  technologies.HTML,
  technologies.C,
  technologies.Espressif,
  technologies.Java,
  technologies.CSharp,
];
