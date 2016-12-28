import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/todo/TodoList';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
});

const LaunchChecklist = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default LaunchChecklist;
