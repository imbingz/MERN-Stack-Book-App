import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [isSearch, setIsSearch] = useState(false)
    const location = useLocation();
    
    useEffect(() => {
        if(location.pathname === '/save') {
            setIsSearch(true)
        }  
        if(location.pathname === '/')  {
            setIsSearch(false)
        }   
    }, [location.pathname])

	return (
		<nav className='Navbar'>
			<div className='Navbar-brand'>
				<Link to='/'><img src='assets/book-logo.png' style={{width: 32, height: 32}} alt='book-logo'/> </Link>
			</div>
            
			<ul className='Navbar-links'>
                {isSearch && <li className='Navbar-link'>
					<Link to='/'> Search Books </Link>
				</li>}
                {!isSearch && <li className='Navbar-link'>
					<Link to='/save'> View Saved Books </Link>
				</li>}		
                	
			</ul>
		</nav>
	);
}

export default Navbar;
