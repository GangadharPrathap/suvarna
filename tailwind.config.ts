import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FCF4F6",
          100: "#F8E8EC",
          200: "#F2D5DD",
          300: "#E8B8C3",
          400: "#D99AA8",
          500: "#C97E90",
          600: "#B98598",
          700: "#984C62",
          800: "#633B4A",
          900: "#3D242E",
        },
        ivory: {
          50: "#FFFFFF",
          100: "#FFFDFB",
          200: "#FFF9F4",
          300: "#FBF3EB",
          400: "#F5EADF",
          500: "#EDE0D1",
        },
        gold: {
          100: "#FBF6E9",
          200: "#F4E7C4",
          300: "#E9D29B",
          400: "#D6B77A",
          500: "#C19C57",
          600: "#9E7B3B",
        },
        charcoal: {
          700: "#4D434E",
          800: "#383039",
          900: "#221C23",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(99, 59, 74, 0.06)",
        card: "0 10px 35px -5px rgba(99, 59, 74, 0.08), 0 2px 6px -1px rgba(99, 59, 74, 0.03)",
        glow: "0 0 35px rgba(214, 183, 122, 0.35)",
        gold: "0 4px 25px rgba(214, 183, 122, 0.25)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-gentle": "float 5s ease-in-out infinite alternate",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "flicker": "flicker 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        flicker: {
          "0%": { transform: "scaleY(1) scaleX(1) skewX(0deg)", opacity: "0.95" },
          "25%": { transform: "scaleY(1.08) scaleX(0.92) skewX(2deg)", opacity: "1" },
          "50%": { transform: "scaleY(0.95) scaleX(1.04) skewX(-1.5deg)", opacity: "0.88" },
          "75%": { transform: "scaleY(1.05) scaleX(0.96) skewX(1deg)", opacity: "0.98" },
          "100%": { transform: "scaleY(1) scaleX(1) skewX(0deg)", opacity: "0.92" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
