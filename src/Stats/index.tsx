import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Request from "../API/covid19";

import logo from "../assets/images/logo.png";

import "./index.scss";

const API = new Request();

const Stats = () => {
  const [statistics, setStatistics] = useState([]);
  const [worldStats, setWorldStats] = useState({
    TotalConfirmed: "",
    TotalDeaths: "",
    TotalRecovered: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const worldData = await API.getWorldStats();
        const data = await API.getAllCountriesStats();
        setWorldStats(worldData);
        setStatistics(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <header>
      <nav>
        <div className="logo_image">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_items">
          <Link to="/" className="button_link">
            Like Us
          </Link>
        </div>
      </nav>
      <div>
        <div>
          <p>Total Cases</p>
          <p>{worldStats.TotalConfirmed}</p>
        </div>
        <div>
          <p>Total Recovered</p>
          <p>{worldStats.TotalRecovered}</p>
        </div>
        <div>
          <p>Total Deaths</p>
          <p>{worldStats.TotalDeaths}</p>
        </div>
      </div>
      <div className="data_section">
        {statistics.map((stat: any) => {
          return (
            <div className="card">
              <img src={stat.flag_url} alt="country flag" />
              <p>{stat.country}</p>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Stats;
