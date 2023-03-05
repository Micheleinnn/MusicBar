import React from "react";
import Music from "./components/music/Music";
import { music } from "./helpers/music_config";
import Picture from "./components/pictures/Picture";
import { pole_obrazku } from "./helpers/picture_config";
import { rings_configurate } from "./helpers/rings_configurate";
import Ring from "./components/rings/Ring";
import History from "./components/history/History";
import Parallax from "./components/parallax/Parallax";
import MenuList from "./components/menu-list/Menu-list";
import Button from "./components/button/Button";
import Parallax2 from "./components/parallax2/Parallax2";
import Parallax3 from "./components/parallax3/Parallax3";
import Header from "./components/header/Header";
import Iconbar from "./components/iconbar/Iconbar";
import "./App.css";
const App = () => {
  return (
    <main className="app">
      <Header />
      <MenuList />
      <h1>Music Bar🎶</h1>

      <section className={"music"} id={"music"}>
        {music.map((genre) => (
          <Music
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

      <Button />

      <Parallax />

      <History />

      <Parallax2 />

      <Parallax3 />

      <Iconbar />

      <a href="tel:00420-605-263-268">Call Me</a>
    </main>
  );
};
export default App;
