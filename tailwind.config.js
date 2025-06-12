import {
  heroui
} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#FFE700",
            secondary: "#FFC938",
            success: "#383DC7",
            danger: "#DD223E",
            warning: "#C76F38",
            background: "#FFFEDA"
          }
        },
        dark: {
          colors: {
            primary: "#FF9A00",
            secondary: "#FFC938",
            success: "#383DC7",
            danger: "#DD223E",
            warning: "#C76F38",
            background: "#FFFEDA"
          }
        },
      },
    }),
  ]
}