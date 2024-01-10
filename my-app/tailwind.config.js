/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 15px 5px rgba(59, 130, 246, 0.5)",
      },
      colors: {
        "header-blue": "#0A4DA2",
        "header-light": "#FFFFFF", //Default Categories
        "dark-blue": "#093B7B", //Catergories Hover
      },
    },
  },
  plugins: [],
};
