const path = require('path');

module.exports = {
  context: path.join(__dirname, ''),
  historyApiFallback: true,
  entry: ['./client/src/app.js'],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
    ],
  },
  output: {
    path: `${__dirname}/client/public`,
    filename: 'bundle.min.js',
  },
  devServer: {
    context: './',
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  eslint: {
    failOnWarning: false,
    failOnError: true,
  },
};