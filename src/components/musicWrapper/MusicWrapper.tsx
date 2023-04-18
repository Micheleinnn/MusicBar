import React from "react";
import "./musicWrapper.css";
const MusicWrapper = ({ id_stylu, zdrojova_url, nazev_zanru }) => {
  return (
    <article className={"genre"} id={id_stylu}>
      <h2>{nazev_zanru}</h2>
      <audio controls>
        <source src={zdrojova_url} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </article>
  );
};

export default MusicWrapper;
