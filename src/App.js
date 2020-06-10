import React from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-5} />
      <WeatherCard temp={20} />
    </div>
  );
}

export default App;
