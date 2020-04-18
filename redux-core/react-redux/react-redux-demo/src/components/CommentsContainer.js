import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../redux';

function CommentsContainer() {

    const commentsState = useSelector(state => state.comment);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments());
    }, [])

    return commentsState.loading ? (
        <h2>Loading ...</h2>
    ) : commentsState.error ? (
        <div> { commentsState.error } </div>
    ) : (
        <>
            <h2>Comments List</h2>
            <ol>
                {
                    commentsState && commentsState.comments && 
                    commentsState.comments.map(com => <li key={com.id}>{ com.body }</li>)
                }
            </ol>
        </>
    )
}

export default CommentsContainer;