import serialize from 'serialize-javascript';

import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom';

const isDev = process.env.NODE_ENV === 'development';

const HTML = ({content, store}) => {
  const root = content ? content : '';
  let mainScriptSrc, mainStyleSrc;
  if (isDev) {
    mainScriptSrc = 'http://localhost:8080/assets/main.js';
    mainStyleSrc = '';
  } else {
    const webpackManifest = require('../../public/manifest.json');
    mainScriptSrc = webpackManifest['main.js'];
    mainStyleSrc = webpackManifest['main.css'];
  }
  return (
    <html>
      <head>
        <title>Launchpad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href={mainStyleSrc} />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{__html: root}}></div>
        <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
        <script type="text/javascript" src={mainScriptSrc}></script>
      </body>
    </html>
  );
};

HTML.propTypes = {
  content: PropTypes.string,
  store: PropTypes.object,
};

export default HTML;
