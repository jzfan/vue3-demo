const purgecss = require('@fullhuman/postcss-purgecss')({

    content: [
        './src/**/*.html',
        './src/**/*.vue',
    ],
    // whitelist: ['mdi-check'],
    // whitelistPatterns: [/el-.+$/, /^area/, /^vue-treeselect/],
    // whitelistPatternsChildren: [/el-.+$/],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})


module.exports = {
    plugins: [
        require('tailwindcss'),
        // require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
}