/* This uses the use state with the previous state parameter */
import React, { useState } from 'react';

function HookCounterTwo(){
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const incrementCountBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return(
        <div>
            Count: {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementCountBy5}>Increment By 5</button>
        </div>
    )
}

export default HookCounterTwo;