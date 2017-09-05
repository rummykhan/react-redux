import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

console.log(' > combineReducers');
const todoApp = combineReducers({
    todos,
    visibilityFilter
});
console.log(' > reducersCombined');

export default todoApp;