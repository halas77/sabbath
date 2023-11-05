import type { Config } from 'tailwindcss'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#1D5879',
        secondary: '#2EC0BB',
        heading: '#233036',
        body: '#667074',
        light: '#F6F6F6',
        yellowLight: '#FFF309',
        greenLight: '#CCF0EE',
        purpleLight: '#AEA3E1'
      }
    },
  },
  plugins: [],
};
