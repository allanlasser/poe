/* App.js
 *
 * This is the root React component.
 */

import React, { PropTypes } from 'react';

const App = ({children}) => (
  <div id="app">
    <h1>
      <span className="rocket">🚀</span>
      <span className="success">Ready for blastoff!</span>
    </h1>
    {children}
  </div>
);

App.proptypes = { children: PropTypes.node };

export default App;
