/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Lindaas Design Brand Colors (from existing site)
                'ld-black': '#000000',
                'ld-near-black': '#050505',
                'ld-dark-grey': '#111111',
                'ld-darker-grey': '#0A0A0A',
                'ld-white': '#FDFDFD',
                'ld-yellow': '#FFC700',
                'ld-yellow-bright': '#FFD700',
            },
            fontFamily: {
                'oswald': ['Oswald', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.7s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
