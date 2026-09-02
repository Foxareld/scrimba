import React, { useState } from 'react';

export default function Search({ query, handleChange, handleSearch }) {
	return (
		<div className='absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[75vw] flex border-2 border-gray-400 rounded-md'>
			<input
				placeholder='Search for a movie'
				onChange={handleChange}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSearch();
					}
				}}
				value={query}
				className='p-3 w-5/6'
			/>
			<button
				className='self-stretch bg-gray-200 w-1/6 inline-block transition duration-300 hover:bg-gray-300 cursor-pointer'
				onClick={handleSearch}
			>
				Search
			</button>
		</div>
	);
}
