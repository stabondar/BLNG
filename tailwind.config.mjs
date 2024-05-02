/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: 
		{
			colors: 
			{
				black: 'rgba(0, 0, 0, .8)',
				white: '#F5F5F5',
			}
		},
	},
	plugins: [],
}
