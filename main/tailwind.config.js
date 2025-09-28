import { icon } from "@fortawesome/fontawesome-svg-core";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hebrew: ["system-ui", "-apple-system", "sans-serif"],
        logoFont: ["'Cormorant Unicase'", "serif"],
      },
      colors: {
        mainLogo: "#354f52", // add your hex code here
        mainLogoHover: "#003049",
        footerBackground: "#edede9",
        headerBackground: "#edede9",
        mainBackground: "#edede9",
        iconColor: "#b0c4b1",
      },
    },
  },
  plugins: [],
};
