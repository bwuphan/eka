import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import combinedReducer from './reducers';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  const router = routerMiddleware(browserHistory);

  const middlewares = [router];
  const logger = createLogger();
  middlewares.push(logger);

  return createStore(combinedReducer, applyMiddleware(...middlewares));
};

export default configureStore;