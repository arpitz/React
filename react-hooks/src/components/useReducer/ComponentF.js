import React, { useContext } from 'react';
import { CountContext } from '../../App';

function ComponentF(){
    const countContext = useContext(CountContext)
    const dispatch = countContext.countDispatch;
    return(
        <div>
            Component F
            Count - {countContext.countState}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF;