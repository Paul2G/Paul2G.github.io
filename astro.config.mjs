// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
//
// `base` is derived from the PUBLIC_BASE env var so the deployment root can be
// configured per-environment (e.g. `/<repo>/` for a project site on GitHub
// Pages, or `/` for a user/organization root site).
const base = process.env.PUBLIC_BASE ?? "/";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL ?? "https://paul2g.github.io",
  base,
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
