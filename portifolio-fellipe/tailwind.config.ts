import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#4ade80",
          500: "#22c55e",
          cyber: "#00ff41",
        },
        dark: {
          900: "#030712",
          800: "#080f12",
          700: "#0d1a14",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "Courier", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px #00ff41, 0 0 10px #00ff41" },
          "50%": { boxShadow: "0 0 20px #00ff41, 0 0 40px #00ff41" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
        "radial-green":
          "radial-gradient(ellipse at center, rgba(0,255,65,0.08) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-size": "60px 60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
