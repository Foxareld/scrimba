import minusIcon from '../assets/images/minus.svg';

export default function Movie({ movie, watchlist, toggleWatchlist }) {
	return (
		<div className='flex items-center space-x-4 py-4'>
			<img src={movie.Poster} />
			<div className='space-y-2'>
				<span className='font-bold text-lg'>{movie.Title}</span>
				<div className='text-sm flex justify-between'>
					<span>{movie.Runtime}</span>
					<span>{movie.Genre}</span>
					<button
						className='flex items-center'
						onClick={() => toggleWatchlist(movie.imdbID)}
					>
						{watchlist.indexOf(movie.imdbID) > -1 ? (
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
						{watchlist.indexOf(movie.imdbID) > -1
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
