import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalidades from './modalidades';
import planos from './planos';

export default combineReducers({
  form: formReducer,
  modalidades,
  planos
});