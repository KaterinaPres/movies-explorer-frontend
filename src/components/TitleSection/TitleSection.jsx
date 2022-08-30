import "./TitleSection.css";

import React from "react";

function TitleSection(props) {
  return <h2 className="title__section">{props.name}</h2>;
}

export default TitleSection;