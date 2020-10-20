import _ from 'lodash';
import { GET_MODALIDADES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MODALIDADES:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};