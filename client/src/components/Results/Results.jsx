import React, { useEffect } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import { Button, Container, Col, Row, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import io from 'socket.io-client';

let socket;

function Results () {
	const [ state ] = useGlobalContext();

	//set up socket instance n connection
	useEffect(() => {
		if (!socket) {
			socket = io.connect('/');

			socket.on('your id', id => {
				console.log('Your socket.id is:', id);
			});

			socket.on('connect_error', err => {
				console.log(err);
			});
		}

		socket.on('saved book title', title => {
			toast.success(`Saved a book titled ${title}`, {
				position: toast.POSITION.TOP_CENTER
			});
		});
	}, []);

	//Post api/books
	const handleSaveBook = async book => {
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
				toast.warning('This book is saved already!', {
					position: toast.POSITION.TOP_CENTER
				});
			}

			if (json.success) {
				// send event to server on save book
				socket.emit('save book', json.data.title);
			}
		} catch (error) {
			console.log(error);
			toast.error('Error saving books', {
				position: toast.POSITION.TOP_CENTER
			});
		}
	};

	return (
		<Container className='my-5 p-3'>
			<Row className='mx-5'>
				{state.books &&
					state.books.map((book, index) => (
						<div key={index} className='my-3'>
							<Col className='mb-4'>
								<Card style={{ width: '300px', height: '700', backgroundColor: '#deeaf7' }} className='p-4'>
									{book.volumeInfo.imageLinks && (
										<Card.Img
											variant='top'
											src={book.volumeInfo.imageLinks.thumbnail}
											style={{ height: 320 }}
										/>
									)}

									<Card.Body>
										{book.volumeInfo.title && <Card.Title>{book.volumeInfo.title}</Card.Title>}
										{book.volumeInfo.authors && (
											<Card.Title className='font-italic text-muted' style={{ fontSize: '1.1rem' }}>
												By: {book.volumeInfo.authors[0]}
											</Card.Title>
										)}

										{book.volumeInfo.description && (
											<Card.Text>{book.volumeInfo.description.substr(0, 100)}</Card.Text>
										)}

										{book.volumeInfo.infoLink && (
											<Card.Text>
												<a href={book.volumeInfo.infoLink} target='_blank' rel='noreferrer'>
													{' '}
													View Details
												</a>
											</Card.Text>
										)}

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
