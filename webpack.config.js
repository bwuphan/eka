const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.js'),

  output: {
    path: path.join(__dirname, '/client/dist/'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015", "stage-2"],
        plugins: ["transform-object-rest-spread"]
      }
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    })
  ],
};