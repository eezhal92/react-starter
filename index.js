const { resolve } = require('path');
const express = require('express');
const app = express();

app.use(express.static(resolve(__dirname, './public')));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('./webpack.config');

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    inline: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    contentBase: resolve(__dirname, '../public'),
  }));
}

const renderPage = () => (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Hello</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/app.js"></script>
  </body>
  </html>
`);

app.use('*', (req, res) => {
  res.send(renderPage());
});

const port = 3001;

module.exports = app.listen(port, () => console.log(`listening on port : ${port}`));
