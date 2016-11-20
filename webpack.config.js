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
      // { test: /\.css/, loader: "style-loader!css-loader" },
    ],
  },
  // plugins: [
  //   new ExtractTextPlugin("style.css", {
  //     allChunks: true
  //   })
  // ]
};
