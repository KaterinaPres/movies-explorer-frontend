// const BASE_URL = `${window.location.protocol}${
//     process.env.REACT_APP_API_URL || "//localhost:3001"
//   }`;
  
//   const checkAnswer = (res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return res.json().then((res) => {
//       let message = "";
//       if (res.validation) {
//         message = res.validation.body.message;
//       } else {
//         message = res.error || res.message;
//       }
//       throw new Error(message);
//     });
//   };
  
//   export const register = (name, email, password) => {
//     return fetch(`${BASE_URL}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         email: email,
//         password: password,
//       }),
//     }).then(checkAnswer);
//   };
  
//   export const authorize = (email, password) => {
//     return fetch(`${BASE_URL}/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//       credentials: "include",
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     }).then(checkAnswer);
//   };
  
//   export const logOut = () => {
//     return fetch(`${BASE_URL}/signout`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     }).then(checkAnswer);
//   };
  
//   export const getUser = () => {
//     return fetch(`${BASE_URL}/users/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     }).then(checkAnswer);
//   };
  
//   export const updateUser = (userData) => {
//     return fetch(`${BASE_URL}/users/me`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: userData.name,
//         email: userData.email,
//       }),
//       credentials: "include",
//     }).then(checkAnswer);
//   };
  
//   export const getSavedMovies = () => {
//     return fetch(`${BASE_URL}/movies`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     }).then(checkAnswer);
//   };
  
//   export const addMoviesToSaved = (movie) => {
//     return fetch(`${BASE_URL}/movies`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         country: movie.country || "-",
//         director: movie.director || "-",
//         duration: movie.duration,
//         year: movie.year,
//         description: movie.description,
//         image: movie.image.url,
//         trailerLink: movie.trailerLink,
//         nameRU: movie.nameRU,
//         nameEN: movie.nameEN || "-",
//         thumbnail: movie.image.formats.thumbnail.url,
//         movieId: movie.id,
//       }),
//       credentials: "include",
//     }).then(checkAnswer);
//   };
  
//   export const deleteFromSavedMovies = (movieId) => {
//     return fetch(`${BASE_URL}/movies/${movieId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     }).then(checkAnswer);
//   };

class MainApi {
  constructor(settings) {
    this._settings = settings;
  }
  //qq
  getProfile() {
    return fetch(this._settings.baseUrl + "/users/me", {
      headers: this._headersJwt(),
      credentials: "include",
    }).then(this._checkResponse);
  }

  editProfile(data) {
    return fetch(this._settings.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headersJwt(),
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkResponse);
  }

  // 
  getSaveMovies() {
    return fetch(this._settings.baseUrl + "/movies", {
      headers: this._headersJwt(),
      credentials: "include",
    }).then(this._checkResponse);
  }

  // addNewCard(item) {
  //   return fetch(this._settings.baseUrl + "/cards", {
  //     method: "POST",
  //     headers: this._headersJwt(),
  //     body: JSON.stringify({
  //       name: item.name,
  //       link: item.link,
  //     }),
  //   }).then(this._checkResponse);
  // }
  // //qq
  deleteMovies(id) {
    return fetch(this._settings.baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._headersJwt(),
    }).then(this._checkResponse);
  }
  //qq
  deleteSave(id) {
    return fetch(this._settings.baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._headersJwt(),
    }).then(this._checkResponse);
  }
  //qq
  addSave(data) {
    return fetch(this._settings.baseUrl + "/movies", {
      method: "POST",
      headers: this._headersJwt(),
      body: JSON.stringify({
        country: data.country || ' ',
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url || "",
        trailerLink: data.trailerLink,
        nameRU: data.nameRU || "",
        nameEN: data.nameEN || "",
        thumbnail: data.image.formats.thumbnail.url,
        movieId: data.id,
      }),
    }).then(this._checkResponse);
  }

  _headersJwt() {
    return {
      authorization: "Bearer " + localStorage.getItem("token"),
      ...this._settings.headers,
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => Promise.reject(data));
  }
}

const baseUrl = `${window.location.protocol}${
  process.env.REACT_APP_API_URL || "//localhost:3001"
}`;
// const baseUrl = `${'https://api.movies-lives.nomoredomains.xyz' || 'http://localhost:3000'}`;

export const mainApi = new MainApi({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});