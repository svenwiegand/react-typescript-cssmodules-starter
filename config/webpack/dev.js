// development config
const merge        = require('webpack-merge');
const webpack      = require('webpack');
const {resolve}    = require('path');
const commonConfig = require('./common');
const outputPath   = resolve(__dirname, '../../public');
const publicPath   = '/';

module.exports = merge(commonConfig, {
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:3000',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx' // the entry point of our app
  ],
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
    publicPath: publicPath // necessary for HMR to know where to load the hot update chunks
  },
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: outputPath,
    publicPath: publicPath,
    port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
  externals: {
  }
});
