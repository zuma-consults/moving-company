/** @type {import('tailwindcss').Config} */
export default {
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
      colors: {
        mc: {
          primary1: "#1C58D7",
          primary2: "#F1C644",
          "#1c58d8": "#1c58d8",
          "#27272B": "#27272B",
          "#898989": "#898989",
          "#1C58D7": "#1C58D7",
        },
      },
    },
  },
  plugins: [],
};
