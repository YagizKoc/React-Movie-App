import React from "react";
import './MovieCard.css';


const MovieCard = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  
  return (
    <>
      <div className="movie-card">
        {props.movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.Poster ? movie.Poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd96SKQLpJTy4aq_LvdIEb2fqR3WZUlWLn5w&usqp=CAU"} alt="poster" className="poster" />
            <p className="title">{movie.Title}</p>
             <div  onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
              <FavouriteComponent />
            </div>

            {/* <div className="overview">
              <h2 className="overview-title">Overview</h2>
              <h3>{movie.plot}</h3>
            </div> */}
            

          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
