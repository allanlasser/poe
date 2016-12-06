import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom';

const HTML = ({component}) => {
  const root = component ? renderToString(component) : '';
  return (
    <html>
      <head>
        <title>Launchpad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <h1>Butts</h1>
        <div id="root" dangerouslySetInnerHTML={{__html: root}}></div>
        <script type="text/javascript" src="/main.js"></script>
      </body>
    </html>
  );
};

HTML.propTypes = {
  component: PropTypes.node
};

export default HTML;
