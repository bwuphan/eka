import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const appReducer = combineReducers({
  routing: routerReducer,
});

export default (state, action) =>
  appReducer(state, action);

