import React from 'react';
import {Link} from 'react-router-dom';

function NoMatch({location}) {
    return (
        <div  className='text-center m-5'>
             <h2>No match for the path <code>{location.pathname}</code></h2>
             <h3><Link to='/'>Click HERE</Link> to Search Books</h3>
        </div>
    )
};

export default NoMatch;



