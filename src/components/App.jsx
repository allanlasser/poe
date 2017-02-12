import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({children}) => (
  <div className="serif measure-wide center mh2" id="app">
    <header className="flex justify-between items-baseline pv4 mb2">
      <Link to="/" className="b green hover-black-90 link f4">You Don’t Know Poe</Link>
      <Link to="/about" className="green hover-black-90 link">About</Link>
    </header>
    {children}
  </div>
);

App.propTypes = { children: PropTypes.node };

export default App;
