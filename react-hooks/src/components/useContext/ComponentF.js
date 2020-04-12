import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';

function ComponentF() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    
    return(
        <div>
            The user is {user} and the channel is {channel}
        </div>
    )
}

export default ComponentF;