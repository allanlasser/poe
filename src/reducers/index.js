import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { poems, titles } from './poems';

const rootReducer = combineReducers({
  poems,
  titles,
  routing
});

export default rootReducer;
