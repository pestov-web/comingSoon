import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#f36a08",
      green: "#13ce66",
      yellow: "#ffc82c",
    },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
    },
    plugins: [
      require("@tailwindcss/forms"),
      // ...
    ],
  },
};
