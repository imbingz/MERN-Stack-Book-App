import React from 'react';
import { Spinner, Button } from 'react-bootstrap';

const Loading = () => {
	return (
		<Button variant='primary' disabled className='m-5 py-3 px-5'>
			<Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' />
			<h3>Loading...</h3>
		</Button>
	);
};

export default Loading;
