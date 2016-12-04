/* index.js
 *
 * This is the entry point. Here, we mount the root app to the root element.
 *
 */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './styles/app.css';
import App from './components/App';

const root = document.getElementById('root');

render(<AppContainer><App /></AppContainer>, root);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(<AppContainer><NextApp /></AppContainer>, root);
  });
}
