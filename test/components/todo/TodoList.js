import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TodoList from '../../../src/components/todo/TodoList';

const todos = [
  {
    'id': 1,
    'completed': false,
    'text': 'Example Todo',
  },
  {
    'id': 2,
    'completed': false,
    'text': 'Example Todo',
  },
  {
    'id': 3,
    'completed': true,
    'text': 'Example Todo',
  }
];

describe('<TodoList /> component', function() {
  let wrapper;
  const todoListProps = {
    todos: todos,
    onTodoClick: () => (null),
  };
  beforeEach(function() {
    wrapper = shallow(<TodoList {...todoListProps} />);
  });
  it('renders as a <ul>', function() {
    expect(wrapper.is('ul')).to.be.true;
  });
  it('maps each todo object to a <Todo /> component', function() {
    expect(wrapper.find('Todo')).to.have.lengthOf(todos.length);
  });
});
