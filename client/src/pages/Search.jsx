import React, { useRef, useState } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Results from '../components/Results';
import { useGlobalContext } from '../utils/GlobalContext';
import { Button, Container, Col, Row } from 'react-bootstrap';

function Search () {
	const [ , dispatch ] = useGlobalContext();
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	const queryRef = useRef();

	const handleFetchBook = async e => {
		e.preventDefault();
		setLoading(true);

		try {
			let query = queryRef.current.value;

			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${query}&${process.env.REACT_APP_BOOK_API_KEY}`
			);

			if (!response.ok || response.status !== 200) {
				setLoading(false);
				setError(true);
				return;
			} else {
				const result = await response.json();
				console.log('seearch result: ', result.items);
				dispatch({ type: 'searchResult', payload: result.items });
				setLoading(false);
			}
		} catch (err) {
			setLoading(false);
			console.error(err);
		}

		queryRef.current.value = '';
	};

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (error) {
		return (
			<main>
				<Error />
			</main>
		);
	}

	return (
		<main className='d-flex'>
			<Container className='d-flex flex-column' style={{ width: '80vw' }}>
				<Container className='mt-3 p-4' style={{ backgroundColor: 'greenyellow' }}>
					<Row>
						<Col className='text-center pb-2 mb-4'>
							<h1>Discover Your Next Read </h1>
						</Col>
					</Row>

					<Row className='d-flex justify-content-center mx-5'>
						<Col>
							<form onSubmit={handleFetchBook}>
								<label htmlFor='query' />
								<input
									required
									id='query'
									name='query'
									ref={queryRef}
									placeholder='Enter a Book or Autthor name ... '
									type='text'
								/>
								<Button type='submit'>Search</Button>
							</form>
						</Col>
					</Row>
				</Container>

				<Results />
				{/* <Container className='my-5 p-3' style={{ backgroundColor: '#0af' }}>
					<Row className='d-flex flex-wrap justify-content-around align-items-sm-center'>
						{state.books.map((book, index) => (
							<div key={index} className='my-3'>
								<Col className='mb-4'>
									<Card style={{ width: '280px' }} className='p-4'>
										<Card.Img variant='top' src={book.volumeInfo.imageLinks.thumbnail} />
										<Card.Body>
											<Card.Title>{book.volumeInfo.title}</Card.Title>
											<Card.Text>{book.volumeInfo.description}</Card.Text>
											<Card.Text>{book.volumeInfo.infoLink}</Card.Text>
											<div className='mt-4'>
												<Button
													size='sm'
													variant='warning'
													onClick={() => {
														console.log('Handlesavebook');
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
				</Container> */}
			</Container>
		</main>
	);
}

export default Search;
