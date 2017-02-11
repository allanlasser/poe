import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import RandomPoem from './components/poetry/RandomPoem';
import PoemContainer from './containers/PoemContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/poem/:title" component={PoemContainer} />
    <Route path="/random" component={RandomPoem} />
  </Route>
);
