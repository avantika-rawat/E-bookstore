/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbrown: "#3D2514",
        beige: "#F2E7D0",
      },
    },
  },
  plugins: [scrollbar],
};
