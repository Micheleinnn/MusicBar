import React from "react";

const Audio = ({ id, src, header }) => {
  return (
    <article className={"genre"} id={id}>
      <h2>{header}</h2>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </article>
  );
};

export default Audio;
