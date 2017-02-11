import React, { PropTypes } from 'react';

const Poem = ({title, author}) => (
  <div className="poem">
    <h1 className="title">{title}</h1>
    <p className="author">by {author}</p>
  </div>
);

Poem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Poem;
