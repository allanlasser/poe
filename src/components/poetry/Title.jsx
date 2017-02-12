import React, { PropTypes } from 'react';

const Title = ({title, author}) => (
  <div>
    <h1 className="title f4 mt0 mb2">{title}</h1>
    <p className="author i black-60 ma0">{author}</p>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Title;
