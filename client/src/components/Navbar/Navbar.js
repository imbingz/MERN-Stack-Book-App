import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

	return (
		<nav className='Navbar'>
			<div className='Navbar-brand'>
				<span>Book Search</span>
			</div>
            
			<ul className='Navbar-links'>
                <li className='Navbar-link'>
					<Link to='/'> Search </Link>
				</li> 
                <li className='Navbar-link'>
					<Link to='/save'> View Saved Books </Link>
				</li>		
			</ul>
		</nav>
	);
}

export default Navbar;
