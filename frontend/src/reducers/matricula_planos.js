import _ from 'lodash';
import { GET_MATRICULA_PLANOS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MATRICULA_PLANOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};