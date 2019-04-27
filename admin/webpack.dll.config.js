const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: ['react', 'react-dom', 'antd', 'axios', 'mobx', 'mobx-react', 'codemirror', 'react-router-dom'],
  output: {
      path: path.resolve(__dirname, 'vendor'),
      filename: 'vendor.js', 
      library: "vendor_lib_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "vendor_lib_[hash]",
      path: path.join(__dirname, 'vendor/manifest.json'),
    })
  ]
}
