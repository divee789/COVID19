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
      <div className="total_section">
        <div>
          <p>Total Cases</p>
          <p>
            {worldStats.TotalConfirmed.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ",",
            )}
          </p>
        </div>
        <div>
          <p>Total Recovered</p>
          <p>
            {worldStats.TotalRecovered.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ",",
            )}
          </p>
        </div>
        <div>
          <p>Total Deaths</p>
          <p>
            {worldStats.TotalDeaths.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ",",
            )}
          </p>
        </div>
      </div>
      <div className="data_section">
        {statistics.map((stat: any) => {
          return (
            <div className="card">
              <img src={stat.countryInfo.flag} alt="country flag" />
              <div>
                <div>
                  <p>Country</p>
                  <p>{stat.country}</p>
                </div>
                <div>
                  <p>Continent</p>
                  <p>{stat.continent}</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Total Cases</p>
                  <p>{stat.cases}</p>
                </div>
                <div>
                  <p>Critical Cases</p>
                  <p>{stat.critical}</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Population</p>
                  <p>{stat.population}</p>
                </div>
                <div>
                  <p>Total Deaths</p>
                  <p>{stat.deaths}</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Total Recovered</p>
                  <p>{stat.recovered}</p>
                </div>
                <div>
                  <p>Total tests</p>
                  <p>{stat.tests}</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Today Cases</p>
                  <p>{stat.todayCases}</p>
                </div>
                <div>
                  <p>Today Deaths</p>
                  <p>{stat.todayDeaths}</p>
                </div>
                <div>
                  <p>Today Recovered</p>
                  <p>{stat.todayRecovered}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Stats;
