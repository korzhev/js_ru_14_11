const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      // { test: /\.css/, loader: ExtractTextPlugin.extract("style-loader!css-loader") },
      { test: /\.css/, loader: 'style-loader!css-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      {
        test: /\.png$/,
        loader: 'file?name=[name].[ext]',
      }, {
        test: /\.jpg$/,
        loader: 'file?name=[name].[ext]',
      }
    ],
  },
  // plugins: [
  //   new ExtractTextPlugin("style.css", {
  //     allChunks: true
  //   })
  // ]
};
