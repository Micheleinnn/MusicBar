import React, {useState} from "react";
import tabak from "./assets/tabak.jpg";

import "./assets/App.css";
import ImageLink from "./components/ImageLink";

import Audio from "./components/Audio";
import {music} from "./helpers/music_config";

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
