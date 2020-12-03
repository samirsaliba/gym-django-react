import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalidades from './gym';
import planos from './planos';
import turmas from './turmas';
import exames from './exames';
import matricula_planos from './matricula_planos';
import matricula_turmas from './matricula_turmas';
import auth from './auth';

export default combineReducers({
  form: formReducer,
  modalidades,
  turmas,
  planos,
  exames,
  matricula_planos,
  matricula_turmas,
  auth
});