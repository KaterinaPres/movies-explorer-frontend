// import "./App.css";
// import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
// import Main from "../Main/Main";
// import Header from "../Header/Header";
// import Movies from "../Movies/Movies";
// import Footer from "../Footer/Footer";
// import Register from "../Register/Register";
// import Login from "../Login/Login";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../Profile/Profile";
// import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import * as mainApi from "../../utils/MainApi";
// import * as movieApi from "../../utils/MoviesApi";
// import ProtectedRoute from "../ProtectedRoute";
// import AlertMessage from "../AlertMessage/AlertMessage";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [loggedIn, setLoggedIn] = useState(null);
//   const [currentUser, setCurrentUser] = useState({});
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isActiveForUpdate, setIsActiveForUpdate] = useState(false);
//   const [profileErrorMessage, setProfileErrorMessage] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [savedMovies, setSavedMovies] = useState([]);
//   const [alertIsOpen, setAlertIsOpen] = useState(false);

//   const history = useHistory();

//   const location = useLocation();
//   const getUserInfo = () => {
//     mainApi
//       .getUser()
//       .then((user) => {
//         setCurrentUser(user);
//         setLoggedIn(true);
//       })
//       .catch((err) => {
//         setLoggedIn(false);
//         setCurrentUser({});
//         setSavedMovies([]);
//         setMovies([]);
//         localStorage.clear();
//       });
//   };

//   const getMovies = () => {
//     movieApi
//       .getAllMovies()
//       .then((movies) => {
//         movies.forEach((movie) => {
//           movie.image.formats.thumbnail.url = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
//           movie.image.url = `https://api.nomoreparties.co${movie.image.url}`;
//         });
//         setMovies(movies);
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//         setAlertIsOpen(true);
//       });
//   };

//   const getSavedMovies = () => {
//     mainApi
//       .getSavedMovies()
//       .then((movies) => {
//         setSavedMovies(movies);
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//         setAlertIsOpen(true);
//       });
//   };

//   useEffect(() => {
//     getUserInfo();
//   }, []);

//   useEffect(() => {
//     if (loggedIn) {
//       getSavedMovies();
//     }
//   }, [loggedIn]);

//   useEffect(() => {
//     errorMessage && setErrorMessage("");
//     setAlertIsOpen(false);
//   }, [location.pathname]);

//   const addMovieToSaved = (movie) => {
//     mainApi
//       .addMoviesToSaved(movie)
//       .then((movie) => {
//         setSavedMovies([movie, ...savedMovies]);
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//         setAlertIsOpen(true);
//       });
//   };

//   const deleteMovieFromSaved = (savedMovieId) => {
//     mainApi
//       .deleteFromSavedMovies(savedMovieId)
//       .then(() => {
//         setSavedMovies((prevState) =>
//           prevState.filter((item) => item._id !== savedMovieId)
//         );
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//         setAlertIsOpen(true);
//       });
//   };

//   const searchMovies = (query, moviesArray) => {
//     return moviesArray.filter((movie) => {
//       return (
//         (query.shortFilms ? movie.duration <= 40 : true) &&
//         (query.nameRU
//           ? movie.nameRU.toLowerCase().includes(query.nameRU.toLowerCase())
//           : true)
//       );
//     });
//   };

//   const onLogin = (email, password) => {
//     mainApi
//       .authorize(email, password)
//       .then(() => {
//         getUserInfo();
//         setErrorMessage("");
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//       });
//   };

//   const onRegister = (name, email, password) => {
//     mainApi
//       .register(name, email, password)
//       .then(() => {
//         onLogin(email, password);
//         setErrorMessage("");
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//       });
//   };

//   const onLogOut = () => {
//     mainApi
//       .logOut()
//       .then(() => {
//         setLoggedIn(false);
//         setCurrentUser({});
//         setSavedMovies([]);
//         setMovies([]);
//         localStorage.clear();
//         history.push("/");
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//       });
//   };

