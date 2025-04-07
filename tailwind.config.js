export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            boxShadow: {
                'cartoon': '0 4px 6px rgba(50, 50, 93, 0.25), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 -3px 0 rgba(0, 0, 0, 0.1)',
                'cartoon-hover': '0 7px 14px rgba(50, 50, 93, 0.25), 0 3px 6px rgba(0, 0, 0, 0.08), inset 0 -3px 0 rgba(0, 0, 0, 0.1)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '2rem',
            }
        },
    },
    plugins: [],
};