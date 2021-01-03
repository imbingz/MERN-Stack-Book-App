import React, { useEffect, useState } from 'react';
import { Button, Container, Col, Row, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Save () {
	const [ savedBooks, setSavedBooks ] = useState([]);

	useEffect(
		() => {
			async function getSavedBooks () {
				try {
					const response = await fetch('/api/books');
					const json = await response.json();
					setSavedBooks(json.data);
				} catch (err) {
                    console.error(err);
                    toast.error('Error getting saved books', {
                        position: toast.POSITION.TOP_CENTER
                    });
				}
			}
			getSavedBooks();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const handleDeleteBook = async book => {
		try {
			const response = await fetch(`/api/books/${book.id}`, {
				headers: {
					'Content-Type': 'application/json'
				},

				method: 'DELETE'
			});
			const json = await response.json();

			if (json.data) {
				setSavedBooks(savedBooks.filter(book => book.id !== json.data.id));
				toast.success('The book is removed successfully!', {
					position: toast.POSITION.TOP_CENTER
				});
			}
		} catch (error) {
            console.log(error);
            toast.error('Error removing books', {
                position: toast.POSITION.TOP_CENTER
            });
		}
	};

	return (
		<Container fluid className='my-5 p-3 ml-5'>
			<Row className='mx-auto'>
				<h3 className='px-3 mx-5 font-weight-bold' style={{ color: '#fb2' }}>
					Saved Books
				</h3>
			</Row>

			<Row className='ml-5'>
				{savedBooks &&
					savedBooks.map((book, index) => (
						<div key={index} className='my-3'>
							<Col className='mb-4'>
								<Card style={{ width: '325px', backgroundColor: '#dcf8e8' }} className='p-4'>
									{book.image && <Card.Img variant='top' src={book.image} style={{ height: 320 }} />}

									<Card.Body>
										{book.title && <Card.Title style={{ color: '#306' }}>{book.title}</Card.Title>}

										{book.authors && (
											<Card.Title className='font-italic text-muted' style={{ fontSize: '1.1rem' }}>
												By: {book.authors[0]}
											</Card.Title>
										)}

										{book.description && <Card.Text>{book.description.substr(0, 100)}</Card.Text>}

										{book.infoLink && (
											<Card.Text>
												<a href={book.infoLink} target='_blank' rel='noreferrer'>
													View Details
												</a>
											</Card.Text>
										)}

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
