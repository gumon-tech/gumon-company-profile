/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (CSS variables defined in globals.css)
        bg0: "rgb(var(--bg0) / <alpha-value>)",
        bg1: "rgb(var(--bg1) / <alpha-value>)",
        surf: "rgb(var(--surf) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",

        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",

        info: "rgb(var(--info) / <alpha-value>)",
        warn: "rgb(var(--warn) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--line) / 0.85), 0 18px 50px rgba(0,0,0,0.35)",
        // restrained, institutional
        soft: "0 0 0 1px rgb(var(--line) / 0.85), 0 18px 50px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "24px",
      },
      letterSpacing: {
        over: "0.28em",
      },
    },
  },
  plugins: [],
};

module.exports = config;
