/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#00FF38",
                "whatsapp": "#1ED760",
                "background-light": "#f6f8f7",
                "background-dark": "#000000",
                "neutral-light": "#C9C9C9",
                "neutral-dark": "#8F8F8F",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
        },
    },
    plugins: [],
}
