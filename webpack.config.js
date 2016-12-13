const { resolve, join } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: resolve(__dirname, './src/main.js'),
  output: {
    publicPath: 'http://localhost:30001',
    path: resolve(__dirname, './public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: join(__dirname, './src'),
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': process.env.NODE_ENV !== 'production' ? JSON.stringify('development') : JSON.stringify('production'),
      },
    }),
  ]
};

