// Apollo imports
import client from '../apollo/client';
import gql from 'graphql-tag';

// Constants
export const GET_CATEGORIES = "GET_CATEGORIES";
export const FAILED_TO_GET_CATEGORIES = "FAILED_TO_GET_CATEGORIES";
export const LOADING_CATEGORIES = "LOADING_CATEGORIES";

// Actions
export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(loadCategories())
        const query = gql`
            {
                categories {
                    name
                }
            }
        `;

        client
            .query({
                query: query
            })
            .then(res => dispatch(getCategories(res.data)))
            .catch(err => dispatch(setError(err)))
    };
};

// Actions for store dispatch
const loadCategories = () => ({
    type: LOADING_CATEGORIES,
    payload: {
        loading: true,
    }
});

const getCategories = (response) => ({
    type: GET_CATEGORIES,
    payload: {
        ...response,
        loading: false
    }
});

const setError = (err) => ({
    type: FAILED_TO_GET_CATEGORIES,
    payload: {
        error: err,
        loading: false
    }
});
