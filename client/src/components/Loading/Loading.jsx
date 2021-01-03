import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
	return (
        <div className='m-5 p-5'>
            <h1>Loading...</h1>
            <Spinner animation="border" variant="primary" className='mx-5'/>
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" className='mx-5'/>
            <Spinner animation="border" variant="warning" />
        </div>
	);
};

export default Loading;
