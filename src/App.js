import React, { useState } from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const [city, setCity] = useState("Karachi, pk");
  const data = async () => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=864537e72e5fee3fe0a5ad16c1edf27d`
    );
    const resJSON = await apiRes.json();

    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data().then((res) => {
      console.log(
        "the temp in " + res.name + " feels like " + res.main.feels_like
      );
    });
  };

  return (
    <div className="App">
      <WeatherCard temp={-3} condition="Snow" city="Sydney" country="AU" />
      <WeatherCard temp={30} condition="Clouds" city="Karachi" country="PK" />
      <WeatherCard temp={15} condition="Tornado" city="Lahore" country="PK" />

      <form>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
