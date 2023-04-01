module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: ["16px", "24px"],
      },
      fontFamily: {
        sans: ["Euclid", "Roboto", "sans-serif"],
        euclid: ["Euclid"],
      },
    },
  },
  transitionProperty: {
    rotate: "rotate",
    outline: "outline",
  },
  plugins: [],
  fontFamily: {
    display: ["Oswald"],
    body: ['"Open Sans"'],
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
      underline: ["group-hover"],
    },
  },
};
