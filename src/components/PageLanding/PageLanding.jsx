import "./PageLanding.css";
import React from "react";

function PageLanding(props) {
  const pageLandingClassName = `page__landing ${props.name}`;

  return <div className={pageLandingClassName}>{props.children}</div>;
}

export default PageLanding;