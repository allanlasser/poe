import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { poems } from './poems';

const rootReducer = combineReducers({
  poems,
  routing
});

export default rootReducer;
