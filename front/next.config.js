const withPlugins = require('next-compose-plugins');
const fonts = require('next-fonts');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css')
const {
  WebpackBundleSizeAnalyzerPlugin
} = require('webpack-bundle-size-analyzer')
const { ANALYZE } = process.env

const nextConfig = {
   webpack (cfg) {
    if (ANALYZE) {
      cfg.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))
    }
    cfg.plugins = cfg.plugins.filter(
      (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
    )
    return cfg
  },
  // distDir: 'build',
};

module.exports = withPlugins([
  // [css],
  [sass],
  [fonts, {
    enableSvg: true,
  }],
], nextConfig);



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






