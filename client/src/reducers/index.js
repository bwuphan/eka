import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { signup } from '../components/signup/reducer/index';

const appReducer = combineReducers({
  signup,
  routing: routerReducer,
});

export default (state, action) =>
  appReducer(state, action);

