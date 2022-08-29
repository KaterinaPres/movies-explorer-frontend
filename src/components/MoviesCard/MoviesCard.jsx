import React from "react";
import "./MoviesCard.css";
import iconSaved from "../../images/heart1.svg";
import iconDelete from "../../images/heart.svg";
import { reformatTime } from "../../utils/reformaTime";

const MoviesCard = React.memo(
  ({
    savedMovies,
    type,
    movie,
    addMoviesToSaved,
    deleteMovieFromSaved,
    preview,
  }) => {
    const isSaved =
      type === "movies"
        ? savedMovies.some((savedMovie) => {
          return savedMovie.movieId === movie.id
            ? (movie._id = savedMovie._id)
            : "";
        })
        : true;

    const handleSaveMovie = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      addMoviesToSaved(movie);
    };

    const handleDeleteMovieFromSaved = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      deleteMovieFromSaved(movie._id);
    };

    return (
      <a className="movie-card" href={movie.trailerLink} target="_blank">
        <div className="card">
          <img className="card__img" src={preview} alt="обложка фильма" />
          <div className="card_store">
            <div className="card__info">

              <h3 className="card__name">{movie.nameRU}</h3>
              <p className="card__time">{reformatTime(movie.duration)}</p>

            </div>
             {!isSaved ? (
            /* <button
              className="movie-card__button movie-card__button_type_save"
              onClick={handleSaveMovie}
            >
              Сохранить
            </button>
          ) : (*/
            <button 
              // className="movie-card__button movie-card__button_type_delete"
              onClick={handleSaveMovie}
            >
                <img src={iconSaved} alt="Сохраненные фильмы" />
                </button>
              ) : (
                <button
                // className="movie-card__button movie-card__button_type_delete"
              onClick={handleDeleteMovieFromSaved}>
                <img src={iconDelete} alt="Удаление из сохранённого" />
                </button> 
              )}
            <button className='movie-card__button movie-card__button_type_save'
            ></button>
          </div>
        </div>
    {/* )} */}
      </a>
    );
  }
);

export default MoviesCard;