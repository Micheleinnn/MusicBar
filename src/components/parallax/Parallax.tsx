import React from "react";
import "./parallax.css";

const Parallax = ({ zdrojova_url, nazev_parallaxu }) => {
  return (
    <article className={"parallax"} id={"parallax"}>
      <img src={zdrojova_url} alt={nazev_parallaxu} />
    </article>
  );
};
export default Parallax;
