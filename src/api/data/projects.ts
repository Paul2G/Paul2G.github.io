import type { Project } from "../../types/portfolio";

export const projects: Project[] = [
  {
    slug: "neon-command-center",
    title: "Neon Command Center",
    summary:
      "A realtime ops dashboard for a fictional logistics fleet — telematic pings, alert routing, and a brutalist CLI skin.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. This project consolidated a scattered set of monitoring scripts into one dashboard: live fleet telemetry, a declarative alert pipeline, and a keyboard-driven command palette. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis non lorem sed arcu tincidunt consequat at non justo.\n\nSed iaculis urna et nunc cursus, nec posuere urna suscipit. The stack leaned on typed event streams end to end, and rostered on-call rotations were embedded directly into the routing rules. Proin eget tortor risus. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
    role: "Lead Engineer",
    stack: ["TypeScript", "Node", "WebSockets", "Redis", "Docker"],
    startDate: "2024-03-01",
    endDate: "2024-11-30",
    links: [
      { label: "Live Demo", url: "https://example.com/demo/neon" },
      { label: "Source", url: "https://github.com/example/neon-command-center" },
    ],
    featured: true,
  },
  {
    slug: "tangram-docs",
    title: "Tangram Docs",
    summary:
      "A lightweight, offline-first documentation generator that compiles markdown into a single-searchable static site.",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Tangram Docs turns a folder of markdown into a fast, searchable static site with zero runtime JavaScript. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. The build pipeline resolves cross-document links, inlines diagrams, and emits a JSON search index consumed by an optional client-side search bar.\n\nVivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.",
    role: "Solo maintainer",
    stack: ["Rust", "Markdown", "WebAssembly", "JSDoc"],
    startDate: "2025-01-15",
    endDate: "2025-06-01",
    links: [{ label: "Docs", url: "https://example.com/tangram" }],
    featured: false,
  },
  {
    slug: "pixel-factory",
    title: "Pixel Factory",
    summary:
      "Browser-based sprite editor with tile palettes, animation frames, and export to spritesheet PNG.",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pixel Factory is a canvas-based sprite editor for tiny game assets. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Users paint on a zoomable grid, manage stacked palette layers, scrub animation frames, and export a packed spritesheet.\n\nDonec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    role: "Frontend Engineer",
    stack: ["TypeScript", "Canvas API", "Vite", "Zustand"],
    startDate: "2023-08-01",
    endDate: "2024-02-28",
    images: ["/images/pixel-factory.svg"],
    featured: true,
  },
  {
    slug: "meteor-logger",
    title: "Meteor Logger",
    summary:
      "A structured logging library with batching, sampling, and zero-config shipping to a trace backend.",
    description:
      "Nunc rutrum tellus at mi blandit, at ultricies nibh pretium. Meteor Logger is a structured logging SDK designed for long-running services. Aliquam erat volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. It batches records in the background, applies sampling rules, redacts sensitive fields, and retries failed uploads with exponential backoff.\n\nSed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
    role: "Core Maintainer",
    stack: ["TypeScript", "Node", "gRPC", "Vitest"],
    startDate: "2024-06-01",
    endDate: null,
    links: [{ label: "Source", url: "https://github.com/example/meteor-logger" }],
    featured: false,
  },
  {
    slug: "circuit-braker-io",
    title: "Circuit Braker IO",
    summary:
      "An interactive playground for modelling distributed-systems failure modes with animated circuit breakers.",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Circuit Braker IO visualizes network resilience patterns — timeouts, retries, circuit breakers, bulkheads — as an interactive diagram. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Animate a service mesh, inject failures, and watch backpressure propagate in real time.\n\nCras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.",
    role: "Creator",
    stack: ["Svelte", "SVG", "d3", "Canvas"],
    startDate: "2025-02-01",
    endDate: "2025-05-15",
    images: ["/images/circuit-braker.svg"],
    featured: false,
  },
  {
    slug: "goblin-market",
    title: "Goblin Market",
    summary:
      "A whimsical retail experience — browsable catalogue, cart, and checkout for a fictional fantasy goods shop.",
    description:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Goblin Market is an e-commerce reference build for a fantasy goods storefront. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. It covers product discovery, a persistent cart, promo codes, and a simulated checkout flow with order receipts.\n\nCurabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    role: "Full-Stack Engineer",
    stack: ["Astro", "PostgreSQL", "Stripe", "TypeScript"],
    startDate: "2025-07-01",
    endDate: "2025-09-01",
    links: [
      { label: "Storefront", url: "https://example.com/goblin" },
      { label: "Repo", url: "https://github.com/example/goblin-market" },
    ],
    featured: true,
  },
  {
    slug: "moth-cli",
    title: "Moth CLI",
    summary:
      "A terminal file-renamer and batch utility with a colour-coded diff preview and dry-run mode.",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Moth CLI is a Swiss-army text utility for the terminal: batch renaming, find-and-replace across files, and templated output, all with a live diff preview and a safe dry-run default.\n\nCras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.",
    role: "Maintainer",
    stack: ["Rust", "clap", "regex", "serde"],
    startDate: "2023-02-01",
    endDate: "2023-10-30",
    links: [{ label: "Source", url: "https://github.com/example/moth-cli" }],
    featured: false,
  },
];
