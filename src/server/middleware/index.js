'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const webpack = require('webpack');
const webpackConfig = require('../../../webpack.config.js');
const compiler = webpack(webpackConfig);

const match = require('react-router').match;
const routes = require('../../client/routes');
const renderToString = require('react-dom').renderToString;
const HTML = require('../../client/components/HTML');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;
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
  app.use(function(req, res, next) {
    console.log(req.url);
    console.log(routes);
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
      console.log('Entered Match');
      console.log(error);
      console.log(redirectLocation);
      console.log(renderProps);
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        res.send('<!doctype html>' + renderToString(<HTML />));
      } else {
        next();
      }
    });
  });
  app.use(session({
    store: new RedisStore({
        'url': app.get('redis')
    }),
    secret: 'science rules',
  }));
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
