import React from "react";
import "./MoviesCardList.css";
import PageSection from "../PageSection/PageSection";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
export default function MoviesCardList(props) {

  return (
    <PageSection name={props.name}>
      <ul className="movies-conteiner">{props.children}</ul>
      {props.pagination && <LoadMoreButton onLoadMore={props.onLoadMore} />}
      {props.children}
    {/* </section> */}
    </PageSection >
  );
}