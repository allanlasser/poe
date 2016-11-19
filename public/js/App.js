/* App.js
 *
 * This is the root React component.
 */

import React, { PropTypes } from 'react';

const App = ({children}) => (
  <div>
    <h1>🚀  Ready for liftoff!</h1>
    <hr />
    {children}
  </div>
);

App.proptypes = { children: PropTypes.node };

export default App;
