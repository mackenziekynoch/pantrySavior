const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'client/pantry': './client/pantry.js',
    'client/recipe': './client/recipe.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  // entry: './client/index.js',
  // output: {
  //   filename: 'pantrySavior.js',
  //   path: path.join(__dirname, 'public')
  // },
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
      filename: 'pantry.html',
      inject: false,
      template: path.join(__dirname, 'client/assets/pantry.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'recipes.html',
      inject: false,
      template: path.join(__dirname, 'client/assets/recipes.html')
    }),
  ]
};