import React from "react";
import "./obrazek.css";

const Obrazek = ({zdrojova_url, nazev_obrazku}) => {
    return (
        <article className={"obrazek"} id={nazev_obrazku}>
            <img src={zdrojova_url} alt={nazev_obrazku}/>
        </article>
    );
};

export default Obrazek;
