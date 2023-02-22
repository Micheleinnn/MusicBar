import React, { useState } from "react";
import "./App.css";
import Pisnicka from "./components/music/Pisnicka";
import { music } from "./helpers/music_config";
import Picture from "./components/pictures/Picture";
import { pole_obrazku } from "./helpers/picture_config";

const App = () => {
  return (
    <main className="app">
      <nav className={"navigace"}>
        <ul className={"menu-list"}>
          <li>
            <a href={"#music"}>
              <h1>Names of songs</h1>
            </a>
          </li>
          <li>
            <a href={"#history"}>
              <h1>History</h1>
            </a>
          </li>
          <li>
            <a href={"#obrazky"}>
              <h1>Pictures</h1>
            </a>
          </li>
        </ul>
      </nav>
      <h1>Names of songs</h1>
      <section className={"music"} id={"music"}>
        {music.map((genre) => (
          <Pisnicka
            zdrojova_url={genre.src}
            nazev_zanru={genre.header}
            id_stylu={genre.id}
            key={genre.id}
          />
        ))}
      </section>

      <section className={"pictures"} id={"obrazky"}>
        {pole_obrazku.map((obrazek) => (
          <Picture
            zdrojova_url={obrazek.zdrojova_url}
            nazev_obrazku={obrazek.nazev_obrazku}
            key={obrazek.zdrojova_url}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
