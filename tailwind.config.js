/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#00FF62",
        },
        red: {
          500: "#FF4D4D",
        },
        gray: {
          800: "#212121",
          700: "#666666",
          600: "#999999",
          500: "#CCCCCC",
          100: "#EEEEEE",
        },
      },
      fontSize: {
        sm: ["12px", "24px"],
        base: ["15px", "24px"], 
        md: ["16px", "24px"],
        lg: ["18px", "28px"],
      },
      dropShadow: {
        custom: "0 0 15px rgba(250, 250, 250, 0.15)",
      },
      backgroundImage: {
        'home': "url('/src/assets/bgHome.svg')"
      },
      keyframes:{
        scrollRight: {
          from: { transform: "translateX(0%)"},
          to: { transform: "translateX(-200%)"},
        },
        scrollLeft: {
          from: { transform: "translateX(-200%)"},
          to: { transform: "translateX(0%)"},
        },
      },
      animation: {
        "scrollRight": "scrollRight 100s linear infinite",
        "scrollLeft": "scrollLeft 100s linear infinite",
      }
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
