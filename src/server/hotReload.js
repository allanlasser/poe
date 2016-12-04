// In development enviroments, use the Webpack dev server
// This allows us to hot-reload our components

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);

module.exports = function hotReload(app) {
  const isDev = process.env.NODE_ENV !== 'production';
  if (isDev) {
    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      stats: { colors: true },
      watchOptions: {
        aggregateTimeout: 300,
        poll: true,
      }
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  }
};
