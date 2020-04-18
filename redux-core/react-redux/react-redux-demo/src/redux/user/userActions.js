import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes"
import axios from "axios"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log('in axios call');
                console.log(response);
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.message))
            })
    }
}