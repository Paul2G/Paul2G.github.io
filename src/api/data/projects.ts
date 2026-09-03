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
    featured: true,
  },
];
