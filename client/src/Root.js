import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import App from './App';
import Homepage from './components/Homepage/Homepage';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="/homepage" component={Homepage} />
      </Route>
    </Router>
  </Provider>;

export default Root;