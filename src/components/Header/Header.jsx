import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import PageLanding from "../PageLanding/PageLanding";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const location = useLocation();
  const headerName = `header${location.pathname === "/" ? " header__theme_dark" : ""
    }`;
  return (
    <Switch>
      <Route exact path={["/movies", "/saved-movies", "/profile", "/"]}>
        <header className={headerName}>
          <PageLanding name="header__content">
            <Link to="/" className="header__logo-link">
              <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <Navigation />
          </PageLanding>
        </header>
      </Route>
    </Switch>
  );
}