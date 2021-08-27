const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => ({
  entry: __dirname + '/src/index.js',
  mode: env.mode,
  devtool: env.mode === 'production' ? false : 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: env.mode === 'production' ? 'lognetic.min.js' : 'lognetic.js',
    library: {
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            mangle: true,
            format: {
              comments: false
            }
          },
        }),
      ],
  },
  resolve: {
    modules: ['./node_modules', path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: []
});