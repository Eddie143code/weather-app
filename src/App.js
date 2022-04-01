import React, { useState, useEffect } from "react";
import Day from "./components/Day";

import capitalcities from "./components/capitalcities";
import Startscreen from "./components/Startscreen";
import Sunny from "./Sunny.svg";
import Cloudy from "./Cloudy.svg";
import Rain from "./Rain.svg";
import Snow from "./Snow.svg";

import "./index.css";

function App() {
  // initiate variables in state
  const [getStart, setGetStart] = useState(true);
  const [city, setCity] = useState(sessionStorage.getItem("chosencity"));
  const [temperature, setTemperature] = useState(
    sessionStorage.getItem("chosentemperature")
  );
  const [condition, setCondition] = useState(
    sessionStorage.getItem("chosencondition")
  );
  const [wind, setWind] = useState(sessionStorage.getItem("chosenwind"));
  const [image, setImage] = useState(sessionStorage.getItem("chosenimage"));
  const [displayWeather, setDisplayWeather] = useState(
    sessionStorage.getItem("chosenweather")
  );
  const [error, setError] = useState(false);

  // function that fetches information from api

  const fetchCity = () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=49b3729be16b44f89da73548221803&q=${city}&aqi=no`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temp = data.current.temp_c;
        const cond = data.current.condition.text;
        const windspeed = data.current.wind_kph;

        handleFetch(temp, cond, windspeed);
      });
  };

  // Function that determines the condition and temperature

  const handleFetch = (temp, cond, windspeed) => {
    if (city) {
      setTemperature(temp);
      setCondition(cond);
      setWind(windspeed);
    }
    if (cond.includes("Sunny")) {
      setImage(Sunny);
    } else if (cond.includes("Clear")) {
      setImage(Sunny);
    } else if (cond.includes("Cloudy")) {
      setImage(Cloudy);
    } else if (cond.includes("Partly")) {
      setImage(Cloudy);
    } else if (cond.includes("Overcast")) {
      setImage(Cloudy);
    } else if (cond.includes("Rain")) {
      setImage(Rain);
    } else if (cond.includes("rain")) {
      setImage(Rain);
    } else if (cond.includes("Snow")) {
      setImage(Snow);
    } else if (cond.includes("snow")) {
      setImage(Snow);
    }
  };

  // function that changes the city whose information the api is fetching

  const handleInput = (event) => {
    let value = event.target.value;
    value = value.toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1);
    if (event.key === "Enter") {
      if (capitalcities.includes(value)) {
        setError(false);
        setCity(event.target.value);
      } else {
        setError(true);
        setCity();
      }

      if (city === "") {
        setDisplayWeather(false);
      } else if (city !== "") {
        setDisplayWeather(true);
      }
    }
  };

  // Button to change from start screen to search screen and back
  const handleClick = () => {
    setGetStart(!getStart);
  };

  // Used to fetch api data
  useEffect(() => {
    sessionStorage.setItem("chosencity", city);
    sessionStorage.setItem("chosentemperature", temperature);
    sessionStorage.setItem("chosencondition", condition);
    sessionStorage.setItem("chosenwind", wind);
    sessionStorage.setItem("chosenweather", displayWeather);
    fetchCity();
    sessionStorage.setItem("chosenimage", image);
  }, [city]);

  return (
    <main>
      {getStart ? (
        <Startscreen onClick={handleClick} />
      ) : (
        <Day
          city={city}
          temperature={temperature}
          condition={condition}
          wind={wind}
          onKeyPress={handleInput}
          image={image}
          displayWeather={displayWeather}
          error={error}
          onClick={handleClick}
        />
      )}
    </main>
  );
}

export default App;
