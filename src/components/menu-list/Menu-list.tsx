import React from "react";
import "./menu-list.css";

const MenuList = () => {
  return (
    <header>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-btn">
        <span className="menu-btn__burger"></span>
      </label>
      <ul className="nav-menu">
        <li>
          <a href="#music">
            <h1>🎧Music</h1>
          </a>
        </li>
        <li>
          <a href="#history">
            <h1>📃Biogr.</h1>
          </a>
        </li>
        <li>
          <a href="#pictures">
            <h1>📸photos</h1>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default MenuList;
