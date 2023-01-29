/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				"background-photo": "url('../assets/bg.jpg')",
			},
		},
	},
	plugins: [],
};
