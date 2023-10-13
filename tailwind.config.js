/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "330px",
      // => @media (min-width: 330px) { ... }

      nav: "362px",

      xs: "475px",
      // => @media (min-width: 475px) { ... }

      form: "330px",
      // => @media (min-width: 310px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "2000px",
      // => @media (min-width: 2000px) { ... }

      extend: {},
    },
  },
  plugins: [],
};
