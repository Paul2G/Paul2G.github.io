function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (variable.startsWith("--rgb")) {
      if (opacityValue === undefined) {
        return `rgb(var(${variable}))`;
      }
      return `rgb(var(${variable}) / ${opacityValue})`;
    }

    if (opacityValue === undefined) {
      return `var(${variable})`;
    }

    return `rgb(fromvar(${variable}) r g b / ${opacityValue})`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Archivo Black", "sans-serif"],
        main: ["Bitter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: withOpacityValue("--rgb-value-primary"),
          50: withOpacityValue("--rgb-value-primary-50"),
          100: withOpacityValue("--rgb-value-primary-100"),
          200: withOpacityValue("--rgb-value-primary-200"),
          300: withOpacityValue("--rgb-value-primary-300"),
          400: withOpacityValue("--rgb-value-primary-400"),
          500: withOpacityValue("--rgb-value-primary-500"),
          600: withOpacityValue("--rgb-value-primary-600"),
          700: withOpacityValue("--rgb-value-primary-700"),
          800: withOpacityValue("--rgb-value-primary-800"),
          900: withOpacityValue("--rgb-value-primary-900"),
          950: withOpacityValue("--rgb-value-primary-950"),
        },
        secondary: {
          DEFAULT: withOpacityValue("--rgb-value-secondary"),
          50: withOpacityValue("--rgb-value-secondary-50"),
          100: withOpacityValue("--rgb-value-secondary-100"),
          200: withOpacityValue("--rgb-value-secondary-200"),
          300: withOpacityValue("--rgb-value-secondary-300"),
          400: withOpacityValue("--rgb-value-secondary-400"),
          500: withOpacityValue("--rgb-value-secondary-500"),
          600: withOpacityValue("--rgb-value-secondary-600"),
          700: withOpacityValue("--rgb-value-secondary-700"),
          800: withOpacityValue("--rgb-value-secondary-800"),
          900: withOpacityValue("--rgb-value-secondary-900"),
          950: withOpacityValue("--rgb-value-secondary-950"),
        },
        accent: {
          DEFAULT: withOpacityValue("--rgb-value-accent"),
          50: withOpacityValue("--rgb-value-accent-50"),
          100: withOpacityValue("--rgb-value-accent-100"),
          200: withOpacityValue("--rgb-value-accent-200"),
          300: withOpacityValue("--rgb-value-accent-300"),
          400: withOpacityValue("--rgb-value-accent-400"),
          500: withOpacityValue("--rgb-value-accent-500"),
          600: withOpacityValue("--rgb-value-accent-600"),
          700: withOpacityValue("--rgb-value-accent-700"),
          800: withOpacityValue("--rgb-value-accent-800"),
          900: withOpacityValue("--rgb-value-accent-900"),
          950: withOpacityValue("--rgb-value-accent-950"),
        },
        surface: {
          DEFAULT: withOpacityValue("--rgb-value-surface"),
          0: withOpacityValue("--rgb-value-surface-0"),
          50: withOpacityValue("--rgb-value-surface-50"),
          100: withOpacityValue("--rgb-value-surface-100"),
          200: withOpacityValue("--rgb-value-surface-200"),
          300: withOpacityValue("--rgb-value-surface-300"),
          400: withOpacityValue("--rgb-value-surface-400"),
          500: withOpacityValue("--rgb-value-surface-500"),
          600: withOpacityValue("--rgb-value-surface-600"),
          700: withOpacityValue("--rgb-value-surface-700"),
          800: withOpacityValue("--rgb-value-surface-800"),
          900: withOpacityValue("--rgb-value-surface-900"),
          950: withOpacityValue("--rgb-value-surface-950"),
          1000: withOpacityValue("--rgb-value-surface-1000"),
        },
        "surface-contrast": withOpacityValue("--rgb-value-surface-contrast"),
      },
    },
  },
  plugins: [],
};
