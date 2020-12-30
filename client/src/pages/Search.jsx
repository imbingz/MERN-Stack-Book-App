import React, { useRef, useState } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Search() {
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	const [ books, setBooks ] = useState(null);

	const queryRef = useRef();

	const handleFetchBook = async e => {
		e.preventDefault();
		setLoading(true);

		try {
			let query = queryRef.current.value;

			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCuh-og_aGIn8X2se2vWpkDuKpBK7zJFuY`
			);

			if (!response.ok || response.status !== 200) {
				setLoading(false);
				setError(true);
				return;
			} else {
				const books = response.json();
				console.log(books);
				setLoading(false);
				setBooks(books);
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
		<main>
			<h1>Discover Your Next Read </h1>
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
				<button type='submit'>Search</button>
			</form>
		</main>
	);
}

export default Search;
