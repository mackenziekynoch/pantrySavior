const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'pantrySavior.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules$/,
        include: path.join(__dirname, 'client'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/assets/index.html')
    })
  ]
};