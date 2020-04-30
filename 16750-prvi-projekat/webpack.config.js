const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill','./src/index.js'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist"
     },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};