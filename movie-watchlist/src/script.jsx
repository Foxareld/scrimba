import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import emptyStateIcon from './assets/images/reel.svg';

const apiKey = import.meta.env.VITE_OMDB_API_KEY;
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&`;

function App() {
	const [isHome, setHome] = useState(true);
	const [movielist, setMovielist] = useState([]);
	const [moviedetails, setMoviedetails] = useState([]);
	const [watchlist, setWatchlist] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (!movielist || movielist.length === 0) return;

		const fetchDetails = async () => {
			const results = await Promise.all(
				movielist.map(async (movie) => {
					const response = await fetch(`${apiUrl}i=${movie.imdbID}`);
					return response.json();
				}),
			);

			setMoviedetails(results);
		};

		fetchDetails();
	}, [movielist]);

	const handleSearch = async () => {
		const url = `${apiUrl}s=${query}`;

		try {
			const response = await fetch(url);
			const data = await response.json();

			setMovielist(data.Search);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (evt) => {
		setQuery(evt.target.value);
	};

	const toggleWatchlist = (movie) => {
		if (watchlist.some((movieItem) => movieItem.imdbID === movie.imdbID)) {
			setWatchlist(
				watchlist.filter(
					(movieItem) => movieItem.imdbID != movie.imdbID,
				),
			);
		} else {
			setWatchlist([...watchlist, movie]);
		}
	};

	return (
		<div className='flex flex-col h-screen'>
			<div className='h-[33vh] relative'>
				<Header
					isHome={isHome}
					pageSwitch={() => {
						if (isHome) {
							setMoviedetails([]);
						}

						setHome(!isHome);
					}}
				></Header>
				{isHome ? (
					<Search
						query={query}
						handleChange={handleChange}
						handleSearch={handleSearch}
					></Search>
				) : (
					''
				)}
			</div>

			<main className='h-[67vh] max-w-3xl w-full mx-auto'>
				<div className='w-full h-full mx-auto py-8 divide-y divide-gray-300'>
					{isHome ? (
						moviedetails.length == 0 ? (
							<div className='h-full flex-col flex items-center justify-center text-[#DFDDDD] font-bold space-y-2'>
								<img src={emptyStateIcon} alt='' />
								<span>Start Exploring</span>
							</div>
						) : (
							moviedetails.map((movie) => (
								<Movie
									key={movie.imdbID}
									movie={movie}
									watchlist={watchlist}
									toggleWatchlist={toggleWatchlist}
								></Movie>
							))
						)
					) : watchlist.length == 0 ? (
						<div className='h-full flex-col flex items-center justify-center text-[#DFDDDD] font-bold space-y-2'>
							<span>
								Your watchlist is looking a little empty...
							</span>
							<button
								onClick={() => setHome(!isHome)}
								className='flex items-center cursor-pointer'
							>
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
								<span className='text-black'>
									Let's add some movies!
								</span>
							</button>
						</div>
					) : (
						watchlist.map((movie) => (
							<Movie
								key={movie.imdbID}
								movie={movie}
								watchlist={watchlist}
								toggleWatchlist={toggleWatchlist}
							></Movie>
						))
					)}
				</div>
			</main>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);
