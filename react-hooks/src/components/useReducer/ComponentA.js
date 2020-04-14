import React, { useContext } from 'react';
import { CountContext } from '../../App';

function ComponentA(){
    const countContext = useContext(CountContext)
    const dispatch = countContext.countDispatch;
    return(
        <div>
            Component A
            Count - {countContext.countState}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA;