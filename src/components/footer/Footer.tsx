import React from "react";
import "./footer.css";
const Footer = ({}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <a href="https://www.facebook.com/" className="facebook">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="https://twitter.com/" className="twitter">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="https://www.google.com/" className="google">
        <i className="fa fa-google"></i>
      </a>
      <a href="https://www.linkedin.com/" className="linkedin">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://www.youtube.com/" className="youtube">
        <i className="fa fa-youtube"></i>
      </a>
    </div>
  );
};

export default Footer;
