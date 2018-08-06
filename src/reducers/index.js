import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import CurrentUserReducer from './reducer_current_user';

const rootReducer = combineReducers({
    usersList: UsersReducer,
    currentUser: CurrentUserReducer
});

export default rootReducer;
