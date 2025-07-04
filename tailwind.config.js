/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#4D4DFE',
                secondary: '#6366F1',
                accent: '#10B981',
                danger: '#EF4444',
                warning: '#F59E0B',
                info: '#3B82F6',
                success: '#22C55E',
                muted: '#9CA3AF',
                dark: '#111827',
                light: '#F3F4F6',
                background: '#F9FAFB',
                surface: '#FFFFFF',
                border: '#E5E7EB',
            },
            fontFamily: {
                mono: ['Roboto', 'monospace'],
                sans: ['Roboto', 'sans-serif'],
                serif: ['Roboto', 'sans-serif'],
                display: ['Roboto', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
            },
            gridTemplateRows: {
                'auto-1fr': 'auto 1fr',
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                card: '0 2px 8px rgba(0, 0, 0, 0.05)',
                modal: '0 10px 40px rgba(0, 0, 0, 0.1)',
                button: '0 4px 6px -1px rgba(0,0,0,0.1)',
            },
            transitionProperty: {
                width: 'width',
                spacing: 'margin, padding',
            },
        },
    },
    plugins: [],
};
