import React from "react";
import MusicWrapper from "./components/musicWrapper/MusicWrapper";
import { music } from "./helpers/music_config";
import Picture from "./components/pictures/Picture";
import { pole_obrazku } from "./helpers/picture_config";
// import { rings_configurate } from "./helpers/rings_configurate";
// import Ring from "./components/rings/Ring";
import History from "./components/history/History";
import MenuList from "./components/menu-list/Menu-list";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <main className="app">
      <Header />
      <MenuList />
      <h1>🎧Music</h1>

      <section className={"music"} id={"music"}>
        {music.map((genre) => (
          <MusicWrapper
            url_obrazku={genre.image_url}
            zdrojova_url={genre.src}
            nazev_zanru={genre.header}
            id_stylu={genre.id}
            key={genre.id}
          />
        ))}
      </section>

      <h1>📸Photos</h1>

      <section className={"pictures"} id={"pictures"}>
        {pole_obrazku.map((obrazek) => (
          <Picture
            zdrojova_url={obrazek.zdrojova_url}
            nazev_obrazku={obrazek.nazev_obrazku}
            key={obrazek.zdrojova_url}
          />
        ))}
      </section>
      <Button />
      {/*<section className={"rings"}>*/}
      {/*  {rings_configurate.map((ring) => (*/}
      {/*    <Ring rings={ring.ring} key={ring.ring} />*/}
      {/*  ))}*/}
      {/*</section>*/}

      <h1>📃Biography</h1>

      <History />
      <Footer />
    </main>
  );
};
export default App;
