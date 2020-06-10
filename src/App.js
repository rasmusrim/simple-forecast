import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar'
import Temperature from './Temperature'


function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  
  const getNewForecastClicked = function(latitude, longitude) {
    setLatitude(latitude);
    setLongitude(longitude);
  }

  return (
    <div className="App">
      <div>
      <Toolbar getNewForecast={ getNewForecastClicked } />
      </div>

      <div>
      <Temperature longitude={ longitude } latitude={ latitude } />
      </div>

    </div>
  );
}

export default App;
