import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Title from './Title';

const Poem = ({poem}) => (
  <div className="poem serif mv4">
    <Title title={poem.title} author={poem.author} />
    <main className="lines serif black-90 mv5">
      {poem.lines.map((line, i) => (
        <p key={'line-' + i}>
          <span className="black-60 f6 mr2" style={{float: 'right'}}>{i + 1}</span>
          {line || '\u200b' }
        </p>
      ))}
    </main>
    <footer className="tc mb4">
      <Link to="/" className="green hover-dark-green link">&larr; Back to poems</Link>
    </footer>
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
