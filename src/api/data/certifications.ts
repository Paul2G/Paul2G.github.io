import type { Certification } from "../../types/portfolio";

export const certifications: Certification[] = [
  {
    name: "Advanced Kubernetes Operator",
    issuer: "Cloud Guild",
    issueDate: "2023-05-01",
    expiryDate: "2026-05-01",
    credentialUrl: "https://example.com/creds/k8s",
  },
  {
    name: "Certified Systems Thinker",
    issuer: "Meridian Certification Council",
    issueDate: "2022-03-15",
    credentialUrl: "https://example.com/creds/systems",
  },
  {
    name: "Incident Command Champion",
    issuer: "Ops Forge",
    issueDate: "2024-09-01",
  },
];
