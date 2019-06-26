import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer  // or call it with the same name counterReducer : counterReducer  =>  counterReducer
});

export default allReducers;