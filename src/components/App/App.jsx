import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="*">
            <ErrorNotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}