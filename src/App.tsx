import React from "react";
import "./App.css";
import Pisnicka from "./components/music/Pisnicka";
import { music } from "./helpers/music_config";
import Picture from "./components/pictures/Picture";
import { pole_obrazku } from "./helpers/picture_config";
import { rings_configurate } from "./helpers/rings_configurate";
import Ring from "./components/rings/Ring";
import "./components/history/history.css";
import "./components/button/button.css";
import History from "./components/history/History";

const App = () => {
  return (
    <main className="app">
      <nav className={"navigace"}>
        <ul className={"menu-list"}>
          <li>
            <a href={"#music"}>
              <h1>🎧</h1>
            </a>
          </li>
          <li>
            <a href={"#history"}>
              <h1>📃</h1>
            </a>
          </li>
          <li>
            <a href={"#pictures"}>
              <h1>📸</h1>
            </a>
          </li>
        </ul>
      </nav>
      <h1>Music Bar🎶</h1>

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

      <section className={"pictures"} id={"pictures"}>
        {pole_obrazku.map((obrazek) => (
          <Picture
            zdrojova_url={obrazek.zdrojova_url}
            nazev_obrazku={obrazek.nazev_obrazku}
            key={obrazek.zdrojova_url}
          />
        ))}
      </section>

      <section className={"rings"}>
        {rings_configurate.map((ring) => (
          <Ring rings={ring.ring} key={ring.ring} />
        ))}
      </section>

      <a
        className="big-button"
        href={"https://www.w3schools.com/html/html_images_background.asp"}
        target="_blank"
      >
        Push Me
      </a>

      <div className="paralax"></div>

      <History />
    </main>
  );
};

export default App;
