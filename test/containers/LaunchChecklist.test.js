import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';

import configureStore from '../../src/store';
import LaunchChecklist from '../../src/containers/LaunchChecklist';
import TodoList from '../../src/components/todo/TodoList';

describe('<LaunchChecklist /> container', function() {
  let store, state, wrapper, container, component;
  beforeEach(() => {
    store = configureStore({});
    state = store.getState();
    wrapper = mount(
      <Provider store={store}>
        <LaunchChecklist />
      </Provider>);
    container = wrapper.find(LaunchChecklist);
    component = wrapper.find(TodoList);
  });
  describe('rendering', () => {
    it('renders all the todoItems in the store', () => {
      const todos = state.todos;
      const renderedTodos = component.find('Todo');
      const todoCount = todos.length;
      const todoItemCount = renderedTodos.length;
      // Expect each todo state item to produce a Todo component
      expect(todoItemCount).to.equal(todoCount);
      renderedTodos.forEach((node, index) => {
        // For each rendered Todo component, check that its props are matched to its state.
        const thisTodoState = todos[index];
        expect(thisTodoState.id).to.equal(node.prop('id'));
        expect(thisTodoState.text).to.equal(node.prop('text'));
        expect(thisTodoState.completed).to.equal(node.prop('completed'));
      });
    });
  });
  describe('behavior', () => {
    it('toggles a todo item when the item is clicked', () => {
      const todoItem = component.find('Todo').first();
      // todoItems should be completed by default
      expect(todoItem.prop('completed')).to.be.true;
      todoItem.simulate('click');
      // after clicking, the todoItem should not be completed
      expect(todoItem.prop('completed')).to.be.false;
    });
  });
});
