import serialize from 'serialize-javascript';

import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom';

const HTML = ({content, store}) => {
  const root = content ? content : '';
  return (
    <html>
      <head>
        <title>Launchpad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{__html: root}}></div>
        <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
        <script type="text/javascript" src="http://localhost:8080/assets/main.js"></script>
      </body>
    </html>
  );
};

HTML.propTypes = {
  content: PropTypes.string,
  store: PropTypes.object,
};

export default HTML;
