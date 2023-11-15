/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#002dff",

          "secondary": "#008419",

          "accent": "#00d500",

          "neutral": "#1f1707",

          "base-100": "#fefdff",

          "info": "#00b3ff",

          "success": "#00ac87",

          "warning": "#e21700",

          "error": "#ff4372",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

