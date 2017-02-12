import React, { PropTypes } from 'react';

const Poem = ({poem}) => (
  <div className="poem">
    <h1 className="title">{poem.title}</h1>
    <p className="author">by {poem.author}</p>
    <div className="lines serif mv5">
      {poem.lines.map((line, i) => (
        <p key={'line-' + i}>
          <span className="gray f6 mr2" style={{minWidth: '1em'}}>{i + 1}</span>
          {line}
        </p>
      ))}
    </div>
  </div>
);

Poem.propTypes = {
  poem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    lines: PropTypes.array.isRequired,
    linecount: PropTypes.number.isRequired
  }).isRequired,
};

export default Poem;
