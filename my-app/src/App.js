import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import { useRef } from "react"
import TextField from '@mui/material/TextField';
import Weather from './Weather';




function App() {

  const [weatherData, setWeatherData] = useState();
  const [hasData, setHasData] = useState(false)
  const apikey = process.env.REACT_APP_WEATHER


  const cityField = useRef();
  const stateField = useRef();
  const countryField = useRef();
  const generateWeather = (city, state, country) => {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + "," + country + "&limit=1&appid=6f6c0f6c0285668eb9dbf67a3f71be8e")
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data)
        setHasData(true)
      });

  }
  return (
    <div className="App">
      <h1>Weather app</h1>
      <TextField id="city" label="City" variant="outlined" inputRef={cityField} />
      <TextField id="state" label="State" variant="outlined" inputRef={stateField} />
      <TextField id="country" label="Country" variant="outlined" inputRef={countryField} />
      <button onClick={() => generateWeather(cityField.current.value, stateField.current.value, countryField.current.value)}>Log Input</button>
      {hasData && <Weather lat={weatherData[0].lat} lon={weatherData[0].lon} ></Weather>}

    </div>
  );
}

export default App;
