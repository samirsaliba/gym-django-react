import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalidades from './modalidades';

export default combineReducers({
  form: formReducer,
  modalidades
});