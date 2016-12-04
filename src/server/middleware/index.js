'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;
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
