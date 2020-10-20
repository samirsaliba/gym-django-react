import _ from 'lodash';
import { GET_MODALIDADES, ADD_MODALIDADE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MODALIDADES:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'tipo')
      }
      case ADD_MODALIDADE: // added
      return {
        ...state,
        [action.payload.id]: action.payload
      }
      ;
    default:
      return state;
  }
};

