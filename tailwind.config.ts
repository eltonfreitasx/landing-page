import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1D3531',
        'green-border': '#2A4B46',
        'green-actived': '#5d8a83',
      },
      maxWidth: {
        grid: '77.5rem',
        'text-hero': '66rem'
      },
      height: {
        'section-hero': '54.625rem'
      }
    },
  },
  plugins: [],
};
export default config;
