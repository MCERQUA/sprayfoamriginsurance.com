import type { Config } from "tailwindcss";

/* ============================================================
   DAIRY INSURANCE — "Fresh Pasture" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to pasture green (primary) / stream blue
   (secondary) / honey gold (accent).
   clay = pasture green · sage = stream blue · gold = honey
   cream = milk paper · sand = soft sage
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF9F4",
        sand: "#EEF2EA",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#2F6B3E",
          dark: "#21502E",
          light: "#4A8B58",
          50: "#EEF5EF",
          100: "#D6E8DA",
          200: "#AED0B7",
          300: "#82B58F",
          400: "#5A9B6C",
          500: "#4A8B58",
          600: "#2F6B3E",
          700: "#21502E",
          800: "#173820",
          900: "#0F2615",
        },
        sage: {
          DEFAULT: "#2E7BB5",
          dark: "#1F5E8C",
          light: "#5DA0CC",
          50: "#ECF4FA",
          100: "#D2E6F3",
          200: "#A6CEE4",
          300: "#5DA0CC",
          400: "#3E8DC0",
          500: "#2E7BB5",
          600: "#1F5E8C",
          700: "#174866",
        },
        gold: {
          DEFAULT: "#E0A82E",
          dark: "#B98416",
          light: "#F0C868",
          50: "#FCF5E6",
          100: "#F7E8C2",
          200: "#F0D386",
          300: "#E8B84B",
          400: "#E0A82E",
          500: "#C8921A",
          600: "#A37412",
        },
        espresso: "#1B2A22",
        cocoa: "#44544A",
        mocha: "#6E7B71",
        adobe: "#DCE6D8",
        adobeDark: "#C4D2BE",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF9F4 0%, #F1F5EC 40%, #EEF7EE 70%, #FBF9F4 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(74,139,88,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(46,123,181,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2F6B3E 0%, #4A8B58 100%)",
        "sage-gradient": "linear-gradient(135deg, #2E7BB5 0%, #5DA0CC 100%)",
        "gold-gradient": "linear-gradient(135deg, #E0A82E 0%, #F0C868 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(31, 80, 46, 0.22), 0 4px 12px -6px rgba(27, 42, 34, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(31, 80, 46, 0.28), 0 10px 30px -10px rgba(27, 42, 34, 0.10)",
        card: "0 2px 8px -2px rgba(27, 42, 34, 0.06), 0 1px 3px -1px rgba(27, 42, 34, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(31, 80, 46, 0.24), 0 8px 20px -8px rgba(27, 42, 34, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(31, 80, 46, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
