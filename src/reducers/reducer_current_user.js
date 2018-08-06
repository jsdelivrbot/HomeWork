import { SELECT_USER, DELETE_USER, UPDATE_USER} from '../actions/index';

export default function(state = null, action) {

  switch (action.type) {
    case DELETE_USER:
      return null;
    case UPDATE_USER:
      return null;
    case SELECT_USER:
      if (state != null && action.payload.key === state.key)
        return null;
      return action.payload;
  }
  return state;
}
