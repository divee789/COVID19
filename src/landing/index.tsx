import React from "react";
import Header from "./components/Header";
import What from "./components/What";
import Contagion from "./components/Contagion";
import Symptom from "./components/Symptoms";
import Prevention from "./components/Prevention";
import Footer from "./components/Footer";

const LandingPage = () => (
  <>
    <Header />
    <What />
    <Contagion />
    <Symptom />
    <Prevention />
    <Footer />
  </>
);

export default LandingPage;
