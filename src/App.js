import React, { useState, useEffect } from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const [query, setQuery] = useState("Karachi, pk");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });
  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=864537e72e5fee3fe0a5ad16c1edf27d`
    );
    const resJSON = await apiRes.json();

    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        country: res.sys.country,
        condition: res.weather[0].main,
      });
      console.log(
        "the temp in " + res.name + " feels like " + res.main.feels_like
      );
    });
  };

  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        country: res.sys.country,
        condition: res.weather[0].main,
      });
    });
  }, []);

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
}

export default App;
