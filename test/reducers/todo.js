import { expect } from 'chai';
import todos, { todoList } from '../../src/reducers/todo';
import { toggleTodo } from '../../src/actions';

describe('todo reducer', function() {
  it('initializes the state with a todo list', function() {
    const initialState = todos(undefined, {});
    expect(initialState).to.be.an('array');
    expect(initialState).to.deep.equal(todoList);
  });
  it('toggles a todo\'s completed state', function() {
    const firstTodo = todoList[0];
    const state = todos(undefined, toggleTodo(firstTodo.id));
    expect(state).to.not.equal(todoList);
    expect(state[0].completed).to.be.false;
  });
  it('does not transform state if given a bad id', function() {
    const state = todos(undefined, toggleTodo(9999));
    expect(state).to.deep.equal(todoList);
  });
});
