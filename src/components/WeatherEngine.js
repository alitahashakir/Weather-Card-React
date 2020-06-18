import React, { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });
  const getWeather = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=864537e72e5fee3fe0a5ad16c1edf27d`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: resJSON.main.temp,
      city: resJSON.name,
      country: resJSON.sys.country,
      condition: resJSON.weather[0].main,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />

      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
