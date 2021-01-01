import React from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row, Card } from 'react-bootstrap';

function Results () {
	const [ state ] = useGlobalContext();
	console.log('state in side result:', state);

	return (
		<Container className='my-5 p-3' style={{ backgroundColor: '#0af' }}>
			<Row className='mx-auto'>
				{state.books.map((book, index) => (
					<div key={index} className='my-3'>
						<Col className='mb-4'>
							<Card style={{ width: '325px', height: '700' }} className='p-4'>
								<a href={book.volumeInfo.infoLink}>
									<Card.Img variant='top' src={book.volumeInfo.imageLinks.thumbnail} style={{ height: 320 }} />
								</a>
								<Card.Body>
									<Card.Title>{book.volumeInfo.title}</Card.Title>
									<Card.Title className='font-italic text-muted'>By: {book.volumeInfo.authors[0]}</Card.Title>
									{book.volumeInfo.description && (
										<Card.Text>{book.volumeInfo.description.substr(0, 100)}</Card.Text>
									)}
									{/* <Card.Text>
										<Link> {book.volumeInfo.infoLink}</Link>
									</Card.Text> */}
									<div className='mt-4'>
										<Button size='sm' variant='warning' onClick={handleSaveBook}>
											Save Book
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</div>
				))}
			</Row>
		</Container>
	);
}

export default Results;
