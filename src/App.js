import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Karachi, pk" />
    </div>
  );
}

export default App;
