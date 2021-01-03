import React, { useRef, useState } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Results from '../components/Results';
import { useGlobalContext } from '../utils/GlobalContext';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './Search.css';

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
				toast.error('Error fetching books', {
					position: toast.POSITION.TOP_CENTER
				});
				return;
			} else {
				const result = await response.json();
				dispatch({ type: 'searchResult', payload: result.items });
				setLoading(false);
			}
		} catch (err) {
			setLoading(false);
            console.error(err);
            toast.error('Error fetching books', {
                position: toast.POSITION.TOP_CENTER
            });
		}

		if (queryRef.current) {
			queryRef.current.value = '';
			queryRef.current.focus();
		} else {
			return;
		}
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
		<>
			<Jumbotron fluid className='jumbotron'>
				<Container className='d-flex flex-column justify-content-center align-items-center'>
					<h1 className='Search-title bg-light p-1 mt-5'>Discover Your Next Read</h1>
					<form onSubmit={handleFetchBook}>
						<label htmlFor='query' />
						<input
							className='Search-input'
							required
							id='query'
							name='query'
							ref={queryRef}
							placeholder='Enter a Book or Autthor name ... '
							type='text'
						/>
						<Button size='sm' type='submit'>
							Search
						</Button>
					</form>
				</Container>
			</Jumbotron>

			<Results />
		</>
	);
}

export default Search;
