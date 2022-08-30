import "./AboutMe.css";
import React from "react";
import PageSection from "../PageSection/PageSection";
import TitleSection from "../TitleSection/TitleSection";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <PageSection type="main" name="about-me">
      <TitleSection name="Студент" />
      <div className="about-me__content">
        <div className="about-me__info">
          <div className="about-me__description">
            <h3 className="about-me__name">Екатерина</h3>
            <p className="about-me__caption">Фронтенд-разработчик, 38 лет</p>
            <p className="about-me__text">
              Я родилась и живу в Ульяновске, закончила ФИСТ УлГТУ. У
              меня есть муж и сын и&nbsp;дочь. Я люблю слушать музыку, а ещё
              увлекаюсь чтением. Недавно начала писать код. Работаю с 12 лет, пробовала себя 
              в разных сферах. После того, как прошла курс по
              веб&#8209;разработке, хотела заняться фрилансом&#8209; и
              уйти с постоянной работы.
            </p>
          </div>
          {/* <ul className="about-me__social-links"> */}
            <div className="about-me__social-link-item">
              <a
                href="https://github.com/KaterinaPres/"
                target="_blank"
                rel="noreferrer"
                className="link about-me__social-link"
              >
                GitHub
              </a>
            </div>
          {/* </ul> */}
        </div>
        <img src={photo} alt="Моя фотография" className="about-me__pic" />
      </div>
      <Portfolio />
    </PageSection>
  );
}

export default AboutMe;