//   const onProfileUpdate = (user) => {
//     mainApi
//       .updateUser(user)
//       .then((user) => {
//         setCurrentUser(user);
//         setSuccessMessage("Ваши данные успешно обновлены");
//         setIsActiveForUpdate(false);
//       })
//       .catch((err) => {
//         setErrorMessage(err.message);
//         setProfileErrorMessage(err.message);
//       });
//   };

//   const onProfileEdit = () => {
//     setIsActiveForUpdate(true);
//   };

// import logo from '../../logo.svg';
import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import "./App.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Navigation from "../Navigation/Navigation.jsx";
import * as moviesAuth from "../../utils/MoviesAuth";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import HeaderNoAuth from "../HeaderNoAuth/HeaderNoAuth.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function App() {
  const [isHeaderAuthOpen, setIsHeaderAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [disabled, setDisabled] = useState("disabled");
  const [textOpen, setTextOpen] = useState("false");
  const [filterMessage, setFilterMessage] = useState([]);
  const [profileMessage, setProfileMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [isRegistMessage, setIsRegistMessage] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [isLoginMessage, setIsLoginMessage] = useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [buttomMoviesMore, setButtomMoviesMore] = useState(false);
  const [savedMovies, setSavedMovies] = useState({});
  const [likeButtonSaved, setLikeButtonSaved] = useState("false");
  const [filmsSaveFilter, setFilmsSaveFilter] = useState({});

  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getProfile()
        .then((useData) => {
          setCurrentUser(useData);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    updateFilterMessage();
    updateRegisterMessage();
  }, []);

  function updateFilterMessage() {
    setTextOpen("false");
    setFilterMessage("");
  }

  function updateRegisterMessage() {
    setRegisterMessage("");
    setLoginMessage("");
  }

  function filterSavedMoviesClick(keyValue) {
    updateFilterMessage();
    const filmsSaveFilter = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyValue.toLowerCase());
    });

    if (filmsSaveFilter.length === 0) {
      setTextOpen("true");
      setFilterMessage("«Ничего не найдено»");
    }

    if (keyValue === "") {
      setTextOpen("true");
      setFilterMessage("«Нужно ввести ключевое слово»");
    }
    setIsPreloaderOpen(false);
    setFilmsSaveFilter(filmsSaveFilter);
  }

  function handleGetMovies(keyValue) {
    setIsPreloaderOpen(true);
    updateFilterMessage();
    setButtomMoviesMore(false);

    if (keyValue.length === 0) {
      setTextOpen("true");
      setFilterMessage("«Нужно ввести ключевое слово»");
      setIsPreloaderOpen(false);
    } else {
      moviesApi
        .getMovies()
        .then((data) => {
          let serialObj = JSON.stringify(data); //сериализуем obj
          localStorage.setItem("movies", serialObj); //запишем его в хранилище по ключу
          let returnObj = JSON.parse(localStorage.getItem("movies")); //спарсим его обратно объект
          setMovies(returnObj);
        })
        .catch((err) => {
          console.log("Error: ", err);
          setTextOpen("true");
          setFilterMessage(
            "«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»"
          );
          setIsPreloaderOpen(false);
        });

      handleFilterFilm(keyValue);
    }
  }

  function handleGetSaveMovies() {
    mainApi
      .getSaveMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFilterFilm(keyValue) {
    const filmsFilter = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyValue.toLowerCase());
    });

    if (filmsFilter.length === 0) {
      setTextOpen("true");
      setFilterMessage("«Ничего не найдено»");
    }
    if (filmsFilter.length > 3) {
      setButtomMoviesMore(true);
    }
    setIsPreloaderOpen(false);
    let serialObj = JSON.stringify(filmsFilter);
    localStorage.setItem("filmsFilter", serialObj);
    let returnObj = JSON.parse(localStorage.getItem("filmsFilter"));
    setFilterMovies(returnObj);
  }

  function handleUpdateUser(data) {
    mainApi
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setUserData(res);
        setIsEditProfile(false);
        setDisabled("disabled");
      })
      .catch((err) => {
        setProfileMessage(err.message);
        console.log(err);
      });

    setProfileMessage("");
  }

  function handleEditPrifile() {
    setIsEditProfile(true);
    setDisabled(null);
  }

  function hendleHeaderAuthClick() {
    setIsHeaderAuthOpen(true);
  }

  function closeHeaderMenu() {
    setIsHeaderAuthOpen(false);
  }

  function handleMoviesSaveDelite(film) {
    const isSaved = savedMovies.some((savedMovie) => {
      return savedMovie.movieId === film.id;
    });

    isSaved
      ? mainApi
        .deleteSave(film._id)
        .then(() => {
          setSavedMovies((prevState) =>
            prevState.filter((item) => item._id !== film._id)
          );
        })
        .catch((res) => {
          console.log(res);
        })
      : mainApi
        .addSave(film)
        .then((newMovies) => {
          setSavedMovies([newMovies, ...savedMovies]);
        })
        .catch((res) => {
          console.log(res);
        });
  }

  function handleMoviesDelete(film) {
    mainApi
      .deleteMovies(film._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== film._id)
        );
      })
      .catch((res) => {
        console.log(res);
      });
  }

  const handleLogin = ({ email, password }) => {
    updateRegisterMessage();
    return moviesAuth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          tokenCheck();
        }
        setLoginMessage("");
      })
      .catch((err) => {
        setLoginMessage(err.message);
        setIsLoginMessage(true);
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    updateRegisterMessage();

    return moviesAuth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        setRegisterMessage("");
      })
      .catch((err) => {
        setRegisterMessage(err.message);
        setIsRegistMessage(true);
        console.log(err);
      });
  };

  const tokenCheck = () => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");

      moviesAuth
        .getContent(token)
        .then((res) => {
          if (res) {
            let userData = {
              name: res.name,
              email: res.email,
            };

            setLoggedIn(true);
            setUserData(userData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const singOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("movies");
    history.push("/signin");
  };

  useEffect(() => {
    tokenCheck();
    console.log(333);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
      handleGetSaveMovies();
    }
    console.log(444);
  }, [loggedIn, history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <HeaderAuth
                name="auth-main"
                onHeaderAuth={hendleHeaderAuthClick}
              />
            ) : (
              <HeaderNoAuth />
            )}
            <Main />
          </Route>
          <div className="page__main">
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies">
              <Movies
                message={filterMessage}
                textOpen={textOpen}
                onGetMovies={handleGetMovies}
                filterMovies={filterMovies}
                isOpen={isPreloaderOpen}
                buttomMoviesMore={buttomMoviesMore}
                onMoviesClickSave={handleMoviesSaveDelite}
                savedMovies={savedMovies}
              />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <HeaderAuth name="auth" onHeaderAuth={hendleHeaderAuthClick} />
              <SavedMovies
                filterSavedMoviesClick={filterSavedMoviesClick}
                handleMoviesDelete={handleMoviesDelete}
                savedMovies={savedMovies}
                filmsSaveFilter={filmsSaveFilter}
                message={filterMessage}
                textOpen={textOpen}
                setFilmsSaveFilter={setFilmsSaveFilter}
                isOpen={isPreloaderOpen}
              />
              <Footer name="saved" />
            </Route>
            <Route path="/profile" >
              <Profile
                onUpdateUser={handleUpdateUser}
                isOpen={isEditProfile}
                userData={userData}
                singOut={singOut}
                handleEditPrifile={handleEditPrifile}
                disabled={disabled}
                profileMessage={profileMessage}
              />
            </Route>
            <Route path="/signin">
              <Login
                isOpen={isLoginMessage}
                message={loginMessage}
                handleLogin={handleLogin}
              />
            </Route>
            <Route path="/signup">
              <Register
                isOpen={isRegistMessage}
                message={registerMessage}
                handleRegister={handleRegister}
              />
            </Route>
            <Route path="*">
              <ErrorNotFound />
            </Route>
          </div>
        </Switch>
        <Navigation isOpen={isHeaderAuthOpen} onClose={closeHeaderMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}