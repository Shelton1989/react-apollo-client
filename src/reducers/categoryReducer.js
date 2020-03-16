import {
    GET_CATEGORIES,
    FAILED_TO_GET_CATEGORIES,
    LOADING_CATEGORIES
} from '../actions/category';

const initialState = {
    categories: null,
    categoryStatus: "No categories available at the moment.",
    loading: false,
    error: null
};

const category = (state=initialState, {type, payload}) => {
    switch(type) {
        case GET_CATEGORIES:
            return {
                ...state,
                ...payload
            }
        case LOADING_CATEGORIES:
            return {
                ...state,
                ...payload
            }
        case FAILED_TO_GET_CATEGORIES:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    };
};

export default category;