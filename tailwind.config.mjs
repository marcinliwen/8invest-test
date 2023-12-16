/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
			  xl: "1440px",
			},
		  },
		  fontSize: {
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			'2xl': '1.375rem',
			'3xl': '1.5rem',
			'4xl': '2.5rem',
		  },
		  extend: {
			colors:{
				main:{
					600: "#2C39D8",
					700: "#1E2ABC",
					800: "#1823A7",
					900: "#010A2F"
				},
				second:{
					200: "#ACB2FD",
					300: "#DFE1FF",
					400: "#C6CAFF",
					500: "#D4D6FD",
					600: "#8D95F9"
				},
				neutral: {
					100: "#D9D9D9"
				}
				
			}
		},
	},
	plugins: [],
}
