import axios from 'axios';
import { reset } from 'redux-form';
import history from '../history';
import { 
  GET_MODALIDADES, ADD_MODALIDADE, GET_PLANOS, GET_TURMAS, GET_EXAMES, GET_MATRICULA_PLANOS, GET_MATRICULA_TURMAS
} from './types';

import { tokenConfig } from './auth';

export const getModalidades = () => async dispatch => {
  const res = await axios.get('/api/modalidades/');
  dispatch({
    type: GET_MODALIDADES,
    payload: res.data
  });
};

export const addModalidade = formValues => async dispatch => {
  const res = await axios.post('/api/modalidades/', { ...formValues });
  dispatch({
    type: ADD_MODALIDADE,
    payload: res.data
  });
  dispatch(reset('modalidadeForm'));
  history.push('/');
};

export const getTurmas = () => async dispatch => {
  const res = await axios.get('/api/turmas/');
  dispatch({
    type: GET_TURMAS,
    payload: res.data
  });
};

export const getPlanos = () => async dispatch => {
  const res = await axios.get('/api/planos/');
  dispatch({
    type: GET_PLANOS,
    payload: res.data
  });
};

export const getExames = () => async (dispatch, getState) => {
  const res = await axios.get('/api/exames/', tokenConfig(getState));
  dispatch({
    type: GET_EXAMES,
    payload: res.data
  });
};

export const getMatriculaPlanos = () => async (dispatch, getState) => {
  const res = await axios.get('/api/matricula_planos/', tokenConfig(getState));
  dispatch({
    type: GET_MATRICULA_PLANOS,
    payload: res.data
  });
};

export const getMatriculaTurmas = () => async (dispatch, getState) => {
  const res = await axios.get('/api/matricula_turmas/', tokenConfig(getState));
  dispatch({
    type: GET_MATRICULA_TURMAS,
    payload: res.data
  });
};