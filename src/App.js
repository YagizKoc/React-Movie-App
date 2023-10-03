import { useEffect, useState } from 'react';
import './App.css';
import MoviesHeader from './components/MoviesHeader';
import MovieCard from './components/MovieCard';
import AddFavourite from './components/AddFavourites';
import FavouriteMovies from './components/FavouriteMovies'
import RemoveFavourites from './components/RemoveFavourites';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');

  const movieApi =  async (movieSearch) => {
  const url = `http://www.omdbapi.com/?s=${movieSearch}&apikey=8642d78e`;

  const response = await fetch(url);
  const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    
  };

  useEffect (()=> {
    movieApi(movieSearch);
  }, [movieSearch]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList= [...favourites, movie]
    setFavourites(newFavouriteList);
  };

  const RemoveFavouritesMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
  }

  return (
    <div className='App'>
      <MoviesHeader  
      movieSearch={movieSearch} 
      setMovieSearch={setMovieSearch}/>
      <div className='movies'>
      <MovieCard movies = {movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourite}/>
      </div>
      <FavouriteMovies />
      <MovieCard movies = {favourites} handleFavouritesClick={RemoveFavouritesMovie} favouriteComponent={RemoveFavourites}/>
    </div>
  );
}

export default App;
