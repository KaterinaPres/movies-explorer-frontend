import "./AboutProject.css";
import React from "react";
import PageSection from "../PageSection/PageSection";
import TitleSection from "../TitleSection/TitleSection";

export default function AboutProject() {
  return (
    <PageSection name="about-project" type="main">
      <TitleSection name="О проекте" />
      <div className="about-project__definition definition">
        <h3 className="definition__title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="definition__info">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 className="definition__title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="definition__info">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__weeks">
        <p className="weeks weeks_type_backend">1 неделя</p>
        <p className="weeks weeks_type_frontend">4 недели</p>
        <p className="weeks__caption">Back-end</p>
        <p className="weeks__caption">Front-end</p>
      </div>
    </PageSection>
  );
}