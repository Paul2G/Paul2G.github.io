import type { ExperienceEntry } from "../../types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    company: "Brightwork Labs",
    role: "Senior Software Engineer",
    startDate: "2023-04-01",
    endDate: null,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leads a small platform team building internal tooling and developer infrastructure. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Ship rate-limiting, feature-flag, and provisioning services used across four product teams.",
    stack: ["TypeScript", "Go", "Kubernetes", "PostgreSQL"],
  },
  {
    company: "Fernwood Systems",
    role: "Software Engineer",
    startDate: "2020-09-01",
    endDate: "2023-03-31",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Built and maintained customer-facing web applications and the reporting pipeline behind them. Nulla quis lorem ut libero malesuada feugiat. Introduced typed API contracts and a shared component library adopted across the frontend guild.",
    stack: ["React", "Node", "GraphQL", "MySQL"],
  },
  {
    company: "Hollowpine",
    role: "Junior Developer",
    startDate: "2018-06-01",
    endDate: "2020-08-31",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Maintained CMS themes and internal dashboards. Sed porttitor lectus nibh. Automated repetitive QA steps and grew into owning small end-to-end features independently.",
    stack: ["JavaScript", "PHP", "jQuery", "PostgreSQL"],
  },
];
