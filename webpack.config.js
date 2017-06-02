var path = require('path');
var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname + "/src/main.js"),
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {compact: false},
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: "game of life",
      template: "./index.html"
    }),
    new HotModuleReplacementPlugin()
  ]
};

