import React, { useRef } from 'react';

function Search() {
	const queryRef = useRef();

	const handleFetchBook = async e => {
		e.preventDefault();
		let query = queryRef.current.value;

		const response = await fetch(``);

		queryRef.current.value = '';
	};

	return (
		<main>
			<h1>Discover Your Next Read </h1>
			<form onSubmit={handleFetchBook}>
				<label htmlFor='query' />
				<input id='query' name='query' ref={queryRef} placeholder='Enter a Book or Autthor name ... ' type='text' />
				<button type='submit'>Search</button>
			</form>
		</main>
	);
}

export default Search;
