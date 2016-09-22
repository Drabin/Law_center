import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import reducer from './reducers/rootReducer.js';

export const makeStore = initialState => {
  const devtoolsExt = window.devToolsExtension();
  console.log(devtoolsExt);
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(browserHistory),
  ];

  if (!devtoolsExt) {
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });
    middlewares.push(logger);
  }

  const mw = compose(
    applyMiddleware(...middlewares),
    devtoolsExt || (f => f)
  );

  const store = createStore(reducer, initialState, mw);
  return store;
};

export default makeStore;
