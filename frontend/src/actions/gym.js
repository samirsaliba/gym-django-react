import axios from 'axios';
import { reset } from 'redux-form'; // added
import { GET_MODALIDADES, ADD_MODALIDADE, GET_PLANOS, GET_TURMAS } from './types';

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