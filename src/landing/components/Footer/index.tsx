import React from "react";

import logo from "../../../assets/images/logo.png";
import smallWhat from "../../../assets/images/what1.png";
import smallerWhat from "../../../assets/images/what2.png";

import "./index.scss";

const Footer = () => (
  <>
    <footer>
      <img src={smallWhat} alt="bug" className="smallBug" />
      <img src={smallerWhat} alt="bug" className="smallerBug" />
      <div className="footer_header">
        <h1>Have a Question in Mind ?</h1>
        <h1>Let us help you</h1>
        <div>
          <input type="text" placeholder="myemail@gmail.com" />
          <button>Send</button>
        </div>
      </div>
      <div className="footer_nav">
        <div className="logo_image">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_items">
          <a href="#overview">Overview</a>
          <a href="#contagion">Contagion</a>
          <a href="#symptoms">Symptoms</a>
          <a href="#preventions">Preventions</a>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
