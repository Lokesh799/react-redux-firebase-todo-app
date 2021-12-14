import { combineReducers } from 'redux';
import modelshow from "./showModel";
import addTask from './addTask';


const reducer = combineReducers({
  modelshow,
  addTask,
});
export default reducer;