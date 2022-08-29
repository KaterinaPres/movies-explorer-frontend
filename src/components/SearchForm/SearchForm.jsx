// import React from "react";
// import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
// import PageSection from "../PageSection/PageSection";
// import "./SearchForm.css";

// export default function SearchForm({
//   onSearch,
//   initialSearchQueryValues,
//   searchWordRequiered,
// }) {
//   const controls = useFormWithValidation({
//     nameRU:
//       initialSearchQueryValues !== undefined
//         ? initialSearchQueryValues.nameRU
//         : "",
//     shortFilms:
//       initialSearchQueryValues !== undefined
//         ? initialSearchQueryValues.shortFilms
//         : "",
//   });

//   useEffect(
//     (e) => {
//       if (controls.errors.nameRU) {
//         controls.updateErrorMessage(e, "nameRU", "Нужно ввести ключевое слово");
//       }
//     },
//     [controls.errors.nameRU]
//   );

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (
//       searchWordRequiered &&
//       !controls.isValid &&
//       controls.values.nameRU.length === 0
//     ) {
//       controls.checkValidity(e);
//       controls.updateErrorMessage(e, "nameRU", "Нужно ввести ключевое слово");
//       return;
//     }
//     onSearch(controls.values);
//   };
//   return (
//     <PageSection >
//       <div className="search-form">
//         <form method="get" name="search" className="search-form__form">
//           <label className="search-form__label">
//             <input
//               name="movies"
//               type="text"
//               id="movies"
//               placeholder="Фильм"
//               required
//               minLength="2"
//               maxLength="200"
//               className="search-form__input"
//             ></input>
//           </label>
//           <button type="submit" className="search-form__button"></button>
//         </form>
//         <div className="search-form__filter">
//           <FilterCheckbox />
//         </div>
//       </div >
//     </PageSection>
//   );
// }
import React from "react";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

export default function SearchForm(props) {
  console.log('props', props)
  const [keyValue, setKeyValue] = useState("");

  function handleChangeName(e) {
    setKeyValue(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    if (props.filtetrue === 'true') {
      props.filterSavedMoviesClick(keyValue)
    } else {
      // Передаём значения управляемых компонентов во внешний обработчик
      props.onGetMovies(keyValue);
    }
  }

  return (
    <div className="search-form">
      <form method="get" name="search" className="search-form__form">
        <label className="search-form__label">
          <input
            name="movies"
            type="text"
            id="movies"
            placeholder="Фильм"
            required
            minLength="2"
            maxLength="200"
            className="search-form__input"
            value={keyValue}
            onChange={handleChangeName}
          ></input>
        </label>
        <button
          onClick={handleSubmit}
          type="submit"
          className="search-form__button"
        >
          Поиск
        </button>
      </form>
      <div className="search-form__filter">
        <FilterCheckbox />
      </div>
    </div>
  );
}