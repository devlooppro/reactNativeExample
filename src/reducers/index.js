import { combineReducers } from "redux";
import auth from './authReducer';
import cafes from './cafesReducer';

export default combineReducers({
  auth, cafes
});