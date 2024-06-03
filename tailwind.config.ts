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
        'green-btn': '#CCEC60',
        'green-title-card': '#719d96',
      },
      maxWidth: {
        grid: '77.5rem',
        'text-hero': '66rem',
        'area-icons': '53.4375rem',
        'area-mockups': '59.625rem',
        'area-cards': '82.5rem',
      },
      height: {
        'section-hero': '54.625rem',
        'area-cards': '35.1rem',
      },
      backgroundImage: {
        'hero': "url('/bg-hero.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
