/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        vh: "100vh",
      },
      colors: {
        blue: {
          500: "#3b82f6", // Substitua pela sua cor azul desejada
        },
      },
    },
  },
  plugins: [],
};
