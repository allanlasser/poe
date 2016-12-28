import React, { Component, PropTypes } from 'react';

const Todo = ({onClick, completed, text}) => (
  <li
    onClick={onClick}
    className={'todo' + (completed ? ' completed' : '')}
  >
    <input type="checkbox" defaultChecked={completed ? 'checked' : ''} />
    <label>{text}</label>
  </li>
);

Todo.propTypes = {
  'onClick': PropTypes.func.isRequired,
  'completed': PropTypes.bool.isRequired,
  'text': PropTypes.string.isRequired,
};

export default Todo;
