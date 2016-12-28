import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import todos from './reducers/todo';

const rootReducer = combineReducers({
  todos,
  routing
});

export default rootReducer;
