const withPlugins = require('next-compose-plugins');
const fonts = require('next-fonts');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css')

module.exports = withPlugins([
  [css],
  [sass],
  [fonts, {
    enableSvg: true,
  }]
]);



// module.exports = withFonts({
//   webpack(config, options) {
//     return config;
//   }
// });
// module.exports = withSass()

// const withCss = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
//     require.extensions['.css'] = (file) => { }
// }

// module.exports = withCss()






