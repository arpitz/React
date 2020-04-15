import React from 'react';
import useInput from './useInput';


function Form() {

    const [ firstName, bindFirstName, resetFirstName ] = useInput('');
    const [ lastName, bindLastName, resetLastName ] = useInput('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <form onSubmit={ submitHandler }>
            <div>
                <label>First Name</label>
                <input type="text" 
                    { ...bindFirstName } 
                />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" 
                    { ...bindLastName }
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;