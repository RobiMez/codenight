/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Lexend', 'sans-serif']
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
		logs: false
	}

};
