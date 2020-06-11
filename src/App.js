import React from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-5} condition="Clear" />
      <WeatherCard temp={20} condition="Clouds" />
      <WeatherCard temp={10} />
    </div>
  );
}

export default App;
