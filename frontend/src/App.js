import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Day from "./components/Day";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

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

  const [preview, setPreview] = useState("");

  const [weatherData, setWeatherData] = useState([]);

  const [info, setInfo] = useState(false);

  const [user, setUser] = useState("");

  // function that fetches information from api and stores it as an object in the weatherData array

  const fetchCity = () => {
    console.log("in fetch");

    if (city) {
      const url = `http://api.weatherapi.com/v1/current.json?key=49b3729be16b44f89da73548221803&q=${city}&aqi=no`;
      console.log("in fetch if statement");
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
              setPreview(information);
              // setWeatherData([...weatherData, information]);
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
  const handleClick = async () => {
    setGetStart(!getStart);
    const acc = JSON.parse(localStorage.getItem("account"));
    try {
      const response = await axios.get("http://localhost:5000/api/cities/", {
        headers: {
          authorization: `Bearer ${acc.token}`,
        },
      });
      const details = response.data.cities;
      details.map((r) => {
        return {
          city: r.city,
          temp: r.temp,
          precip: r.precip,
          wind: r.wind,
          humid: r.humid,
          press: r.press,
          image: r.image,
        };
      });
      setDisplayBlock(true);
      setDisplayWeather(true);

      setInfo(true);
      console.log(details);
      setWeatherData(details);
      console.log(weatherData);
    } catch (error) {
      return error;
    }
  };

  const handleClickclear = async () => {
    setCity("");

    setDisplayBlock(false);
    setDisplayWeather(false);

    setInfo(false);

    setWeatherData([]);
    const acc = JSON.parse(localStorage.getItem("account"));
    try {
      await axios.delete("http://localhost:5000/api/cities/", {
        headers: {
          authorization: `Bearer ${acc.token}`,
        },
      });
    } catch (error) {
      return error;
    }
  };

  const handleInfo = () => {
    setInfo(!info);
  };

  // if (!preview)

  const handleAdd = async () => {
    if (weatherData.length < 4) {
      if (preview) {
        setWeatherData([...weatherData, preview]);
        setCity("");
        const details = preview;
        setPreview("");
        const acc = JSON.parse(localStorage.getItem("account"));

        try {
          await axios.post("http://localhost:5000/api/cities/", details, {
            headers: {
              authorization: `Bearer ${acc.token}`,
            },
          });
        } catch (error) {
          return error;
        }
      }
    }
  };

  const HandleRefresh = () => {
    let weatherRefresh = weatherData;
    let weatherRefreshData = [];
    setWeatherData([]);
    weatherRefresh.forEach((r) => {
      const url = `http://api.weatherapi.com/v1/current.json?key=49b3729be16b44f89da73548221803&q=${r.city}&aqi=no`;

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let information = {
            city: r.city,

            temp: data.current.temp_c,
            precip: data.current.precip_mm,
            wind: data.current.wind_kph,
            humid: data.current.humidity,
            press: data.current.pressure_in,
          };

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
          weatherRefreshData = [...weatherRefreshData, information];
          console.log("setWeather initiated");
          setWeatherData(weatherRefreshData);
        });
    });
  };

  // Used to fetch api data and save variables in session
  useEffect(() => {
    fetchCity();
    if (localStorage.getItem("data") !== null) {
    }

    sessionStorage.setItem("displayweather", displayWeather);

    sessionStorage.setItem("displayblock", displayBlock);
  }, [city]);

  return (
    <main className="flex items-center justify-center bg-violet-400 bg-no-repeat bg-auto h-240 lg:w-477.5 md:w-238.75 ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {getStart ? (
                  <Startscreen onClick={handleClick} user={user} />
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
                    onClickadd={handleAdd}
                    preview={preview}
                    onClickRefresh={HandleRefresh}
                  />
                )}
              </>
            }
          />
          <Route
            path="/Register"
            element={<Register user={user} setUser={setUser} />}
          />
          <Route
            path="/Login"
            element={<Login user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
