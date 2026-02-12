/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: "#0E1116",
        bg1: "#121820",
        surf: "#151E24",
        ink: "#D6DBD8",
        mist: "#97A2A0",
        line: "rgba(214,219,216,0.12)",
        olive: "#8FAF9C",
        olive2: "#1B2320",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214,219,216,0.08), 0 20px 60px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "28px",
      },
      letterSpacing: {
        over: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
