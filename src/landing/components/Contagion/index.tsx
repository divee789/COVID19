import React from "react";

import contagion1 from "../../../assets/images/contagion1.png";
import contagion2 from "../../../assets/images/contagion2.png";
import contagion3 from "../../../assets/images/contagion3.png";
import contagionbug from "../../../assets/images/contagionbug.png";

import "./index.scss";

const Contagion = () => (
  <>
    <section className="contagion_section" id="contagion">
      <p className="span_text">Covid-19</p>
      <h1>Contagion</h1>
      <p className="sub_text">
        Corona viruses are a type of virus. There are many different kinds, and
        some cause disease. A newly identified type
      </p>

      <section className="card_section">
        <img src={contagionbug} alt="bug" className='bug'/>
        <div className="card">
          <img src={contagion1} alt="Contagious" />
          <h2>Transmission</h2>
          <p>
            Objectively evolve tactical expertise before extensible initiatives.
          </p>
        </div>
        <div className="card">
          <img src={contagion2} alt="Contagious" />
          <h2>Human Contacts</h2>
          <p>Washing your hands is one of the simplest ways you can protect.</p>
        </div>
        <div className="card">
          <img src={contagion3} alt="Contagious" />
          <h2>Contaminated Objects</h2>
          <p>
            Use the tissue while sneezing,In this way, you can protect your
            droplets.
          </p>
        </div>
      </section>
    </section>
  </>
);

export default Contagion;
