import "./Navigation.css";
import React, { useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import profile from "../../images/profile.svg";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseMenu();
    }
  };

  return (
    <>
      <Route exact path="/">
        <div className="header__links">
          <Link className="link header__reg-link" to="/signup">
            Регистрация
          </Link>
          <Link className="button header__login-button" to="/signin">
            Войти
          </Link>
        </div>
      </Route>

      <Route exact path={["/movies", "/saved-movies", "/profile"]}>
        <button
          className="button header__nav-button header__nav-button_type_menu"
          type="button"
          onClick={handleMenuClick}
        >
          <img src={menu} className="header__nav-icon" alt='Меню'></img>
        </button>
        <nav
          className={`header__nav ${menuOpen ? " header__nav_open" : ""}`}
          onClick={handleOverlayClick}
        >
          <button
            className="button header__nav-button header__nav-button_type_close"
            type="button"
            onClick={handleCloseMenu}
          >
            <img src={close} className="header__nav-icon" alt='Закрыть'></img>
          </button>
          <ul className="header__nav-links" id="nav-links">
            <li className="header__nav-link-item header__nav-link-item_type_main">
              <Link
                className="link header__nav-link"
                to="/"
                onClick={handleCloseMenu}
              >
                Главная
              </Link>
            </li>
            <li className="header__nav-link-item header__nav-link-item_type_movies">
              <NavLink
                className="link header__nav-link"
                activeClassName="header__nav-link_active"
                to="/movies"
                onClick={handleCloseMenu}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header__nav-link-item header__nav-link-item_type_saved-movies">
              <NavLink
                className="link header__nav-link"
                activeClassName="header__nav-link_active"
                to="/saved-movies"
                onClick={handleCloseMenu}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className="header__nav-link-item header__nav-link-item_type_profile">
              <Link
                className="link header__profile-link"
                to="/profile"
                onClick={handleCloseMenu}
              >
                <img
                  src={profile}
                  alt="Иконка профиля"
                  className="header__profile-link-icon"
                />
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>
      </Route>
    </>
  );
}