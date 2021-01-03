import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
    return (
        <div className='text-center m-5 p-5'>
            <h1>404... Not Found</h1>;
            <h2><Link to='/'>Click HERE</Link> to Search Books</h2>
       </div>
    )
   
}

export default Error;
