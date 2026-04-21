import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        adash: {
          emerald: "#10b981",
          deep: "#0f172a",
          navy: "#132238",
          mist: "#f8fafc",
          stone: "#e5eef3",
          violet: "#7c3aed",
          amber: "#f59e0b",
          coral: "#f43f5e",
          sky: "#0ea5e9",
          lime: "#84cc16"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 18px 70px rgba(15, 23, 42, 0.08)",
        card: "0 10px 35px rgba(15, 23, 42, 0.08)",
        glow: "0 0 50px rgba(16, 185, 129, 0.35)",
        "glow-violet": "0 0 50px rgba(124, 58, 237, 0.3)",
        "glow-amber": "0 0 50px rgba(245, 158, 11, 0.3)",
        "glow-sky": "0 0 50px rgba(14, 165, 233, 0.3)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(16, 185, 129, 0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(19, 34, 56, 0.12), transparent 34%)",
        "mesh-emerald":
          "radial-gradient(at 40% 20%, rgba(16,185,129,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(124,58,237,0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(14,165,233,0.1) 0px, transparent 50%)",
        "mesh-violet":
          "radial-gradient(at 0% 0%, rgba(124,58,237,0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(16,185,129,0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(14,165,233,0.08) 0px, transparent 50%)",
        "mesh-amber":
          "radial-gradient(at 100% 0%, rgba(245,158,11,0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(16,185,129,0.15) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(251,113,133,0.08) 0px, transparent 50%)",
        "mesh-sky":
          "radial-gradient(at 0% 0%, rgba(14,165,233,0.18) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(16,185,129,0.12) 0px, transparent 50%), radial-gradient(at 50% 0%, rgba(99,102,241,0.08) 0px, transparent 50%)",
        "mesh-coral":
          "radial-gradient(at 0% 0%, rgba(244,63,94,0.16) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(245,158,11,0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(124,58,237,0.1) 0px, transparent 50%)"
      },
      animation: {
        blob: "blob-morph 10s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-medium": "float-slow 4.5s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite alternate"
      },
      keyframes: {
        "blob-morph": {
          "0%, 100%": { borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%" },
          "33%": { borderRadius: "40% 60% 45% 55% / 45% 55% 40% 60%" },
          "66%": { borderRadius: "55% 45% 35% 65% / 55% 40% 60% 45%" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" }
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
