import React, { PropTypes } from 'react';

const App = ({children}) => (
  <div id="launchpad">
    <h1>Ready for liftoff!</h1>
    {children}
  </div>
);

App.proptypes = { children: PropTypes.node };

export default App;
