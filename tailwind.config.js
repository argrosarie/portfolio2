/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [
	// 	'./pages/**/*.{js,ts,jsx,tsx}',
	// 	'./src/components/**/*.{js,ts,jsx,tsx}',
	// ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}