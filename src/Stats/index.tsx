import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Request from "../API/covid19";

import logo from "../assets/images/logo.png";

import "./index.scss";

const API = new Request();

const Stats = (props) => {
  const [loading, setLoading] = useState(false);
  const [statistics, setStatistics] = useState([]);
  const [statisticsA, setStatisticsA] = useState([]);
  const [worldStats, setWorldStats] = useState({
    TotalConfirmed: "",
    TotalDeaths: "",
    TotalRecovered: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const worldData = await API.getWorldStats();
        const data = await API.getAllCountriesStats();
        setLoading(false);
        setWorldStats(worldData);
        setStatistics(data);
        setStatisticsA(data);
      } catch (error) {
        alert("There has been an error getting the coronavirus data");
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <header>
      <nav>
        <div
          className="logo_image"
          onClick={() => {
            props.history.push("/");
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_items">
          <Link to="/" className="button_link">
            Like Us
          </Link>
        </div>
      </nav>
      {loading && (
        <p style={{ textAlign: "center", marginTop: "15%" }}>
          Loading Data....
        </p>
      )}
      {!loading && (
        <>
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
          <div className="search_container">
            <input
              type="text"
              placeholder="Search for a Country by Name"
              onChange={(e) => {
                if (e.target.value === "") {
                  setStatistics(statisticsA);
                } else {
                  const filterByFirstLetterStatistics = statistics.filter(
                    (stat: any) =>
                      stat.country
                        .toLowerCase()
                        .startsWith(e.target.value.toLowerCase()),
                  );
                  setStatistics(filterByFirstLetterStatistics);
                }
              }}
            />
          </div>
          <div className="data_section">
            {statistics.map((stat: any) => {
              return (
                <div className="card">
                  <img src={stat.countryInfo.flag} alt="country flag" />
                  <div className="card_info">
                    <div>
                      <p>Country</p>
                      <p>{stat.country}</p>
                    </div>
                    <div>
                      <p>Continent</p>
                      <p>{stat.continent}</p>
                    </div>
                  </div>

                  <div className="card_info">
                    <div>
                      <p>Total Cases</p>
                      <p>
                        {stat.cases
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                    <div>
                      <p>Critical Cases</p>
                      <p>
                        {stat.critical
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                  </div>

                  <div className="card_info">
                    <div>
                      <p>Population</p>
                      <p>
                        {stat.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                    <div>
                      <p>Total Deaths</p>
                      <p>
                        {stat.deaths
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                  </div>

                  <div className="card_info">
                    <div>
                      <p>Total Recovered</p>
                      <p>
                        {stat.recovered
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                    <div>
                      <p>Total tests</p>
                      <p>
                        {stat.tests
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                  </div>

                  <div className="card_info">
                    <div>
                      <p>Today Cases</p>
                      <p>
                        {stat.todayCases
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                    <div>
                      <p>Today Deaths</p>
                      <p>
                        {stat.todayDeaths
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                  </div>

                  <div className="card_info">
                    <div>
                      <p>Today Recovered</p>
                      <p>
                        {stat.todayRecovered
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </header>
  );
};

export default withRouter(Stats);
