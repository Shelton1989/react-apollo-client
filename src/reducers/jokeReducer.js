import {
    GET_JOKE_BY_CATEGORY,
    FAILED_TO_GET_JOKE,
    LOADING_ACTIONS
} from '../actions/joke';

const initialState = {
    joke: "",
    error: null,
    loading: false,
    jokeStatus: "Unable to find a joke right now."
};

const joke = (state=initialState, { type, payload }) => {
    switch(type) {
        case GET_JOKE_BY_CATEGORY:
            return {
                ...state,
                ...payload
            }
        case FAILED_TO_GET_JOKE:
            return {
                ...state,
                ...payload
            }
        case LOADING_ACTIONS:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    };
};

export default joke;