import React from "react";
import NavBar from "../NavBar";

import headerImage from "../../../assets/images/header_image.png";

import './index.scss';

const Header = () => {
  return (
    <>
      <header>
        <NavBar />
        <section id='overview'>
          <div className="header_info">
            <span>COVID-19 Alert</span>
            <h1>Stay At Home Quarantine To Stop Corona Virus</h1>
            <p>
              There Is No Specific Medicine To Prevent Or Treat Coronavirus
              Disease (COVID-19). People May Need Supportive Care Too.
            </p>
            <button>Learn More</button>
          </div>
          <div className='header_image'>
            <img src={headerImage} alt="covid Illustration" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
