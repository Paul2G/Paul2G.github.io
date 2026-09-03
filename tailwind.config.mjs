// @ts-check
//
// Tailwind CSS v4 is configured CSS-first via the `@theme` block in
// src/styles/global.css. This file is kept for project tooling that expects a
// JS config (e.g. editor plugins / Tailwind v3-style workflows) and mirrors the
// content sources. It is NOT auto-loaded by @tailwindcss/vite.
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,tsx,md,mdx}",
    "./astro.config.mjs",
  ],
};
