import React, { useState } from "react";
import "./picture.css";

const Obrazek = ({ zdrojova_url, nazev_obrazku }) => {
  const [showNadpis, setShowNadpis] = useState(false);

  const handleMouseEnter = () => {
    setShowNadpis(true);
  };

  const handleMouseLeave = () => {
    setShowNadpis(false);
  };

  return (
    <article className={"obrazek"} id={nazev_obrazku}>
      <img
        src={zdrojova_url}
        alt={nazev_obrazku}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showNadpis && <h2>{nazev_obrazku}</h2>}
    </article>
  );
};

export default Obrazek;
