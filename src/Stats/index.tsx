import React, { useEffect, useState } from "react";
import Request from "../API/covid19";

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
        console.log(worldData);
        setWorldStats(worldData);
        setStatistics(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <p>{worldStats.TotalConfirmed}</p>
        <p>{worldStats.TotalDeaths}</p>
        <p>{worldStats.TotalRecovered}</p>
      </div>
      {statistics.map((stat: any) => {
        return <p>{stat.country}</p>;
      })}
    </>
  );
};

export default Stats;
