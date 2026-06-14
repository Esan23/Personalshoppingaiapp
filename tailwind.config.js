/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Brand breakpoints (per design system)
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Brand gradient stops
        brand: {
          indigo: "#312E81",
          iris: "#4338CA",
          blue: "#2563EB",
          cyan: "#0891B2",
          teal: "#14B8A6",
          emerald: "#34D399",
          amber: "#FBBF24",
        },
        // Neutrals
        ink: "#0F172A",
        muted: "#64748B",
        // Functional
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#2563EB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"DM Serif Display"', "Georgia", "serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1" }],
        h1: ["3rem", { lineHeight: "1.2" }],
        h2: ["2.25rem", { lineHeight: "1.25" }],
        h3: ["1.5rem", { lineHeight: "1.35" }],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #312E81 0%, #4338CA 16%, #2563EB 33%, #0891B2 50%, #14B8A6 66%, #34D399 83%, #FBBF24 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #4338CA 0%, #2563EB 35%, #0891B2 65%, #14B8A6 100%)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 12s ease infinite",
        "fade-rise": "fade-rise 0.6s cubic-bezier(0.4,0,0.2,1) both",
        shimmer: "shimmer 1.8s infinite",
      },
    },
  },
  plugins: [],
};
