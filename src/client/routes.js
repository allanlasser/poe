import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import App from './components/App';

const Home = () => (
  <div className="home">
    <p>This is the Launchpad home page.</p>
    <Link to="/about">About</Link>
  </div>
);

const About = () => (
  <div className="about">
    <p>This is the Launchpad about page.</p>
    <Link to="/">Home</Link>
  </div>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
  </Route>
);
