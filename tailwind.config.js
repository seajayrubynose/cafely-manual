module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e89700", // our primary orange
        brown: {
          100: "#c09A6D",
          200: "#573F27",
          300: "#3b2d26", // my fave brown
        },
        darkGray: "#282f42",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
      backgroundColor: ["active"],
      textColor: ["active"],
      opacity: ["disabled"],
      outline: ["active"],
    },
  },
  plugins: [],
};
