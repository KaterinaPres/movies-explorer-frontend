import "./Promo.css";

import React from "react";
import PageSection from "../PageSection/PageSection";

export default function Promo() {
  return (
    <PageSection name="promo" type="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
    </PageSection>
  );
}