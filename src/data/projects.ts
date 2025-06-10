import type { Project } from "@/types";

import { technology } from "./technologies";

export const projects: Array<Project> = [
  {
    title: "",
    description:
      "Designed and developed a fully custom Shopify theme tailored for a shapewear brand, focusing on modern UX, mobile-first design, and high-conversion product pages. Implemented brand-specific styling, reusable components, and optimized checkout flows to enhance user engagement and drive sales.",
    technologies: [
      technology.Liquid,
      technology.JavaScript,
      technology.HTML,
      technology.CSS,
    ],
    image: "/assets/sbc-shopify-theme.png",
    liveDemo: "https://solbeautyandcare.com/",
  },
  {
    title: "React Admin Template",
    description:
      "A production-ready React template with a scalable architecture, clear project structure, and modular, reusable components—designed to help teams launch apps quickly while following best practices.",
    technologies: [
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
  {
    title: "Swing Inventory Manager",
    description:
      "Inventory management application developed using Java Swing. The application allows you to manage loans to personnel, capturing inventory items, employees, and departments. All changes can be saved locally through Java object serialization.",
    technologies: [technology.Java, technology.Swing],
    image: "/assets/swing-inventory-manager.png",
    repository: "https://github.com/Paul2G/swing-inventory-manager",
  },
];
