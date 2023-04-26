import React, { useState } from "react";
import "./musicWrapper.css";

const MusicWrapper = ({ id_stylu, zdrojova_url, nazev_zanru, url_obrazku }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(document.getElementById("player"));
  return (
    <article className={"genre"} id={id_stylu}>
      <div className={"imageWrapper"}>
        <img src={url_obrazku} alt={nazev_zanru} />
      </div>
      <h2>{nazev_zanru}</h2>
      <audio id={"player" + zdrojova_url} src={zdrojova_url}></audio>
      <div>
        {!isPlaying ? (
          <button
            onClick={() => {
              document.getElementById("player" + zdrojova_url).play();
              setIsPlaying(true);
            }}
          >
            Play
          </button>
        ) : (
          <button
            onClick={() => {
              document.getElementById("player" + zdrojova_url).pause();
              setIsPlaying(false);
            }}
          >
            Pause
          </button>
        )}
      </div>
    </article>
  );
};

export default MusicWrapper;
