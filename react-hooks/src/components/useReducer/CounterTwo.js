import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function CounterTwo(){

    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <p>First Counter - {count.firstCounter}</p>
            <p>Second Counter - {count.secondCounter}</p>
            <div>
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 10})}>Increment By 10</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 10})}>Decrement By 10</button>
            </div>
        </div>
    )
}

export default CounterTwo;