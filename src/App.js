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

  const [displayWeather, setDisplayWeather] = useState(
    sessionStorage.getItem("displayweather", "")
  );

  const [displayBlock, setDisplayBlock] = useState(
    sessionStorage.getItem("displayblock", false)
  );

  const [error, setError] = useState(false);

  const [city, setCity] = useState("");

  /* const [condition, setCondition] = useState("") */

  const [weatherData, setWeatherData] = useState([]);

  const [info, setInfo] = useState(false);

  // function that fetches information from api and stores it as an object in the weatherData array

  const fetchCity = () => {
    console.log("in fetch");

    if (city) {
      const url = `http://api.weatherapi.com/v1/current.json?key=49b3729be16b44f89da73548221803&q=${city}&aqi=no`;

      if (capitalcities.includes(city)) {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            let information = {
              city: city,

              temp: data.current.temp_c,
              precip: data.current.precip_mm,
              wind: data.current.wind_kph,
              humid: data.current.humidity,
              press: data.current.pressure_in,
            };

            /* const weatherinfo = [
              "Sunny",
              "Clear",
              "Cloudy",
              "Partly",
              "Overcast",
              "Rain",
              "rain",
              "Snow",
              "snow",
            ];

             for (let i = 0; i < weatherinfo.length; i++) {
              if (
                data.current.condition.text.includes(weatherinfo[0]) ||
                data.current.condition.text.includes(weatherinfo[1])
              ) {
                information = { ...information, image: Sunny };
              } else if (
                data.current.condition.text.includes(weatherinfo[2]) ||
                data.current.condition.text.includes(weatherinfo[3]) ||
                data.current.condition.text.includes(weatherinfo[4])
              ) {
                information = { ...information, image: Cloudy };
              } else if (
                data.current.condition.text.includes(weatherinfo[5]) ||
                data.current.condition.text.includes(weatherinfo[6])
              ) {
                information = { ...information, image: Rain };
              } else if (
                data.current.condition.text.includes(weatherinfo[7]) ||
                data.current.condition.text.includes(weatherinfo[8])
              ) {
                information = { ...information, image: Snow };
              }
            }
            */
            if (
              data.current.condition.text.includes("Sunny") ||
              data.current.condition.text.includes("Clear")
            ) {
              information = { ...information, image: Sunny };
            } else if (
              data.current.condition.text.includes("Cloudy") ||
              data.current.condition.text.includes("Partly") ||
              data.current.condition.text.includes("Overcast") ||
              data.current.condition.text.includes("Mist")
            ) {
              information = { ...information, image: Cloudy };
            } else if (
              data.current.condition.text.includes("Rain") ||
              data.current.condition.text.includes("rain")
            ) {
              information = { ...information, image: Rain };
            } else if (
              data.current.condition.text.includes("Snow") ||
              data.current.condition.text.includes("snow")
            ) {
              information = { ...information, image: Snow };
            } else {
            }
            if (weatherData.length > 3) {
            } else {
              setDisplayBlock(true);
              setWeatherData([...weatherData, information]);
            }
          });
      }
    }
  };

  // function that takes input and if it is in the list of capital cities stores it in a variable called city

  const handleInput = (event) => {
    setError(false);
    if (event.key === "Enter") {
      if (capitalcities.includes(event.target.value)) {
        setDisplayWeather(true);
        setCity(event.target.value);
      } else {
        setError(true);
        setCity("");
      }
    }
  };

  // Button to change from start screen to search screen and back
  const handleClick = () => {
    setGetStart(!getStart);
  };

  const handleClickclear = () => {
    setCity("");

    setDisplayBlock(false);

    setInfo("");

    setWeatherData([]);
  };

  const handleInfo = () => {
    setInfo(!info);
  };

  // Used to fetch api data and save variables in session
  useEffect(() => {
    fetchCity();
    sessionStorage.setItem("displayweather", displayWeather);

    sessionStorage.setItem("displayblock", displayBlock);

    sessionStorage.setItem("weatherdata", JSON.stringify("weatherData"));
  }, [city]);

  return (
    <main class="flex items-center justify-center bg-[url('./Background.jpg')] bg-no-repeat bg-auto h-240 w-477.5">
      {getStart ? (
        <Startscreen onClick={handleClick} />
      ) : (
        <Day
          city={city}
          onKeyPress={handleInput}
          displayWeather={displayWeather}
          error={error}
          onClick={handleClick}
          onClickclear={handleClickclear}
          displayBlock={displayBlock}
          info={info}
          handleInfo={handleInfo}
          weatherData={weatherData}
        />
      )}
    </main>
  );
}

export default App;
