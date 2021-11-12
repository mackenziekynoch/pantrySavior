const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'pantry/pantry': './client/pantry/pantry.js',
    'recipe/recipe': './client/recipe/recipe.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
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
      },
      {
        test: /\.s?css$/,
        include: path.join(__dirname, 'client/assets'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'pantry/index.html',
      inject: false,
      template: path.join(__dirname, 'client/pantry/assets/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'recipe/index.html',
      inject: false,
      template: path.join(__dirname, 'client/recipe/assets/index.html')
    }),
  ]
};