import React, { useEffect, useState } from 'react';
import { Button, Container, Col, Row, Card } from 'react-bootstrap';
// import { useGlobalContext } from '../utils/GlobalContext';

function Save () {
	const [ savedBooks, setSavedBooks ] = useState([]);

	useEffect(
		() => {
			async function getSavedBooks () {
				try {
					const response = await fetch('/api/books');
					const json = await response.json();
					console.log('SavedBooks: ', json.data);

					setSavedBooks(json.data);
					//==> (json.data) {success: true, data}
					//pass arguments to dispacth
					// dispatch({ type: 'getSaved', payload: json.data });
					// console.log('dispatch in getSavedBooks:', dispatch);
					// console.log('state in getSavedBooks', state);
				} catch (err) {
					console.error(err);
				}
			}
			getSavedBooks();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const handleDeleteBook = async book => {
		console.log('delete button clicked');
		try {
			const response = await fetch(`/api/books/${book.id}`, {
				headers: {
					'Content-Type': 'application/json'
				},

				method: 'DELETE'
			});
			const json = await response.json();
			console.log('delete reponse line 43 in Save.jsx: ', json.success, json.data);

			if (json.data) {
				setSavedBooks(savedBooks.filter(book => book.id !== json.data.id));
			}

			// dispatch({ type: 'deleteBook', payload: json.data });
			// console.log('dispatch - deleteBook', dispatch);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className='my-5 p-3' style={{ backgroundColor: '#d4d3d6' }}>
			<Row>
				<h2>Saved Books</h2>
			</Row>

			<Row className='mx-auto'>
				{savedBooks &&
					savedBooks.map((book, index) => (
						<div key={index} className='my-3'>
							<Col className='mb-4'>
								<Card style={{ width: '325px', height: '700' }} className='p-4'>
									<Card.Img variant='top' src={book.image} style={{ height: 320 }} />

									<Card.Body>
										<Card.Title>{book.title}</Card.Title>
										<Card.Title className='font-italic text-muted'>By: {book.authors[0]}</Card.Title>
										{book.description && <Card.Text>{book.description.substr(0, 100)}</Card.Text>}
										<Card.Text>
											<a href={book.infoLink}>{book.infoLink}</a>
										</Card.Text>
										<div className='mt-4'>
											<Button
												size='sm'
												variant='warning'
												onClick={() => {
													handleDeleteBook(book);
												}}>
												Remove
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

export default Save;
