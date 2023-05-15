/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        display: ["Bebas Neue", "cursive"],
        mono: ["Cascadia Code", "monospace"]
    },
    extend: {
            height: {
                '128': '32rem',
            },
            minHeight: {
                '3/4': '75%',
                '128': '32rem'
            }
        },
  },
  plugins: [require('daisyui')],
  daisyui: {
        logs: false,
        styled: true,
        base: true,
        utils: true,
        themes: [
            {
                gzo: {
                    primary: "#ffbb33",
                    secondary: "#ff8026",
                    accent: "#FFE603",
                    neutral: "#FFF8E7",
                    "base-100": "#0d0d0c",
                    "base-200": "#040205",
                    "info": "#FFE603",
                    "success": "#FFE226",
                    "warning": "#EFD7BB",
                    "error": "#E58B8B",
                }
            },
            "dark",
            "light",
            "garden",
            "cyberpunk",
        ]
    }
}
