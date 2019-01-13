const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//  const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          },
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader", options: {
            strictMath: true,
            noIeCompat: true
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.less']
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(),
    //  new BundleAnalyzerPlugin(),
    //  new webpack.DllReferencePlugin({
    //    manifest: require('./public/admin.manifest.json')
    // })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({}),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devServer: {
    port: 20161,
    publicPath: '/public/',
    historyApiFallback: {
      index: 'index.html',
    },
    hot: true,
    disableHostCheck: true
  },
};