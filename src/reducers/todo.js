let todoCounter = 0;
const createTodo = (text) => ({
  id: todoCounter++,
  text: text,
  completed: true,
});

export const todoList = [
  createTodo('docker'),
  createTodo('feathers'),
  createTodo('redis'),
  createTodo('postgres'),
  createTodo('webpack'),
  createTodo('react'),
  createTodo('redux'),
  createTodo('routing'),
  createTodo('postcss'),
  createTodo('tachyons'),
  createTodo('isomorphic'),
  createTodo('hot reload'),
  createTodo('ES6 + babel'),
  createTodo('chai + mocha testing'),
];

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

const todos = (state = todoList, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  };
};

export default todos;
