import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Day from "./components/Day/Day";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Startscreen from "./components/Startscreen/Startscreen";
import capitalcities from "./components/capitalcities";
import Sunny from "./WeatherIcons/sun.png";
import Cloudy from "./WeatherIcons/cloudy.png";
import Rain from "./WeatherIcons/rain.png";
import Snow from "./WeatherIcons/snow.png";

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

  const [preview, setPreview] = useState("");

  const [weatherData, setWeatherData] = useState([]);

  const [info, setInfo] = useState(false);

  const [user, setUser] = useState(localStorage.getItem("user", ""));

  const [failed, setFailed] = useState("");

  const [loading, setLoading] = useState("");

  const [refresh, setRefresh] = useState("");

  // Button to change from start screen to searching for cities screen and back

  const handleClick = async () => {
    setGetStart(!getStart);
    const acc = JSON.parse(localStorage.getItem("account"));
    try {
      const response = await axios.get("/api/cities/", {
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

  // function that takes input and if it is in the list of capital cities stores it in a variable called city

  const handleInput = (event) => {
    setError(false);
    if (event.key === "Enter") {
      if (capitalcities.includes(event.target.value)) {
        setDisplayBlock(true);
        setDisplayWeather(true);
        setInfo(true);
        setCity(event.target.value);
      } else {
        setError(true);
        setCity("");
      }
    }
  };

  // function that fetches information from api and stores it as an object in the weatherData array

  const fetchCity = () => {
    console.log("in fetch");

    if (city) {
      setLoading(true);
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
            setLoading(false);
            if (weatherData.length > 3) {
              return;
            } else {
              setDisplayBlock(true);
              setPreview(information);
            }
          });
      }
    }
  };

  // Add to saved cities

  const handleAdd = async () => {
    if (weatherData.length < 4) {
      if (preview) {
        setWeatherData([...weatherData, preview]);
        setCity("");
        const details = preview;
        setPreview("");
        const acc = JSON.parse(localStorage.getItem("account"));

        try {
          await axios.post("/api/cities/", details, {
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

  // Clear all saved cities

  const handleClickclear = async () => {
    setDisplayBlock(false);
    setDisplayWeather(false);
    setCity("");

    setWeatherData([]);
    const acc = JSON.parse(localStorage.getItem("account"));
    try {
      await axios.delete("/api/cities/", {
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

  // Refresh cities

  const HandleRefresh = () => {
    if (weatherData) {
      setRefresh(true);
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
            setRefresh(false);
            weatherRefreshData = [...weatherRefreshData, information];

            console.log("setWeather initiated");
            setWeatherData(weatherRefreshData);
          });
      });
    } else {
      return;
    }
  };

  // Log out of account

  const Logout = () => {
    setUser("");
    localStorage.clear();
  };

  // Used to fetch api data and save variables in session

  useEffect(() => {
    fetchCity();

    sessionStorage.setItem("displayweather", displayWeather);

    sessionStorage.setItem("displayblock", displayBlock);
  }, [city]);

  return (
    <main className="flex items-center justify-center bg-violet-300 bg-no-repeat bg-auto h-240 lg:w-477.5 md:w-238.75 sm:119 ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {getStart ? (
                  <Startscreen
                    onClick={handleClick}
                    user={user}
                    logout={Logout}
                  />
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
                    loading={loading}
                    logout={Logout}
                    user={user}
                    refresh={refresh}
                  />
                )}
              </>
            }
          />
          <Route
            path="/register"
            element={
              <Register
                user={user}
                setUser={setUser}
                failed={failed}
                setFailed={setFailed}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                user={user}
                setUser={setUser}
                failed={failed}
                setFailed={setFailed}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
