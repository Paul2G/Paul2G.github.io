/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        sans: ['"Space Grotesk Variable"', "sans-serif"],
      },
      colors: {
        primary: "#0066FF",
        secondary: "#121212",
        tertiary: "#F5F5F5",
      },
      animation: {
        "cursor-blink": "cursor-blink 1s step-end infinite",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
