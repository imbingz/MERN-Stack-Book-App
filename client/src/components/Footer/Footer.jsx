import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';

function Footer () {
	return (
		<footer>
			<Navbar bg='dark' fixed='bottom' className='Footer justify-content-around'>
				<div>
					<Link to='/'>
						<AiFillHome size={28} style={{ fill: 'white' }} />{' '}
					</Link>{' '}
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
