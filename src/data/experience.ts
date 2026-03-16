import type { ExperienceEvent } from "@/types";

export const experienceEvents: Array<ExperienceEvent> = [
  {
    title: "Software Engineer",
    company: {
      name: "Sol Beauty & Care",
      website: "https://solbeautyandcare.com/",
    },
    startDate: new Date("2023-03-21"),
    endDate: new Date("2023-08-08"),
    description: "",
    bullets: [
      "Developed a full-stack e-commerce platform using Remix (React + Node.js), Shopify Hydrogen, and TailwindCSS, implementing both clientside UI and server-side logic with Shopify GraphQL APIs",
      "Built internal management and onboarding tools with React and TypeScript, including role-based access control and commission tracking workflows.",
      "Optimized and maintained a legacy Shopify theme using Liquid, improving page load times by ~60%, enhancing SEO performance, and enabling content updates for non-technical users.",
      "Designed and implemented a backend image management service using ASP.NET Core Web API, Entity Framework Core, SQL Server, and AWS S3 for secure storage and retrieval.",
    ],
  },
  {
    title: "Web Developer",
    company: {
      name: "Grupo Gurú",
      website: "https://grupoguru.com/",
    },
    startDate: new Date("2022-06-20"),
    endDate: new Date("2022-12-12"),
    description: "",
    bullets: [
      "Built responsive, SEO-optimized websites across multiple industries using WordPress with cross-browser compatibility.",
      "Developed custom JavaScript solutions for dynamic content, form validation, and interactive user features.",
      "Managed server administration and deployment via cPanel including DNS, SSL, and email configuration.",
    ],
  },
] as const;
