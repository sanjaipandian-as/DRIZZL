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
                    DEFAULT: '#F3EFE6',
                    50: '#FCFAF7',
                    100: '#F9F7F2',
                    200: '#F3EFE6',
                    300: '#E6DBC9',
                    400: '#D9C7AC',
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
                    950: '#1A120B',
                },
                gold: {
                    400: '#D4A574',
                    500: '#C89968',
                    600: '#B8865D',
                },
                forest: {
                    50: '#E7F0ED',
                    100: '#CFE0DA',
                    200: '#9FC1B6',
                    300: '#6FA192',
                    400: '#3F826D',
                    500: '#266250',
                    600: '#195E47',
                    700: '#114232',
                    800: '#0D3326',
                    900: '#08221A',
                    950: '#03110D',
                },
                rust: {
                    50: '#FDF3F2',
                    100: '#FBE6E4',
                    200: '#F5CDC9',
                    300: '#EEB3AE',
                    400: '#E39992',
                    500: '#D2665C',
                    600: '#9B3329',
                    700: '#7A2820',
                    800: '#5E1F18',
                    900: '#421511',
                    950: '#260A08',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-bebas)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
                script: ['var(--font-dancing)', 'cursive'],
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
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'splash': 'splash 2s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'spin-slow': 'spin 20s linear infinite',
                'marquee': 'marquee 25s linear infinite',
            },
        },
    },
    plugins: [],
};

export default config;