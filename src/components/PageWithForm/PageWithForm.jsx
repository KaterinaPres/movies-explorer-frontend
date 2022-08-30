import "./PageWithForm.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function PageWithForm({ name, children, title, captionText, linkText, linkPath}) 
{
  const pageWithFormClassName = `pagewf ${name}`;
  return (
    <section className={pageWithFormClassName}>
      <Link className="pagewf__logo-link" to="/">
        <img className="pagewf__logo" src={logo} alt="" />
      </Link>
      <h2 className="pagewf__title">{title}</h2>
      {children}
      <p className="pagewf__caption">
        {captionText}
        <Link className="link pagewf__link" to={linkPath}>
          {" "}
          {linkText}
        </Link>
      </p>
    </section>
  );
}

export default PageWithForm;