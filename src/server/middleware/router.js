import React from 'react';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../../client/store';
import routes from '../../client/routes';
import HTML from '../../client/components/HTML';

module.exports = function() {
  return function(req, res, next) {
    const memoryHistory = createMemoryHistory(req.url);
    const store = configureStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store);
    match({history, routes, location: req.url}, (error, redirectLocation, renderProps) => {
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
  };
};
