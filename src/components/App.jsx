import React, { PropTypes } from 'react';

const App = ({children}) => (
  <div className="sans-serif" id="app">
      {children}
  </div>
);

App.proptypes = { children: PropTypes.node };

export default App;
