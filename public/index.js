/* index.js
 *
 * This is the entry point. Here, we mount the root app to the root element.
 *
 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './js/App';

const root = document.getElementById('root');

render(<AppContainer><App /></AppContainer>, root);

if (module.hot) {
  module.hot.accept('./js/App', () => {
    const NextApp = require('./js/App').default;
    render(<AppContainer><NextApp /></AppContainer>, root);
  });
}
