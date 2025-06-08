import type { ExperienceEvent } from "@/types";

export const experienceEvents: Array<ExperienceEvent> = [
  {
    title: "Frontend Developer (e-commerce)",
    company: {
      name: "Sol Beauty & Care",
      website: "https://solbeautyandcare.com/",
    },
    startDate: new Date("2023-03-21"),
    endDate: new Date(),
    description: "",
    bullets: [
      "Architected and documented a modular ERP template using Vue.js, enabling rapid development of internal tools for managing influencers, commissions, media assets, and role-based user access.",
      "Led frontend development of the company’s flagship e-commerce platform using Remix (React), integrated with Shopify as the content layer.",
      "Built custom Shopify Apps to streamline operations, including automated inventory label printing and dynamic product bundling at checkout.",
      "Refactored and migrated legacy ERP modules to modern web architecture, improving performance and maintainability.",
      "Actively partnered with cross-functional teams (UX, marketing, backend, and data ops) to deliver user-centric, scalable solutions.",
    ],
  },
  {
    title: "Web Developer",
    company: {
      name: "Grupo Gurú",
      website: "https://grupoguru.com/",
    },
    startDate: new Date("2022-08-20"),
    endDate: new Date("2022-12-12"),
    description: "",
    bullets: [
      "Built responsive, SEO-friendly websites for clients across diverse industries using WordPress, customizing themes to meet branding and functionality needs.",
      "Developed custom JavaScript scripts to extend site capabilities, including dynamic content rendering, form validation, and user interaction features.",
      "Performed basic server administration and site configuration using cPanel, ensuring stable deployment environments and smooth domain/email setup.",
    ],
  },
] as const;
