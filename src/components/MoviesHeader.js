import React from "react";
import './MoviesHeader.css';

const MoviesHeader = (props) => {
    return (
        <div className="header">
        <div className='title'>
           <h1>Movies</h1>
      </div>
      <div className='search-box'>
        <form>
          <input className="form" placeholder="Search for movies" value={props.value} onChange={(event) => props.setMovieSearch(event.target.value)} />
          <button>Search</button>
        </form>
      </div>
        </div>
    )
};
export default MoviesHeader;