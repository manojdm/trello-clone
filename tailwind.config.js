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
      backgroundColor: {
        blue_denim: "#6F8FAF",
        blue_cerulean_forest: "#6d9bc3",
        black_semi_transparent: "rgba(0, 0, 0, 0.5)",
      },
      colors: {
        blue_denim: "#6F9FAF",
        blue_cerulean_forest: "#6d9bc3",
        black_semi_transparent: "rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        slideIn: {
          "0%": { right: "-100%" },
          "25%": { right: "-75%" },
          "50%": { right: "-50%" },
          "75%": { right: "-25%" },
          "100%": { right: "0px" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-in forwards",
      },
    },
  },
  plugins: [],
};
