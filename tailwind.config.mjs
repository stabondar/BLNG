/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: 
	{
		extend: 
		{
			colors: 
			{
				black: 'var(--black)',
				white: 'var(--white)',
			}
		},
		screens: 
		{
			'tablet': {'max': '1280px'},
			'tablet-sm': {'max': '992px'},
			'md': {'max': '767px'},
			'sm': {'max': '480px'},
		},
		fontSize:
		{
			'50': '3.125rem !important',
			'30': '1.875rem !important',
			'28': '1.75rem !important',
			'24': '1.5rem !important',
			'22': '1.375rem !important',
			'16': '1rem !important',
			'14': '0.875rem !important',
			'12': '0.75rem !important',
		}
	},
	plugins: [],
}
