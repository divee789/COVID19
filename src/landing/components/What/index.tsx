import React from "react";

import whatImage from "../../../assets/images/what.png";
import smallWhat from "../../../assets/images/what1.png";
import smallerWhat from "../../../assets/images/what2.png";

import "./index.scss";

const What = () => (
  <>
    <section className="what_section">
      <img src={smallWhat} className="smallImage" alt="blob" />
      <img src={smallerWhat} className="smallImage2" alt="blob" />
      <div>
        <img src={whatImage} alt="Virus Illustration" />
      </div>
      <div>
        <span>What is Covid-19</span>
        <h1>Coronavirus</h1>
        <p>
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory illness now called COVID-19.Lauren Sauer,
          M.S., the director of operations with the Johns Hopkins Office of
          Critical Event Preparedness and Response
        </p>
        <button>Learn More</button>
      </div>
    </section>
  </>
);

export default What;
