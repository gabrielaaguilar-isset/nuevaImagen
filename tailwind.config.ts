import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        black: '#010205',
        purple: '#6B2ADC',
        yellow: '#F2EB21',
        gray: '#C7C7C7'
      },
      animation:{
        
          'infinite-scroll': 'infinite-scroll 5s linear infinite',
        
      },
      keyframes:{
        'infinite-scroll':{
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
     
  
    },
    
  },
  plugins: [],
};
export default config;
