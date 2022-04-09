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
  const [city, setCity] = useState(sessionStorage.getItem("chosencity", ""));
  const [temp, setTemp] = useState(
    sessionStorage.getItem("chosentemperature", "")
  );
  const [cond, setCond] = useState(
    sessionStorage.getItem("chosencondition", "")
  );
  const [wind, setWind] = useState(sessionStorage.getItem("chosenwind", ""));
  const [image, setImage] = useState(sessionStorage.getItem("chosenimage", ""));
  const [displayWeather, setDisplayWeather] = useState(
    sessionStorage.getItem("chosenweather", "")
  );

  const [displayBlock1, setDisplayBlock1] = useState(
    sessionStorage.getItem("chosenblock1", false)
  );
  const [displayBlock2, setDisplayBlock2] = useState(
    sessionStorage.getItem("chosenblock2", false)
  );

  const [error, setError] = useState(false);
  const [cond1, setCond1] = useState(sessionStorage.getItem("chosencond1", ""));
  const [city1, setCity1] = useState(sessionStorage.getItem("chosencity1", ""));
  const [temp1, setTemp1] = useState(sessionStorage.getItem("chosentemp1", ""));
  const [precip1, setPrecip1] = useState(
    sessionStorage.getItem("chosenprecip1", "")
  );
  const [wind1, setWind1] = useState(sessionStorage.getItem("chosenwind1", ""));
  const [humid1, setHumid1] = useState(
    sessionStorage.getItem("chosenhumid1", "")
  );
  const [press1, setPress1] = useState(
    sessionStorage.getItem("chosenpress1", "")
  );
  const [image1, setImage1] = useState(
    sessionStorage.getItem("chosenimage1", "")
  );

  const [city2, setCity2] = useState(sessionStorage.getItem("chosencity2", ""));
  const [cond2, setCond2] = useState(sessionStorage.getItem("chosencond2", ""));
  const [temp2, setTemp2] = useState(sessionStorage.getItem("chosentemp2", ""));
  const [precip2, setPrecip2] = useState(
    sessionStorage.getItem("chosenprecip2", "")
  );
  const [wind2, setWind2] = useState(sessionStorage.getItem("chosenwind2", ""));
  const [humid2, setHumid2] = useState(
    sessionStorage.getItem("chosenhumid2", "")
  );
  const [press2, setPress2] = useState(
    sessionStorage.getItem("chosenpress2", "")
  );
  const [image2, setImage2] = useState(
    sessionStorage.getItem("chosenimage2", "")
  );

  const [switchCity, setSwitchCity] = useState(false);

  const [showExtraInfo, setShowExtraInfo] = useState(false);

  // function that fetches information from api

  const fetchCity = () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=49b3729be16b44f89da73548221803&q=${city}&aqi=no`;
    if (capitalcities.includes(city)) {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const temperature = data.current.temp_c;
          const condition = data.current.condition.text;
          const precipitation = data.current.precip_mm;
          const windspeed = data.current.wind_kph;
          const humidity = data.current.humidity;
          const pressure = data.current.pressure_in;

          handleFetch(
            temperature,
            condition,
            precipitation,
            windspeed,
            humidity,
            pressure
          );
        });
    } else {
      return;
    }
  };

  // Function that determines the condition and temperature

  const handleFetch = (
    temperature,
    condition,
    precipitation,
    windspeed,
    humidity,
    pressure
  ) => {
    if (city) {
      setTemp(temperature);
      setCond(condition);
      setWind(windspeed);
      console.log("temp and cond determined");
      if (switchCity === false) {
        setCity1(city);
        setTemp1(temperature);
        setPrecip1(precipitation);
        setWind1(windspeed);
        setHumid1(humidity);
        setPress1(pressure);
        setSwitchCity(true);
        setDisplayBlock1(true);
      } else if (switchCity === true) {
        setCity2(city);
        setTemp2(temperature);
        setPrecip2(precipitation);
        setWind2(windspeed);
        setHumid2(humidity);
        setPress2(pressure);
        setSwitchCity(false);
        setDisplayBlock2(true);
      }
    } else {
      setTemp("");
      setCond("");
      setWind("");
    }
    if (condition.includes("Sunny") || condition.includes("Clear")) {
      if (switchCity === false) {
        setImage1(Sunny);
      } else if (switchCity === true) {
        setImage2(Sunny);
      }
    } else if (
      condition.includes("Cloudy") ||
      condition.includes("Partly") ||
      condition.includes("Overcast")
    ) {
      if (switchCity === false) {
        setImage1(Cloudy);
      } else if (switchCity === true) {
        setImage2(Cloudy);
      }
    } else if (condition.includes("Rain") || condition.includes("rain")) {
      if (switchCity === false) {
        setImage1(Rain);
      } else if (switchCity === true) {
        setImage2(Rain);
      }
    } else if (condition.includes("Snow") || condition.includes("snow")) {
      if (switchCity === false) {
        setImage1(Snow);
      } else if (switchCity === true) {
        setImage2(Snow);
      }
    } else {
      if (switchCity === false) {
        setImage1("");
      } else if (switchCity === true) {
        setImage2("");
      }
    }
  };

  // function that changes the city whose information the api is fetching

  const handleInput = (event) => {
    let value = event.target.value;
    setError(false);
    if (event.key === "Enter") {
      if (capitalcities.includes(value)) {
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

  // Used to fetch api data
  useEffect(() => {
    sessionStorage.setItem("chosencity", city);
    sessionStorage.setItem("chosentemperature", temp);
    sessionStorage.setItem("chosencondition", cond);
    sessionStorage.setItem("chosenwind", wind);
    sessionStorage.setItem("chosenweather", displayWeather);

    sessionStorage.getItem("chosencond1", cond1);
    sessionStorage.getItem("chosencity1", city1);
    sessionStorage.getItem("chosentemp1", temp1);
    sessionStorage.getItem("chosenprecip1", precip1);
    sessionStorage.getItem("chosenwind1", wind1);
    sessionStorage.getItem("chosenhumid1", humid1);
    sessionStorage.getItem("chosenpress1", press1);

    sessionStorage.getItem("chosencity2", city2);
    sessionStorage.getItem("chosencond2", cond2);
    sessionStorage.getItem("chosentemp2", temp2);
    sessionStorage.getItem("chosenprecip2", precip2);
    sessionStorage.getItem("chosenwind2", wind2);
    sessionStorage.getItem("chosenhumid2", humid2);
    sessionStorage.getItem("chosenpress2", press2);

    fetchCity();

    sessionStorage.getItem("chosenblock1", displayBlock1);
    sessionStorage.getItem("chosenblock2", displayBlock2);

    sessionStorage.setItem("chosenimage", image);
    sessionStorage.getItem("chosenimage1", image1);
    sessionStorage.getItem("chosenimage2", image2);
  }, [city]);

  return (
    <main>
      {getStart ? (
        <Startscreen onClick={handleClick} />
      ) : (
        <Day
          city1={city1}
          cond1={cond1}
          temp1={temp1}
          precip1={precip1}
          wind1={wind1}
          humid1={humid1}
          press1={press1}
          image1={image1}
          city2={city2}
          cond2={cond2}
          temp2={temp2}
          precip2={precip2}
          wind2={wind2}
          humid2={humid2}
          press2={press2}
          image2={image2}
          switchCity={switchCity}
          onKeyPress={handleInput}
          displayWeather={displayWeather}
          error={error}
          onClick={handleClick}
          displayBlock1={displayBlock1}
          displayBlock2={displayBlock2}
        />
      )}
    </main>
  );
}

export default App;
