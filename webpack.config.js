const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8080;
const publicPath = `http://localhost:${port}/build`;
module.exports = {
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js',
    publicPath: `http://localhost:${port}/build/`,
  },
  devServer: {
    publicPath,
    inline: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'index.js', 'index.jsx', '.json', '.css', 'index.json'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.template.html',
      filename: 'index.html', // relative to root of the application
      inject: 'body',
    }),
  ],
};
