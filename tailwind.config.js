/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // TOONO Store — Warm Market
        ivory:   "#FBF9F4",
        ink:     "#1F2421",
        clay:    "#C0562F", // terracotta, energy/sale
        forest:  "#3A6B4F", // trust
        sand:    "#E8DDC7",
        gold:    "#D4A017",
        // TOONO Logistics — Freight Trust
        navy:    "#0E2A47",
        steel:   "#12405F",
        action:  "#2E6FD6", // action blue
        amber:   "#FFB020", // safety accent
        coolwhite: "#F4F6F9",
        slate2:  "#667788",
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Instrument Serif"', "serif"],
        sans: ['"Space Grotesk"', '"Inter"', "system-ui", "sans-serif"],
        display: ['"Archivo"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};