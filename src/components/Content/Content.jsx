import "./Content.css";
import React from "react";

export default function Content(props) {
  const pageContentClassName = `page__content ${props.name}`;

  return <div className={pageContentClassName}>{props.children}</div>;
}