/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#f1ebe9",
        txt: "#170a07",
        primary: "#5e4136",
        secondary: "#c59c8c",
        accent: "#975c44",
        dark: "#16100e",
        "d-txt": "#f8ebe8",
        "d-primary": "#c9aca1",
        "d-secondary": "#734a3a",
        "d-accent": "#bb7f68",
      },
    },
  },
  plugins: [],
};
