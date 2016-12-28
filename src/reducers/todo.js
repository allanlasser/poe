let todoCounter = 0;
const createTodo = (text) => ({
  id: todoCounter++,
  text: text,
  completed: true,
});

const todoList = [
  createTodo('Docker'),
  createTodo('Feathers'),
  createTodo('React'),
  createTodo('Redux'),
  createTodo('Routing'),
  createTodo('Webpack')
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
