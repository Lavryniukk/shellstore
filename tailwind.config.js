/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'sea': {
					'50': '#f1f9fe',
					'100': '#e3f1fb',
					'200': '#c0e4f7',
					'300': '#88d0f1',
					'400': '#3db3e6',
					'500': '#219fd6',
					'600': '#1380b6',
					'700': '#116693',
					'800': '#12577a',
					'900': '#144866',
					'950': '#0e2e43',
				},
				
			}
		},


	},
	plugins: []
};
