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

	const toggleWatchlist = (id) => {
		console.log(id);
		if (watchlist.indexOf(id) > -1) {
			setWatchlist(watchlist.filter((item) => !id));
		} else {
			setWatchlist([...watchlist, id]);
		}
	};

	return (
		<div className='flex flex-col h-screen'>
			<div className='h-[33vh] relative'>
				<Header
					isHome={isHome}
					pageSwitch={() => setHome(!isHome)}
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

			<main className='h-[67vh]'>
				<div className='w-[85vw] h-full mx-auto py-8'>
					{moviedetails.length == 0 ? (
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
					)}
				</div>
			</main>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);
