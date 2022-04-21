import React, { useState } from "react";
import Searchbar from "./Searchbar";
import capitalcities from "./capitalcities";
import { BiArrowBack } from "react-icons/bi";
import { WiStrongWind } from "react-icons/wi";
import "../index.css";
import WeatherSummaryView from "./WeatherSummary/WeatherSummaryView";
import WeatherExtraView from "./WeatherSummary/WeatherExtraView";

const Day = ({
  onKeyPress,
  displayWeather,
  error,
  onClick,
  onClickclear,

  displayBlock,

  info,
  handleInfo,

  weatherData,
}) => {
  // Determine today's date

  const date = new Date();
  const today =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

  return (
    <div
      class="flex-wrap items-center justify-center 
    m-auto bg-cyan-200 border-0 rounded-2xl h-131.25 w-75 shadow-slate-400 shadow-2l"
    >
      <div className="flex h-10 w-75">
        <button
          class="flex bg-white h-6 w-75 border-0 rounded-2xl"
          onClick={onClick}
        >
          <BiArrowBack class="bg-transparent border-transparent" size="25px" />
        </button>
      </div>
      <div class="flex h-12 w-75text-center justify-center">
        <div class="flex text-3xl">{today}</div>
      </div>
      <div class="flex text-center justify-center h-14 w-75">
        <span class=" font-semibold font-sans">
          {error && "Invalid input, please only search for capital cities"}
        </span>
        <span class="text-cyan-500 font-serif text-sm">
          {!error &&
            "Search any Capital City from around the world and press Clear All to remove them!"}
        </span>
      </div>
      <div class="flex flex-wrap justify-center  h-17.25 w-75">
        <Searchbar data={capitalcities} onKeyPress={onKeyPress} />
      </div>
      <div class="flex justify-end">
        <span class="flex">
          <button className="button-1" onClick={onClickclear}>
            Clear All
          </button>
        </span>
      </div>
      <div class="flex flex-wrap bg-slate-50 rounded-2xl h-72 w-75 justify-center justify-around">
        {weatherData.map((data) => {
          return (
            <WeatherSummaryView
              key={data}
              {...data}
              displayBlock={displayBlock}
              error={error}
              displayWeather={displayWeather}
              info={info}
              handleInfo={handleInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Day;
