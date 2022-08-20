import React from 'react';
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function Movies(props) {
  const isClick = false;
  return (
<main className='movies'>
<SearchForm />
      {/* <Preloader isOpen="true"/> */}
      <MoviesCardList name="movies" pagination={true}>
      <MoviesCard>
       </MoviesCard>
      </MoviesCardList>
      <div className='movies__list'>
        <button type='button' className="button movies__load-more-button">Ещё</button>
      </div>
    </main>
    )}