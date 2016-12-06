import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const isDev = process.env.NODE_ENV !== 'production';

function configureStore(history, initialState) {
  if (isDev) {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(
          thunk,
          routerMiddleware(history)
        )
      )
    );
  }
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  );
}

export default configureStore;
