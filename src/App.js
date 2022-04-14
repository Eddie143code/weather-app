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

  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  // function that fetches information from api

  const fetchCity = () => {
    console.log("in fetch");

    if (city1) {
      const url = `http://api.weatherapi.com/v1/current.json?key=49b3729be16b44f89da73548221803&q=${city1}&aqi=no`;

      if (capitalcities.includes(city1)) {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const temperature1 = data.current.temp_c;
            const condition1 = data.current.condition.text;
            const precipitation1 = data.current.precip_mm;
            const windspeed1 = data.current.wind_kph;
            const humidity1 = data.current.humidity;
            const pressure1 = data.current.pressure_in;

            handleFetch1(
              temperature1,
              condition1,
              precipitation1,
              windspeed1,
              humidity1,
              pressure1
            );
          });
      }
    }
    if (city2) {
      const url = `http://api.weatherapi.com/v1/current.json?key=49b3729be16b44f89da73548221803&q=${city2}&aqi=no`;
      if (capitalcities.includes(city2)) {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const temperature2 = data.current.temp_c;
            const condition2 = data.current.condition.text;
            const precipitation2 = data.current.precip_mm;
            const windspeed2 = data.current.wind_kph;
            const humidity2 = data.current.humidity;
            const pressure2 = data.current.pressure_in;

            handleFetch2(
              temperature2,
              condition2,
              precipitation2,
              windspeed2,
              humidity2,
              pressure2
            );
          });
      }
    }
  };

  // Function that determines the condition and temperature

  const handleFetch1 = (
    temperature1,
    condition1,
    precipitation1,
    windspeed1,
    humidity1,
    pressure1
  ) => {
    if (city1) {
      setTemp1(temperature1);
      setPrecip1(precipitation1);
      setWind1(windspeed1);
      setHumid1(humidity1);
      setPress1(pressure1);
      setSwitchCity(true);
      setDisplayBlock1(true);
    }

    if (condition1.includes("Sunny") || condition1.includes("Clear")) {
      setImage1(Sunny);
    } else if (
      condition1.includes("Cloudy") ||
      condition1.includes("Partly") ||
      condition1.includes("Overcast") ||
      condition1.includes("Mist")
    ) {
      setImage1(Cloudy);
    } else if (condition1.includes("Rain") || condition1.includes("rain")) {
      setImage1(Rain);
    } else if (condition1.includes("Snow") || condition1.includes("snow")) {
      setImage1(Snow);
    } else {
      setImage1("");
    }
  };

  const handleFetch2 = (
    temperature2,
    condition2,
    precipitation2,
    windspeed2,
    humidity2,
    pressure2
  ) => {
    if (city2) {
      setTemp2(temperature2);
      setPrecip2(precipitation2);
      setWind2(windspeed2);
      setHumid2(humidity2);
      setPress2(pressure2);
      setSwitchCity(false);
      setDisplayBlock2(true);
    }

    if (condition2.includes("Sunny") || condition2.includes("Clear")) {
      setImage2(Sunny);
    } else if (
      condition2.includes("Cloudy") ||
      condition2.includes("Partly") ||
      condition2.includes("Overcast") ||
      condition2.includes("mist")
    ) {
      setImage2(Cloudy);
    } else if (condition2.includes("Rain") || condition2.includes("rain")) {
      setImage2(Rain);
    } else if (condition2.includes("Snow") || condition2.includes("snow")) {
      setImage2(Snow);
    } else {
      setImage2("");
    }
  };

  // function that changes the city whose information the api is fetching

  const handleInput = (event) => {
    setError(false);
    if (event.key === "Enter") {
      if (capitalcities.includes(event.target.value)) {
        setDisplayWeather(true);
        if (!city1) {
          setCity1(event.target.value);
          console.log("target city1");
        } else if (!city2) {
          setCity2(event.target.value);
          console.log("target city2");
        }
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
    setCity1("");
    setTemp1("");
    setPrecip1("");
    setWind1("");
    setHumid1("");
    setPress1("");
    setDisplayBlock1(false);

    setCity2("");
    setTemp2("");
    setPrecip2("");
    setWind2("");
    setHumid2("");
    setPress2("");
    setDisplayBlock2(false);

    setInfo1("");
    setInfo2("");
  };

  const handleInfo1 = () => {
    setInfo2(false);
    setInfo1(true);
  };

  const handleInfo2 = () => {
    setInfo1(false);
    setInfo2(true);
  };

  // Used to fetch api data
  useEffect(() => {
    sessionStorage.setItem("chosenweather", displayWeather);

    sessionStorage.setItem("chosencond1", cond1);
    sessionStorage.setItem("chosencity1", city1);
    sessionStorage.setItem("chosentemp1", temp1);
    sessionStorage.setItem("chosenprecip1", precip1);
    sessionStorage.setItem("chosenwind1", wind1);
    sessionStorage.setItem("chosenhumid1", humid1);
    sessionStorage.setItem("chosenpress1", press1);
    sessionStorage.setItem("chosenblock1", displayBlock1);

    sessionStorage.setItem("chosenimage1", image1);
    fetchCity();
  }, [city1]);

  useEffect(() => {
    sessionStorage.setItem("chosencity2", city2);
    sessionStorage.setItem("chosencond2", cond2);
    sessionStorage.setItem("chosentemp2", temp2);
    sessionStorage.setItem("chosenprecip2", precip2);
    sessionStorage.setItem("chosenwind2", wind2);
    sessionStorage.setItem("chosenhumid2", humid2);
    sessionStorage.setItem("chosenpress2", press2);
    sessionStorage.setItem("chosenblock2", displayBlock2);

    sessionStorage.setItem("chosenimage2", image2);

    fetchCity();
  }, [city2]);

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
          onClickclear={handleClickclear}
          displayBlock1={displayBlock1}
          displayBlock2={displayBlock2}
          info1={info1}
          info2={info2}
          handleInfo1={handleInfo1}
          handleInfo2={handleInfo2}
        />
      )}
    </main>
  );
}

export default App;
