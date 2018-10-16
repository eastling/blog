const withSass = require('@zeit/next-sass')
// module.exports = withSass()

// const withCss = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
//     require.extensions['.css'] = (file) => { }
// }

// module.exports = withCss()

module.exports = withSass({
    cssModules: false,
    webpack: (config) => {
        return config
    }
})