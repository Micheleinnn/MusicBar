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
import Parallax from "./components/parallax/Parallax";
import { parallax_config } from "./helpers/parallax_config";

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

      <div className="wrapper">
        <div className="parallax_group hero-container">
          <div className="parallax_layer bamboo1"></div>
          <div className="parallax_layer bamboo2"></div>
          <div className="parallax_layer panda"></div>

          <div className="parallax_group info-container"></div>
          <div className="social-container">
            <a href="#" target="_blank">
              <i className="icon ion-logo-github"></i>
            </a>
            <a href="#" target="_blank">
              <i className="icon ion-logo-instagram"></i>
            </a>
            <a href="#" target="_blank">
              <i className="icon ion-logo-dribble"></i>
            </a>
            <a href="#" target="_blank">
              <i className="icon ion-logo-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="parallax_group info-container">
        <img
          src="../public/parallax/bamboo.jpg"
          alt={"green bamboo in asia style"}
        />
        <div className="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p> - Vincent Van Gogh</p>
          <a href="#" className="button">
            Get Started Now
          </a>
        </div>
      </div>

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

      <section className={"parallax"}>
        {parallax_config.map((parallax) => (
          <Parallax
            key={parallax.zdrojova_url}
            nazev_parallaxu={parallax.nazev_parallaxu}
            zdrojova_url={parallax.zdrojova_url}
          />
        ))}
      </section>

      <History />

      <a href="tel:00420-605-263-268">Call Me</a>
    </main>
  );
};
export default App;
