/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#0b0f0c',
        'charcoal-2': '#121813',
        'charcoal-3': '#1a211b',
        'charcoal-4': '#232b24',
        'amber': '#27d67a',
        'amber-dim': '#1aa564',
        'amber-faint': '#0d3b26',
        'steel': '#4a7fa5',
        'steel-dim': '#2e5470',
        'moss': '#2f7a4f',
        'rust': '#256542',
        'cream': '#e6efe8',
        'cream-dim': '#b1c2b8',
        'cream-faint': '#3a463f',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'display': ['Bebas Neue', 'Impact', 'sans-serif'],
        'body': ['DM Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 4s linear infinite',
        'flicker': 'flicker 8s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.9' },
          '97%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
