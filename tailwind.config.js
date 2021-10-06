const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}'
    ],
    theme: {
        colors: {
            'alink': '#c7528a',
            'alink-hover': 'rgb(253, 168, 137)',
            purple: colors.purple,
            indigo: colors.indigo,
            green: colors.green,
            gray: colors.gray,
            blu: colors.blue
        }
    }
}