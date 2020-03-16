import { combineReducers } from 'redux';

// reducer imports for packaging.
import category from './categoryReducer';
import joke from './jokeReducer';


const index = combineReducers({
    category,
    joke
});

export default index;