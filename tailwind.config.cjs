/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa'
			},
			fontFamily: {
				body: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'.output-display': {
							backgroundColor: theme('colors.gray.100'),
							color: theme('colors.gray.800'),
							borderRadius: theme('borderRadius.lg'),
							padding: theme('spacing.4'),
							marginTop: theme('spacing.4'),
							marginBottom: theme('spacing.4'),
							boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
						},
						'.output-display pre': {
							color: theme('colors.gray.800'),
							backgroundColor: 'transparent',
							padding: '0',
							margin: '0',
							border: 'none',
						},
					},
				},
				dark: {
					css: {
						'.output-display': {
							backgroundColor: theme('colors.gray.800'),
							color: theme('colors.gray.200'),
						},
						'.output-display pre': {
							color: theme('colors.gray.200'),
						},
					},
				},
			}),
		}
	},
	plugins: [require('@tailwindcss/typography')]
}