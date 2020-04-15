import React, { useEffect, useRef } from 'react';

function FocusInput(){

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value = "helloo";
    }, []);

    return(
        <div>
            <input ref={inputRef} type='text' />
        </div>
    )
}

export default FocusInput;