import React from "react";
import "./menu-list.css";

const MenuList = () => {
  return (
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
  );
};

export default MenuList;