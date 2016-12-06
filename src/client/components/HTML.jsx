import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom';

const HTML = ({content}) => {
  const root = content ? content : '';
  return (
    <html>
      <head>
        <title>Launchpad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{__html: root}}></div>
        <script type="text/javascript" src="/main.js"></script>
      </body>
    </html>
  );
};

HTML.propTypes = {
  component: PropTypes.string
};

export default HTML;
