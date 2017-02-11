import React, { PropTypes } from 'react';

const Poem = ({poem}) => (
  <div className="poem">
    <h1 className="title">{poem.title}</h1>
    <p className="author">by {poem.author}</p>
    <div className="lines">
      {poem.lines.map((line, i) => (
        <p key={'line-' + i}>{line}</p>
      ))}
    </div>
  </div>
);

Poem.propTypes = {
  poem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    lines: PropTypes.array.isRequired,
    lineCount: PropTypes.number.isRequired
  }).isRequired,
};

export default Poem;
