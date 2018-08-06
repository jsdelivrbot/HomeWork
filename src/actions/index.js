export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SELECT_USER = 'SELECT_USER';

let currentKey = 0;
export function addUser(user) {
    currentKey++;
    user.key = currentKey;
    return {
      type: ADD_USER,
      payload: user
    }
}
export function deleteUser(user) {
    return {
      type: DELETE_USER,
      payload: user
    }
}
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}
export function selectUser(user) {
    return {
      type: SELECT_USER,
      payload: user
    }
}
