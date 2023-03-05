import React from "react";
import "./header.css";
const Header = () => {
  function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }

  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").onclick();

  // Get the element with id="defaultOpen" and click on it
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

      <div className="button-container">
        <button
          className="tablink"
          onClick={() => openCity("London", this, "red")}
          id="defaultOpen"
        >
          London
        </button>
        <button
          className="tablink"
          onClick={() => openCity("Paris", this, "green")}
        >
          Paris
        </button>
        <button
          className="tablink"
          onClick={() => openCity("Tokyo", this, "blue")}
        >
          Tokyo
        </button>
        <button
          className="tablink"
          onClick={() => openCity("Oslo", this, "orange")}
        >
          Oslo
        </button>
      </div>
    </div>
  );
};

export default Header;
