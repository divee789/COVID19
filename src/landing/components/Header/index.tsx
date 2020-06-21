import React from "react";
import { Link } from "react-router-dom"

import NavBar from "../NavBar";

import headerImage from "../../../assets/images/header_image.png";

import './index.scss';

const Header = () => {
  return (
    <>
      <header>
        <NavBar />
        <section id="overview">
          <div className="header_info">
            <span>COVID-19 Alert</span>
            <h1>
              Quarantine At Home <br /> To Stop The Corona Virus
            </h1>
            <p>
              There Is No Specific Medicine To Prevent Or Treat Coronavirus
              Disease (COVID-19). People May Need Supportive Care.
            </p>
            <Link to="/statistics">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="header_image">
            <img src={headerImage} alt="covid Illustration" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
