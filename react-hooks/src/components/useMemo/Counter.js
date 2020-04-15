import React, { useState, useMemo } from 'react';

function Counter(){

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    };

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    };

    const isEven = useMemo(() => {
        console.log(" rendering isEven function");
        let i = 0;
        while( i < 200000000) i++;
        return counterOne % 2 === 0
    }, [ counterOne ]);

    return(
        <div>
            <p>
                <button onClick = {incrementOne}>Count - {counterOne}</button>
                { isEven ? 'Even' : 'Odd' }
            </p>
            <p><button onClick = {incrementTwo}>Count - {counterTwo}</button></p>
        </div>
    )
}

export default Counter;