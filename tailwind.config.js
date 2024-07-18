module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    // enable dark mode via class strategy
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                black: '#09090c',
                darkGray: '#121212',
                 customDarkBlue: '#154c79',
                 customLightBlue: '#20689a',
                 custom: '0 0 10px rgba(0, 0, 0, 0.132)',
                brightRed: 'hsl(12, 88%, 59%)',
                brightRedLight: 'hsl(12, 88%, 69%)',
                brightRedSupLight: 'hsl(12, 88%, 95%)',

                darkBlue: 'hsl(228, 39%, 23%)',
                darkGrayishBlue: 'hsl(227, 12%, 61%)',
                veryDarkBlue: 'hsl(233, 12%, 13%)',
            },
            backgroundImage: {
                'bg-image': "url('./assets/images/adminbg-2.jpg')",
              }
        },
    },
    plugins: [],
}
