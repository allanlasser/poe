/* index.js
 *
 * This is the entry point. Here, we mount the root app to the root element.
 *
 */

import React from 'react';
import { render } from 'react-dom';

import App from './js/App';

const rootNode = document.getElementById('root');

render(<App />, rootNode);
