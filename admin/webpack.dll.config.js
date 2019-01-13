const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    },
    entry: {
        react: ['react', 'react-dom', '@babel/register', 'antd',
        'axios', 'mobx', 'mobx-react', 'codemirror', 'react-codemirror', 'react-markdown',
        'react-router-dom'] 
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'vender.dll.js', 
        library: '_dll_verder' //全局变量名称
    },
    module: {
      rules: [
        {
          test: /\.es6$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ['es2015']
          }
        }
      ],
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin({}),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      // new UglifyJSPlugin(),
      // new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DllPlugin({
          name: '_dll_verder', //和output.library中一致，也就是输出的manifest.json中的 name值
          path: path.join(__dirname, 'public', 'admin.manifest.json')
      })
    ],
    externals: ['express']
}
