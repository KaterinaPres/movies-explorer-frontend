import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Content from "../Content/Content";
// import PageLanding from "../PageLanding/PageLanding";
import Navigation from "../Navigation/Navigation";

export default function Header(loggedIn) {
  const location = useLocation();
  const headerName = `header${location.pathname === "/" ? " header__theme_dark" : ""
    }`;
    if (loggedIn === null) {
      return null;
    }
  return (
    <Switch>
      <Route exact path={["/movies", "/saved-movies", "/profile", "/"]}>
        <header className={headerName}>
          <Content name="header__content">
            <Link to="/" className="header__logo-link">
              <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <Navigation loggedIn={loggedIn} />
          </Content>
        </header>
      </Route>
    </Switch>
  );
}