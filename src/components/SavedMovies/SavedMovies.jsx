// import "./SavedMovies.css";
// import React from "react";
// import SearchForm from "../SearchForm/SearchForm";
// import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import cards from "../../utils/cards.json";
// import MoviesCard from "../MoviesCard/MoviesCard";

// export default function SavedMovies() {
//   return (
//     <>
//       <SearchForm />
//       <MoviesCardList
//         name="saved-movies"
//         cardType="saved-movies"
//         pagination={false}
//       >
//         {cards.map((card) => {
//           return (
//             <MoviesCard
//               type="saved-movies"
//               isSaved={true}
//               key={card.id}
//               name={card.nameRU}
//               duration={card.duration}
//               preview={card.image.formats.thumbnail.url}
//               trailerLink={card.trailerLink}
//             />
//           );
//         })}
//       </MoviesCardList>
//     </>
//   );
// }
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export default function SavedMovies() {
  return (
    <main className="movies-saved">
      <SearchForm />
      <MoviesCardList>
        <MoviesCard>
        </MoviesCard>
      </MoviesCardList>
    </main>
  );
}