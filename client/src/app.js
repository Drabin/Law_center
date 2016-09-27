import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import makeStore from './makeStore.js';
import { AUTH_USER } from './actions/types.js';
import routes from './routes.js';
import { syncHistoryWithStore } from 'react-router-redux';

const store = makeStore();
const history = syncHistoryWithStore(browserHistory, store);

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
  browserHistory.push('/dashboard');
}

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>
  , document.getElementById('app')
);
