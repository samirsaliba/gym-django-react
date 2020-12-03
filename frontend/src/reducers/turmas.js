import _ from 'lodash';
import { GET_TURMAS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TURMAS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};