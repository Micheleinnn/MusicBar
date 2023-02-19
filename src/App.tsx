import React, { useState } from "react";
import tabak from "./assets/tabak.jpg";

import "./assets/App.css";
import ImageLink from "./components/ImageLink";

import Audio from "./components/Audio";
import { music } from "./helpers/music_config";

const App = () => {
  return (
    <main className="app">
      <nav className={"navigace"}>
        <ul className={"menu-list"}>
          <li>
            <a href={"#pop"}>
              <h1>Pop</h1>
            </a>
          </li>
          <li>
            <a href={"#hip-hop"}>
              <h1>HipHop</h1>
            </a>
          </li>
          <li>
            <a href={"#rock"}>
              <h1>Rock</h1>
            </a>
          </li>
        </ul>
      </nav>

      <section className={"music"}>
        <article className={"genre"} id={"pop"}>
          <h2>pop</h2>
          <audio controls>
            <source
              src="/media/bbno$%20&%20Rich%20Brian%20-%20edamame%20(Official%20Video).mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"hip-hop"}>
          <h2>hip-hop</h2>
          <audio controls>
            <source
              src="/media/Billie%20Eilish%20-%20bad%20guy.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"rock"}>
          <h2>rock</h2>
          <audio controls>
            <source
              src="/media/Dua%20Lipa%20-%20New%20Rules%20(Official%20Music%20Video).mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"funk"}>
          <h2>pop</h2>
          <audio controls>
            <source
              src="/media/bbno$%20&%20Rich%20Brian%20-%20edamame%20(Official%20Video).mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"blues"}>
          <h2>hip-hop</h2>
          <audio controls>
            <source
              src="/media/Billie%20Eilish%20-%20bad%20guy.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"metal"}>
          <h2>rock</h2>
          <audio controls>
            <source
              src="/media/Dua%20Lipa%20-%20New%20Rules%20(Official%20Music%20Video).mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"mantra"}>
          <h2>pop</h2>
          <audio controls>
            <source
              src="/media/bbno$%20&%20Rich%20Brian%20-%20edamame%20(Official%20Video).mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"klasika"}>
          <h2>hip-hop</h2>
          <audio controls>
            <source
              src="/media/Billie%20Eilish%20-%20bad%20guy.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"dechovka"}>
          <h2>rock</h2>
          <audio controls>
            <source
              src="/media/Dua%20Lipa%20-%20New%20Rules%20(Official%20Music%20Video).mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"jazz"}>
          <h2>pop</h2>
          <audio controls>
            <source src="/media/Rich.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </article>
        git
        <article className={"genre"} id={"techno"}>
          <h2>hip-hop</h2>
          <audio controls>
            <source
              src="/media/Billie%20Eilish%20-%20bad%20guy.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        <article className={"genre"} id={"house"}>
          <h2>rock</h2>
          <audio controls>
            <source
              src="/media/Dua%20Lipa%20-%20New%20Rules%20(Official%20Music%20Video).mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </article>
        {music.map((genre) => (
          <Audio
            src={genre.src}
            header={genre.header}
            id={genre.id}
            key={genre.id}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
