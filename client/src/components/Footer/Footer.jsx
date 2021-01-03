import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { BsBookmarks } from 'react-icons/bs';

function Footer () {
	return (
		<footer>
			<Navbar bg='dark' fixed='bottom' className='Footer justify-content-around'>
				<div>
					<Link to='/' className='pl-2'>
						<AiFillHome size={22} style={{ fill: '#1c0' }} />{' '}
					</Link>{' '}
                    <Link to='/save' className='px-2'>
                        < BsBookmarks size={ 20 } style={ { fill: '#fb2' } } />
                    </Link>
					<small className='text-muted mx-5 px-5'>
						{' '}
						Copyright &copy; 2020 by Bing Z. <span style={{ color: 'red' }}>&hearts;</span>{' '}
					</small>{' '}
				</div>
			</Navbar>
		</footer>
	);
}

export default Footer;
