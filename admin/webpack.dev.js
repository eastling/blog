const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 20161,
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor/manifest.json')
    }),
    new AddAssetHtmlPlugin({ filepath: require.resolve('./vendor/vendor.js') }),
  ]
  
});