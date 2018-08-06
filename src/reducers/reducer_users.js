import { ADD_USER, UPDATE_USER, DELETE_USER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case ADD_USER:
      // or return state.concat([action.payload.data ]);
      return [ action.payload, ...state ];

    case DELETE_USER:
      return state.filter(user => user.key !== action.payload.key)
      
    case UPDATE_USER:
      const updateObject = state.find(user => user.key === action.payload.key);
      updateObject.firstname = action.payload.firstname;
      updateObject.lastname = action.payload.lastname;
      updateObject.address = action.payload.address;
      if (updateObject) {
        return [...state];
      } else {
        return state;
      }
  }

  return state;
}
