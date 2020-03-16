// Apollo imports
import client  from '../apollo/client';
import gql from 'graphql-tag';

// Constants
export const GET_JOKE_BY_CATEGORY = "GET_JOKE_BY_CATEGORY";
export const FAILED_TO_GET_JOKE = "FAILED_TO_GET_JOKE";
export const LOADING_ACTIONS = "LOADING_ACTIONS";

// Actions
export const fetchJokeByCategory = (category) => {
    return dispatch => {
        dispatch(loadActions());
        const query = gql`
            {
                joke(category: "${category}") {
                    id
                    value
                }
            }
        `;

        client
            .query({
                query: query
            })
            .then(res => dispatch(getJoke(res.data.joke)))
            .catch(err => dispatch(setError(err)));

    };
};

// Actions for store dispatch
const loadActions = () =>({
    type: LOADING_ACTIONS,
    payload: {
        loading: true
    }
});

const  getJoke = response => ({
    type: GET_JOKE_BY_CATEGORY,
    payload: {
        ...response,
        loading: false
    }
});

const setError = err => ({
    type: FAILED_TO_GET_JOKE,
    payload: {
        ...err,
        loading: false
    }
});
