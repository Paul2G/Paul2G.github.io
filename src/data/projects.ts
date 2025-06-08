import type { Project } from "@/types";

import { technology } from "./technologies";

export const projects: Array<Project> = [
  {
    title: "React Admin Template",
    description:
      "A production-ready React template with a scalable architecture, clear project structure, and modular, reusable components—designed to help teams launch apps quickly while following best practices.",
    technologies: [
      technology.Remix,
      technology.React,
      technology.TypeScript,
      technology.Vite,
      technology.TailwindCSS,
    ],
    image: "/assets/react-admin-template.png",
    repository: "https://github.com/Paul2G/react-admin-template-app",
  },
  {
    title: "Social Events Service",
    description:
      "A .NET 8 microservice for event management, featuring RESTful APIs for front-end and mobile integration, with Docker containerization for easy deployment and scalability.",
    technologies: [
      technology.CSharp,
      technology.DotNet,
      technology.EntityFramework,
      technology.SQLServer,
      technology.Docker,
    ],
    image: "/assets/social-events-service.png",
    repository: "https://github.com/Paul2G/social-events-service",
  },
];
