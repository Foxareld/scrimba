export default function Movie({ movie, watchlist, toggleWatchlist }) {
	return (
		<div className='flex items-center space-x-4 py-4'>
			<img src={movie.Poster} />
			<div className='space-y-2'>
				<div className='flex items-center space-x-1'>
					<h3 className='font-bold text-xl'>{movie.Title}</h3>
					<span className='flex space-x-1 items-center'>
						<svg
							width='12'
							height='11'
							viewBox='0 0 12 11'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M4.86276 0.518226C5.08727 -0.172757 6.06483 -0.172758 6.28934 0.518225L7.09152 2.98707C7.19193 3.29609 7.47989 3.50531 7.80481 3.50531H10.4007C11.1273 3.50531 11.4293 4.43502 10.8416 4.86207L8.74142 6.3879C8.47856 6.57889 8.36856 6.91741 8.46897 7.22643L9.27115 9.69528C9.49566 10.3863 8.7048 10.9609 8.11702 10.5338L6.01689 9.00797C5.75402 8.81699 5.39808 8.81699 5.13521 9.00797L3.03508 10.5338C2.4473 10.9609 1.65644 10.3863 1.88095 9.69528L2.68313 7.22643C2.78354 6.91741 2.67354 6.57889 2.41068 6.3879L0.31055 4.86207C-0.277235 4.43502 0.0248458 3.50531 0.751388 3.50531H3.34729C3.67221 3.50531 3.96017 3.29609 4.06058 2.98707L4.86276 0.518226Z'
								fill='#FEC654'
							/>
						</svg>
						<span>{movie.Ratings[0].Value.split('/')[0]}</span>
					</span>
				</div>
				<div className='text-sm flex justify-between whitespace-nowrap space-x-2'>
					<span>{movie.Runtime}</span>
					<span>{movie.Genre}</span>
					<button
						className='flex items-center cursor-pointer'
						onClick={() => toggleWatchlist(movie)}
					>
						{watchlist.findIndex(
							(movieItem) => movieItem.imdbID === movie.imdbID,
						) > -1 ? (
							<svg
								className='h-4 w-4 text-black inline-block mr-1'
								viewBox='0 0 50 50'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									fill='currentColor'
									d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM15.625 21.875C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H15.625Z'
								/>
							</svg>
						) : (
							<svg
								className='h-4 w-4 text-black inline-block mr-1'
								viewBox='0 0 50 50'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									fill='currentColor'
									d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM28.125 15.625C28.125 13.8991 26.7259 12.5 25 12.5C23.2741 12.5 21.875 13.8991 21.875 15.625V21.875H15.625C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H21.875V34.375C21.875 36.1009 23.2741 37.5 25 37.5C26.7259 37.5 28.125 36.1009 28.125 34.375V28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H28.125V15.625Z'
								/>
							</svg>
						)}
						{watchlist.findIndex(
							(movieItem) => movieItem.imdbID === movie.imdbID,
						) > -1
							? 'Remove from'
							: 'Add to'}{' '}
						Watchlist
					</button>
				</div>
				<p>{movie.Plot}</p>
			</div>
		</div>
	);
}
