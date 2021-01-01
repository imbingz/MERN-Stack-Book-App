import React from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import { Button, Container, Col, Row, Card } from 'react-bootstrap';

function Results () {
	const [ state ] = useGlobalContext();

	//Post api/books
	const handleSaveBook = async book => {
		console.log('button licked', book);
		try {
			const response = await fetch('/api/books', {
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id: book.id,
					title: book.volumeInfo.title,
					authors: book.volumeInfo.authors,
					description: book.volumeInfo.description,
					infoLink: book.volumeInfo.infoLink,
					image: book.volumeInfo.imageLinks.thumbnail
				}),
				method: 'POST'
			});
			const json = await response.json();

			if (json.message) {
				alert('This book is already saved.');
			}

			if (json.success) {
				alert('book saved successfully');
			}

			// dispatch({ type: 'saveBook', payload: json.data });
			// console.log('dispatch - saveBook', dispatch);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className='my-5 p-3' style={{ backgroundColor: '#d4d3d6' }}>
			<Row className='mx-auto'>
				{state.books &&
					state.books.map((book, index) => (
						<div key={index} className='my-3'>
							<Col className='mb-4'>
								<Card style={{ width: '325px', height: '700' }} className='p-4'>
									<Card.Img variant='top' src={book.volumeInfo.imageLinks.thumbnail} style={{ height: 320 }} />

									<Card.Body>
										<Card.Title>{book.volumeInfo.title}</Card.Title>
										<Card.Title className='font-italic text-muted'>
											By: {book.volumeInfo.authors[0]}
										</Card.Title>
										{book.volumeInfo.description && (
											<Card.Text>{book.volumeInfo.description.substr(0, 100)}</Card.Text>
										)}
										<Card.Text>
											<a href={book.volumeInfo.infoLink}>{book.volumeInfo.infoLink}</a>
										</Card.Text>
										<div className='mt-4'>
											<Button
												size='sm'
												variant='warning'
												onClick={() => {
													handleSaveBook(book);
												}}>
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
