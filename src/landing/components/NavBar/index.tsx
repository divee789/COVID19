import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

import "./index.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo_image">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_items">
          <a href="#overview">
            Overview <span className="circle"></span>
          </a>
          <a href="#contagion">
            Contagion <span className="circle"></span>
          </a>
          <a href="#symptoms">
            Symptoms <span className="circle"></span>
          </a>
          <a href="#preventions">
            Preventions <span className="circle"></span>
          </a>
          <Link to="/statistics" className="button_link">
            View Stats
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
