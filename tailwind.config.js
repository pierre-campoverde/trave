module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: ["hover", "focus"],
      transitionProperty: {
        gradient: "backgroundImage",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: [],
};
