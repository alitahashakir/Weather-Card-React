import React from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-3} condition="Snow" city="Sydney" country="AU" />
      <WeatherCard temp={30} condition="Clouds" city="Karachi" country="PK" />
      <WeatherCard
        temp={15}
        condition="Tornado"
        city="Islamabad"
        country="PK"
      />
    </div>
  );
}

export default App;
