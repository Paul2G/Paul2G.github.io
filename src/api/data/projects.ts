import type { Project } from "../../types/portfolio";

export const projects: Project[] = [
  {
    slug: "resumaker",
    title: "Resumaker",
    summary:
      "Client-side resume builder with multi-profile support, nested sections, and real-time preview. Loads in under 1s.",
    description: [
      "<p><strong>Description:</strong> Client-side resume builder with multi-profile support, nested sections, and real-time preview. No backend, loads in under 1s. Built and actively maintained for personal use.</p>",
      "<p><strong>Technologies:</strong> React, TypeScript, TailwindCSS, ShadCN UI</p>",
    ],
    organization: "Personal Project",
    stack: ["React", "TypeScript", "TailwindCSS", "ShadCN UI"],
    startDate: "2024-01-01",
    endDate: null,
    link: "https://resumaker.paul2g.dev",
    repository: "https://github.com/Paul2G/resumaker",
    links: [
      { label: "Live Demo", url: "https://resumaker.paul2g.dev" },
      { label: "Source", url: "https://github.com/Paul2G/resumaker" },
    ],
    images: ["/images/projects/resumaker.png"],
    readme: {
      source: "local",
      localFile: "resumaker.md",
    },
    featured: true,
  },
  {
    slug: "react-admin-template",
    title: "React Admin Template",
    summary:
      "A production-ready React template with a scalable architecture, clear project structure, and modular, reusable components—designed to help teams launch apps quickly while following best practices.",
    description: [
      "<p><strong>Description:</strong> A production-ready React template with a scalable architecture, clear project structure, and modular, reusable components—designed to help teams launch apps quickly while following best practices.</p>",
      "<p><strong>Technologies:</strong> React, TypeScript, Vite, TanStack Router, TailwindCSS, Shadcn, Radix UI, React Hook Form, Zod, i18next</p>",
    ],
    organization: "Personal Project",
    stack: ["React", "TypeScript", "Vite", "TanStack Router", "TailwindCSS", "Shadcn", "Radix UI", "React Hook Form", "Zod", "i18next"],
    startDate: "2025-01-01",
    endDate: null,
    link: "https://admin-template.paul2g.dev/",
    repository: "https://github.com/Paul2G/react-admin-template",
    links: [
      { label: "Live Demo", url: "https://admin-template.paul2g.dev/" },
      { label: "Source", url: "https://github.com/Paul2G/react-admin-template" },
    ],
    images: ["/images/projects/react-admin-template.png"],
    readme: {
      source: "local",
      localFile: "react-admin-template.md",
    },
    featured: true,
  },
];
