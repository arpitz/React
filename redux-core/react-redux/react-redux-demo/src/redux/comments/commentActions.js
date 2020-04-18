import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_SUCCESS } from "./commentTypes"
import axios from 'axios'

export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        axios.get("http://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => {
                const comments = response.data;
                dispatch(fetchCommentsSuccess(comments));
            })
            .catch(err => {
                dispatch(fetchCommentsFailure(err.message));
            })
    }
}