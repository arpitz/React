import React from 'react';

function Title({ text }){

    console.log(`Rendering title`);
    return(
    <h2>{ text }</h2>
    )
}

export default React.memo(Title);