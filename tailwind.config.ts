import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    50: '#FDFCFB',
                    100: '#F5F1ED',
                    200: '#EBE4DC',
                    300: '#E0D6CB',
                },
                coffee: {
                    50: '#F5E6D3',
                    100: '#E8D4B8',
                    200: '#D4A574',
                    300: '#C89968',
                    400: '#B8865D',
                    500: '#A67C52',
                    600: '#8B6846',
                    700: '#6B4E35',
                    800: '#4A3424',
                    900: '#2D1F16',
                },
                gold: {
                    400: '#D4A574',
                    500: '#C89968',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-bebas)', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'splash': 'splash 2s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                splash: {
                    '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
                    '50%': { transform: 'scale(1.05) rotate(2deg)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
