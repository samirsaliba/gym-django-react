import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalidades from './modalidades';
import planos from './planos';
import auth from './auth';

export default combineReducers({
  form: formReducer,
  modalidades,
  planos,
  auth
});