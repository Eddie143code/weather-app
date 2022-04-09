import React, { useState } from "react";
import Searchbar from "./Searchbar";
import capitalcities from "./capitalcities";
import { BiArrowBack } from "react-icons/bi";
import { WiStrongWind } from "react-icons/wi";
import "../index.css";

const Day = ({
  city1,
  cond1,
  temp1,
  precip1,
  wind1,
  humid1,
  press1,

  image1,
  city2,
  cond2,
  temp2,
  precip2,
  wind2,
  humid2,
  press2,
  image2,
  onKeyPress,
  displayWeather,
  error,
  onClick,

  displayBlock1,
  displayBlock2,
}) => {
  // Determine today's date
  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const date = new Date();
  const today =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

  const handleInfo1 = () => {
    setInfo2(false);
    setInfo1(true);
  };
  const handleInfo2 = () => {
    setInfo1(false);
    setInfo2(true);
  };

  return (
    <div className="container">
      <div className="arrow-div">
        <button className="arrow-box" onClick={onClick}>
          <BiArrowBack className="arrow" size="25px" />
        </button>
      </div>
      <div className="date-container">
        <div className="date-div">{today}</div>
      </div>
      <div className="error-div">
        <div className="error">
          {error && "Invalid input, please only search for capital cities"}
        </div>
      </div>
      <div className="searchbar-div">
        <Searchbar data={capitalcities} onKeyPress={onKeyPress} />
      </div>
      <div className="image-container-1">
        {displayWeather && !error && displayBlock1 && (
          <>
            <button className="image-container-1-div1" onClick={handleInfo1}>
              <div className="city-div">{city1}</div>
              <div className="image-container-div1-details">
                <span>
                  <img src={image1} alt="" height="40" width="40" />
                </span>
                <span className="temperature-block1">{temp1} °C</span>
              </div>
            </button>
          </>
        )}
        {displayWeather && !error && displayBlock2 && (
          <button className="image-container-1-div2" onClick={handleInfo2}>
            <div className="city-div">{city2}</div>
            <div className="image-container-div2-details">
              <span>
                <img src={image2} alt="" height="40" width="40" />
              </span>
              <span className="temperature-block2">{temp2} °C</span>
            </div>
          </button>
        )}
      </div>
      <div className="image-container-2">
        {displayWeather && !error && (
          <>
            {info1 ? (
              <>
                <div className="image-container-2-div1">
                  <div className="image-container-2-div1-details1">
                    <span className="precip">Precipitation:</span>{" "}
                    <span className="windpos">Wind:</span>
                  </div>
                  <div className="image-container-2-div1-details2">
                    <span className="precipamountpos">{precip1}</span>
                    <span className="windamountpos">{wind1}</span>
                  </div>
                </div>
                <div className="image-container-2-div2">
                  <div className="image-container-2-div2-details1">
                    <span className="humid">Humidity:</span>{" "}
                    <span className="prespos">Pressure:</span>
                  </div>
                  <div className="image-container-2-div2-details2">
                    <span className="humidamountpos">{humid1}</span>
                    <span className="pressamountpos">{press1}</span>
                  </div>
                </div>
              </>
            ) : info2 ? (
              <>
                <div className="image-container-2-div1">
                  <div className="image-container-2-div1-details1">
                    Precipitation: <span className="windpos">Wind:</span>
                  </div>
                  <div className="image-container-2-div1-details2">
                    <span className="precipamountpos">{precip2}</span>
                    <span className="windamountpos">{wind2}</span>
                  </div>
                </div>
                <div className="image-container-2-div2">
                  <div className="image-container-2-div2-details1">
                    Humidity: <span className="prespos">Pressure:</span>
                  </div>
                  <div className="image-container-2-div2-details2">
                    <span className="humidamountpos">{humid2}</span>
                    <span className="pressamountpos">{press2}</span>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Day;
