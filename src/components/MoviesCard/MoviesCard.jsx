import React from "react";
import "./MoviesCard.css"
import movies from "../../images/movies.png"
export default function MoviesCard(props) {
  return (
    <div className="card">
      <img className="card__img" src={movies} alt="обложка фильма" />
      {props.children}
      <div className="card_store">
        <div className="card__info">

          <h3 className="card__name">В погоне за Бенкси</h3>
          <p className="card__time">27 минут</p>

        </div>
        <button className='movie-card__button movie-card__button_type_save'
        ></button>
      </div>
    </div>
  );
}