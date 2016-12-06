'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

import React from 'react';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../../client/store';
import routes from '../../client/routes';
import HTML from '../../client/components/HTML';

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;
  app.use(function(req, res, next) {
    const memoryHistory = createMemoryHistory(req.url);
    const store = configureStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store);
    match({history, routes, location: req.url}, (error, redirectLocation, renderProps) => {
      console.log('Entered Match');
      console.log(error);
      console.log(redirectLocation);
      console.log(renderProps);
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        res.send('<!doctype html>' + renderToString(<HTML content={content} store={store} />));
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
