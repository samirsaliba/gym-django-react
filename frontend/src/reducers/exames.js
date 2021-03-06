import _ from 'lodash';
import { GET_EXAMES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_EXAMES:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};