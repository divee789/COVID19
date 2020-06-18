import React from "react";

import symptomImage from "../../../assets/images/symptoms2.png";

import "./index.scss";

const Symptoms = () => {
  return (
    <>
      <section className="symptoms_section"id="symptoms">
        <p className="span_text">What is Covid-19</p>
        <h1>Symptoms</h1>
        <p className='body_text'>
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory
        </p>

        <img src={symptomImage} alt="symptoms" />
      </section>
    </>
  );
};

export default Symptoms;
