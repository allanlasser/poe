/* App.js
 *
 * This is the root React component.
 */

import React, { PropTypes } from 'react';

const App = ({children}) => (
  <div>
    <h1>
      <span className="rocket">🚀</span>
      <span className="success">Ready for liftoff!</span>
    </h1>
    <hr />
    {children}
  </div>
);

App.proptypes = { children: PropTypes.node };

export default App;
