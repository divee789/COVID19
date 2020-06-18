import React from "react";

import image1 from "../../../assets/images/wear_mask.png";
import image2 from "../../../assets/images/wash_hands.png";
import image3 from "../../../assets/images/noserag.png";
import image4 from "../../../assets/images/avoidcontact.png";

import abs1 from "../../../assets/images/prevent1.png";
import abs2 from "../../../assets/images/prevent2.png";
import abs3 from "../../../assets/images/prevent3.png";

import "./index.scss";

const Prevention = () => (
  <>
    <section className="prevention_section" id="preventions">
      <img src={abs1} alt="bug" className="bug1" />
      <img src={abs2} alt="bug" className="bug2" />
      <img src={abs3} alt="bug" className="bug3" />

      <p className="span_text">Covid-19</p>
      <h1 className="heading">What Should We Do</h1>
      <p className="body_text">
        Corona viruses are a type of virus. There are many different kinds, and
        some cause disease. A newly identified type has caused a recent outbreak
        of respiratory
      </p>

      <section>
        <div className="first_task">
          <div>
            <h1>
              <span>01</span> Wear Masks
            </h1>
            <p>
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
            </p>
          </div>
          <div>
            <img src={image1} alt="wear mask" />
          </div>
        </div>
        <div className="second_task">
          <div>
            <img src={image2} alt="wear mask" />
          </div>
          <div>
            <h1>
              <span>02</span> Wash Your Hands
            </h1>
            <p>
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
            </p>
          </div>
        </div>

        <div className="first_task">
          <div>
            <h1>
              <span>03</span> Use Nose Rags
            </h1>
            <p>
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
            </p>
          </div>
          <div>
            <img src={image3} alt="Nose Rag" />
          </div>
        </div>

        <div className="second_task">
          <div>
            <img src={image4} alt="Avoid Contact" />
          </div>
          <div>
            <h1>
              <span>04</span> Avoid Contacts
            </h1>
            <p>
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
            </p>
          </div>
        </div>
      </section>
    </section>
  </>
);

export default Prevention;
