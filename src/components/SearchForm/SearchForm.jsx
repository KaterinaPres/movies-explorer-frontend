// import "./SearchForm.css";
// import React, { useState } from "react";
// import PageSection from "../PageSection/PageSection";

// import iconFind from "../../images/find.svg";
// import ToggleButton from "../Switcht/Switcht";

// export default function SearchForm() {
//   const [inputValue, setInputValue] = useState({
//     search: "",
//     shortFilms: false,
//   });

//   const handleInputValueChange = (e) => {
//     const { name, value, checked } = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       [name]: e.target.type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("searchValue", inputValue.search);
//     localStorage.setItem("shortFilms", inputValue.shortFilms);
//   };

//   return (
//     <PageSection name="search-form">
//       <div className="search-board__divider">
//         <div className="search-board">
//           <img
//             className="search-board__icon"
//             src={iconFind}
//             alt="Иконка лупы"
//           />
//           <form
//             className="search-board__form"
//             action=""
//             onSubmit={handleFormSubmit}
//           >
//             <input
//               className="search-board__input"
//               name="search"
//               type="text"
//               placeholder="Фильм"
//               value={inputValue.search}
//               onChange={handleInputValueChange}
//               required
//             />
//             <button className="button search-board__button" type="submit" />
//           </form>

//           <ToggleButton
//             name="shortFilms"
//             label="Короткометражки"
//             state={inputValue.shortFilms}
//             handleValueChange={handleInputValueChange}
//           />
//         </div>
//       </div>
//     </PageSection>
//   );
// }
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import PageSection from "../PageSection/PageSection";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <PageSection >
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
            ></input>
          </label>
          <button type="submit" className="search-form__button"></button>
        </form>
        <div className="search-form__filter">
          <FilterCheckbox />
        </div>
      </div >
    </PageSection>
  );
}