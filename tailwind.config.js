/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          dim: "#AA8C2C",
          light: "#F3E5AB",
        },
        dark: {
          DEFAULT: "#5E4423",
          charcoal: "#261C10",
          glass: "rgba(31, 22, 12, 0.8)",
        },
        wa: "#25D366",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Cinzel", "serif"],
      },
      backgroundImage: {
        "hero-premium":
          "linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,1)), url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      },
    },
  },
  plugins: [],
};