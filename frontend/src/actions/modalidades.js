import axios from 'axios';
import { GET_TODOS } from './types';

// GET TODOS
export const getTodos = () => async dispatch => {
  const res = await axios.get('/api/modalidades/');
  dispatch({
    type: GET_MODALIDADES,
    payload: res.data
  });
};