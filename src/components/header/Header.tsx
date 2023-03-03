import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div id="London" className="tabcontent">
        <h1>London</h1>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h1>Paris</h1>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h1>Tokyo</h1>
        <p>Tokyo is the capital of Japan.</p>
      </div>

      <div id="Oslo" className="tabcontent">
        <h1>Oslo</h1>
        <p>Oslo is the capital of Norway.</p>
      </div>

      <button
        className="tablink"
        onClick="openCity('London', this, 'red')"
        id="defaultOpen"
      >
        London
      </button>
      <button className="tablink" onClick="openCity('Paris', this, 'green')">
        Paris
      </button>
      <button className="tablink" onClick="openCity('Tokyo', this, 'blue')">
        Tokyo
      </button>
      <button className="tablink" onClick="openCity('Oslo', this, 'orange')">
        Oslo
      </button>
    </div>
  );
};

export default Header;
