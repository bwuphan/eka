import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { form } from '../components/Form/reducer/index';

const appReducer = combineReducers({
  form,
  routing: routerReducer,
});

export default (state, action) =>
  appReducer(state, action);

