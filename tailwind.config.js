/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './src/pages/**/*.{js,ts,jsx,tsx}',
  //   './src/components/**/*.{js,ts,jsx,tsx}',
  //   './src/lib/styles/**/*.{css,scss}',  // Ensure SCSS files are included
  // ],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA24C',  // IhPlug orange color
        secondary: '#fefefe',  // IhPlug white color
        gry: '#b7b7b7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default text font
        display: ['Poppins', 'sans-serif'],  // Special headings font
      },
    },
  },
  plugins: [],
};
