import "./Footer.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import PageLanding from "../PageLanding/PageLanding";

export default function Footer() {
  return (
    <Switch>
      <Route exact path={["/movies", "/saved-movies", "/"]}>
        <footer className="footer">
          <PageLanding name="footer__content">
            <h2 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__info">
              <p className="footer__data">© 2022</p>
              <nav className="footer__nav">
                <ul className="footer__links">
                  <li className="footer__link-item">
                    <a href="https://practicum.yandex.ru" className="link footer__link" target="_blank" rel="noreferrer">
                      Яндекс.Практикум
                    </a>
                  </li>
                  <li className="footer__link-item">
                    <a href="https://github.com/KaterinaPres/" className="link footer__link" target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </PageLanding>
        </footer>
      </Route>
    </Switch>
  );
}