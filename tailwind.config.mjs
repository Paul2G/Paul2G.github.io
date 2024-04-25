function withOpacityValue(variableName) {
	return ({ opacityVariable, opacityValue }) => {
	  if (opacityValue !== undefined) {
		return `rgb(var(${variableName}), ${opacityValue})`
	  }
  
	  if (opacityVariable !== undefined) {
		return `rgb(var(${variableName}), var(${opacityVariable}, 1))`
	  }
  
	  return `rgb(var(${variableName}))`
	}
  }


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {    
			fontFamily: {
				main: ['Quicksand', 'sans']
		  	},
			colors: {
				primary: {
					DEFAULT: withOpacityValue('--rgb-value-primary-300'),
					50: withOpacityValue('--rgb-value-primary-50'),
					100: withOpacityValue('--rgb-value-primary-100'),
					200: withOpacityValue('--rgb-value-primary-200'),
					300: withOpacityValue('--rgb-value-primary-300'),
					400: withOpacityValue('--rgb-value-primary-400'),
					500: withOpacityValue('--rgb-value-primary-500'),
					600: withOpacityValue('--rgb-value-primary-600'),
					700: withOpacityValue('--rgb-value-primary-700'),
					800: withOpacityValue('--rgb-value-primary-800'),
					900: withOpacityValue('--rgb-value-primary-900'),
					950: withOpacityValue('--rgb-value-primary-950'),
				},
			},
		},
	},
	plugins: [],
}
