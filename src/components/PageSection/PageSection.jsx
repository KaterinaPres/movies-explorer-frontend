import "./PageSection.css";

import React from "react";
import Content from "../Content/Content";

export default function PageSection({ name, children }) {
  const sectionClassName = `page__section page__section_type_${name} section`;

  return (
    <section className={sectionClassName} id={name}>
      <Content name={name} children={children} />
    </section>
  );
}