/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        vh: "100vh",
        mdw: "200px", 
        mdh: "250px",
        xlw:"400px",
        xlh:"500px",
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
