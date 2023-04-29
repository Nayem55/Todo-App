/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   daisyui:{
    themes: [
      {
        mytheme: {
          primary: "#D4D9E3",

          secondary: "#3A4256",

          accent: "#f5760e",

          neutral: "#191D24",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#f62e36",
        },
      },
    ]
  },
    theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

